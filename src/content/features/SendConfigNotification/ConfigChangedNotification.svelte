<script lang="ts">
  import Snackbar, { Actions, Label, SnackbarComponentDev } from '@smui/snackbar';
  import Button from '@smui/button';
  import { ConfigurationEntity, EntityType } from '../../../models/configuration-entity';
  import {
    Signal,
    SignalAnalogSettings,
    SignalCounterSettings,
    SignalDigitalSettings,
    SignalType,
  } from '../../../models/signal';
  import { SignalUtils } from '../../../utils/signal-utils';
  import { container } from 'tsyringe';
  import { HttpService } from '../../../services/http.service';
  import { DataConnection } from '../../../models/data-connection';
  import { EntityChangeEvent, EntityDeleteEvent } from './entity-event';
  import { EventCondition, EventConditionSettingsType, SignalConditionSettings } from '../../../models/event-condition';

  let httpService: HttpService = container.resolve(HttpService);

  let changedDataSource: string = null;

  let snackbarWithAction: SnackbarComponentDev;

  document.addEventListener('entity-changed', async (changeEvent: CustomEvent<EntityChangeEvent>) => {
    console.log('Entitychanged', changeEvent);
    const oldEntity = changeEvent.detail.oldEntity;
    const newEntity = changeEvent.detail.newEntity;

    if (changeEvent.detail.entityType === EntityType.Signal) {
      handleSignalChange(oldEntity as Signal, newEntity as Signal);
    }

    if (changeEvent.detail.entityType === EntityType.EventCondition) {
      console.info(changeEvent);
    }
  });

    document.addEventListener('entity-deleted', async (deleteEvent: CustomEvent<EntityDeleteEvent>) => {
    console.log('EntityDeleted');
    const deletedEntity = deleteEvent.detail.entity;

    if (deleteEvent.detail.entityType === EntityType.Signal && deleteEvent.detail.entity) {
        handleSignalChange(deletedEntity as Signal, null);
      }
  });

  function sendDatSrcConfiguration(): void {
    console.log('DatSrcConfiguration');
    httpService.sendDatSrcConfiguration(changedDataSource);
  }

  async function handleSignalChange(oldSignal: Signal, newSignal: Signal): Promise<void> {
    if (!oldSignal || !newSignal || signalDatSrcConfigChanged(oldSignal, newSignal)) {
      let dataSourceId = await getDataSourceIdForSignal(newSignal ?? oldSignal);
      createNotificationForDataSource(dataSourceId);
    }       
  }

  function createNotificationForDataSource(dataSourceId: string): void {
    if (dataSourceId) {
      changedDataSource = dataSourceId;
      snackbarWithAction.open()
    }
  }

  async function getDataSourceIdForCondition(condition: EventCondition): Promise<string> {
    if (condition.Settings._t == EventConditionSettingsType.SignalConditionSettings) {
      const conditionSettings = condition.Settings as SignalConditionSettings;

      const signal = await httpService.getEntityById<Signal>(EntityType.Signal, conditionSettings.SignalId?.Value);
      
      if (!signal) {
        return null;
      }

      
      return await getDataSourceIdForSignal(signal as Signal)
    }

    return null;
  }

  async function getDataSourceIdForSignal(signal: Signal): Promise<string> {
    const dataConnectionId = signal.DataConnectionId?.Value;

    if (!dataConnectionId) {
      return null;
    }

    const dataConnection = (
      await httpService.queryConfiguration<DataConnection>(EntityType.DataConnection, { Id: dataConnectionId })
    )[0];

    if (!dataConnection) {
      return null;
    }
    return getDataSourceIdForDataConnection(dataConnection as DataConnection);
  }

  function getDataSourceIdForDataConnection(dataConnection: DataConnection): string {
    const dataConnectionId = dataConnection.DataSourceId?.Value;
    return dataConnectionId;
  }

  function signalDatSrcConfigChanged(oldSignal: Signal, newSignal: Signal): boolean {
    if (!oldSignal) {
      return true;
    }

    return (
      oldSignal?.DataConnectionId?.Value !== newSignal?.DataConnectionId?.Value ||
      oldSignal?.Address?.Value !== newSignal?.Address?.Value ||
      oldSignal?.Type?.Value !== newSignal?.Type?.Value ||
      signalTypeSettingsChanged(oldSignal, newSignal)
    );
  }

  function signalTypeSettingsChanged(oldSignal: Signal, newSignal: Signal): boolean {
    
    if (SignalUtils.isAnalog(newSignal) || SignalUtils.isCounter(newSignal)) {
      const oldAnalogSettings = oldSignal?.Settings as SignalAnalogSettings | SignalCounterSettings;
      const newAnalogSettings = newSignal?.Settings as SignalAnalogSettings | SignalCounterSettings;
      return (
        oldAnalogSettings.Factor.Value !== newAnalogSettings.Factor.Value ||
        oldAnalogSettings.Offset.Value !== newAnalogSettings.Offset.Value
      );
    }

    if (SignalUtils.isDigital(newSignal)) {
      const oldDigitalSettings = oldSignal?.Settings as SignalDigitalSettings;
      const newDigitalSettings = newSignal?.Settings as SignalDigitalSettings;
      return (
        oldDigitalSettings?.Invert?.Value !== newDigitalSettings?.Invert?.Value ||
        oldDigitalSettings?.BitSelect?.Value !== newDigitalSettings?.BitSelect?.Value ||
        oldDigitalSettings?.BitSelectConversion?.Value !== newDigitalSettings?.BitSelectConversion?.Value
      );
    }

    return false;
  }
</script>

<main>
  <Snackbar variant="stacked" class="send-config-snackbar" timeoutMs={10000} bind:this={snackbarWithAction}>
    <Label>Konfiguration für Datenquelle geändert</Label>
    <Actions>
      <Button on:click={() => sendDatSrcConfiguration()}>Konfig senden</Button>
    </Actions>
  </Snackbar>
</main>

<style>
  :global(.send-config-snackbar) {
    left: unset;
    bottom: unset;
    top: 50px;
  }

  :global(.send-config-snackbar .mdc-snackbar__surface) {
    min-width: unset !important;
  }
</style>
