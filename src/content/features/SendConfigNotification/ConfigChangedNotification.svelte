<script lang="ts">
  import Snackbar, { Actions, Label, SnackbarComponentDev } from '@smui/snackbar';
  import Button from '@smui/button';
  import { ConfigurationEntity, EntityType } from '../../../models/configuration-entity';
import { Signal, SignalAnalogSettings, SignalCounterSettings, SignalDigitalSettings, SignalType } from '../../../models/signal';
import { SignalUtils } from '../../../utils/signal-utils';
import { container } from 'tsyringe';
import { HttpService } from '../../../services/http.service';
  

  type EntityChangeEvent = {
    oldEntity: ConfigurationEntity;
    newEntity: ConfigurationEntity;
    entityType: EntityType;
  };

  let httpService: HttpService = container.resolve(HttpService);
  
  let snackbarWithAction: SnackbarComponentDev;

  document.addEventListener('entity-changed', (event: CustomEvent<EntityChangeEvent>) => {
    console.log('Entitychanged');

    if (event.detail.entityType === EntityType.Signal) {
      if (signalDatSrcConfigChanged(event.detail.oldEntity as Signal, event.detail.newEntity as Signal)) {
        snackbarWithAction.open();
      }
    }
  });

  async function getDataSourceIdForSignal(signal: Signal): Promise<string> {

    const dataConnectionId = signal.DataConnectionId?.Value;

    if (!dataConnectionId) {
      return null;
    }

    const dataConnections = await httpService.queryConfiguration(EntityType.DataConnection, {Id: dataConnectionId});

    const dataConnection = dataConnections[0];

    if (!dataConnection) {
      return null;
    }  
  } 

  async function getDataSourceIdForDataConnection(dataConnection: DataConnection)
  
  function signalDatSrcConfigChanged(oldSignal: Signal, newSignal: Signal): boolean {
    if (!oldSignal) {
      return true;
    }

    return oldSignal?.DataConnectionId?.Value !== newSignal?.DataConnectionId?.Value ||
           oldSignal?.Address?.Value !== newSignal?.Address?.Value ||
           oldSignal?.Type?.Value !== newSignal?.Type?.Value ||
           signalSettingsChanged(oldSignal, newSignal);
  }
  
  function signalSettingsChanged(oldSignal: Signal, newSignal: Signal): boolean {
    if (oldSignal?.Type?.Value !== newSignal?.Type?.Value) {
      return true;
    }

    if (SignalUtils.isAnalog(newSignal) || SignalUtils.isCounter(newSignal)) {
      const oldAnalogSettings = oldSignal?.Settings as SignalAnalogSettings | SignalCounterSettings;
      const newAnalogSettings = newSignal?.Settings as SignalAnalogSettings | SignalCounterSettings;
      return oldAnalogSettings.Factor.Value !== newAnalogSettings.Factor.Value ||
             oldAnalogSettings.Offset.Value !== newAnalogSettings.Offset.Value;
    }

    if (SignalUtils.isDigital(newSignal)) {
      const oldDigitalSettings = oldSignal?.Settings as SignalDigitalSettings;
      const newDigitalSettings = newSignal?.Settings as SignalDigitalSettings;
      return oldDigitalSettings?.Invert?.Value !== newDigitalSettings?.Invert?.Value ||
             oldDigitalSettings?.BitSelect?.Value !== newDigitalSettings?.BitSelect?.Value ||
             oldDigitalSettings?.BitSelectConversion?.Value !== newDigitalSettings?.BitSelectConversion?.Value;
             
    }

    return false;
  }
    

</script>

<main>
  <Snackbar variant="stacked" class="send-config-snackbar" timeoutMs={10000} bind:this={snackbarWithAction}>
    <Label>Konfiguration für Datenquelle geändert</Label>
    <Actions>
      <Button onclick={() => {
        window.location.reload();
      }}>
        Konfig senden
      </Button>
    </Actions>
  </Snackbar>
</main>

<style>
  :global(.send-config-snackbar) {
    left: unset;
    bottom: unset;
    top: 50px;
  }
</style>
