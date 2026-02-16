<script lang="ts">
import Tooltip, { Wrapper } from '@smui/tooltip';
import type {
  Signal,
  SignalAnalogSettings,
  SignalDigitalSettings,
  SignalLiveValue,
} from 'audako-core-components';
import { DateTime } from 'luxon';
import type { Observable, Subscription } from 'rxjs';
import { isObservable } from 'rxjs';
import { onMount } from 'svelte';
import { ColorUtils } from '../../../utils/color-utils';
import { SignalUtils } from '../../../utils/signal-utils';

const {
  signal,
  signalValue,
  displayTimestamp = false,
}: {
  signal: Signal;
  signalValue: SignalLiveValue | Observable<SignalLiveValue>;
  displayTimestamp?: boolean;
} = $props();

let stringValue = $state<string>('');
let boolValue = $state<boolean>(false);
let noValue = $state<boolean>(true);

let timestamp = $state<string>('');

let tooltip = $state<string>('');

const ledStyle = $state({
  'led-color': null,
  'led-light-color': null,
});

let valueSubscription: Subscription;

const timestampFormat = 'dd.MM.yyyy HH:mm:ss';

$effect(() => {
  if (isObservable(signalValue)) {
    valueSubscription?.unsubscribe();
    valueSubscription = signalValue.subscribe(value => {
      displaySignalValue(signal, value);
    });
  } else {
    displaySignalValue(signal, signalValue);
  }

  return () => {
    if (valueSubscription) {
      valueSubscription.unsubscribe();
    }
    console.log('cleanup');
  };
});

function displaySignalValue(signal: Signal, signalValue: SignalLiveValue): void {
  noValue = !signalValue || (!signalValue.value && signalValue.value !== 0);

  if (noValue) return;

  timestamp = formatTimestamp(signalValue.timestamp);

  createTooltip(signal, signalValue);

  if (SignalUtils.isAnalog(signal) || SignalUtils.isCounter(signal)) {
    displayAnalogValue(signal, signalValue);
  } else if (SignalUtils.isDigital(signal)) {
    displayDigitalValue(signal, signalValue);
  } else if (SignalUtils.isUniversal(signal)) {
    displayUniservalValue(signal, signalValue);
  }
}

function displayAnalogValue(signal: Signal, signalValue: SignalLiveValue): void {
  tooltip = formatTimestamp(signalValue.timestamp);

  const analogSettings = signal.Settings as SignalAnalogSettings;

  stringValue =
    new Intl.NumberFormat('de-DE', {
      maximumFractionDigits: analogSettings?.DecimalPlaces?.Value ?? 2,
    }).format(signalValue.value) +
    ' ' +
    analogSettings?.Unit?.Value;
}

function displayDigitalValue(signal: Signal, signalValue: SignalLiveValue): void {
  const digitalSettings = signal.Settings as SignalDigitalSettings;

  boolValue = signalValue?.value >= 1;

  const color = boolValue
    ? digitalSettings.DigitalTrueColor.Value
    : digitalSettings.DigitalFalseColor.Value;
  ledStyle['led-color'] = color;
  ledStyle['led-light-color'] = ColorUtils.LightenDarkenColor(color, 5);
}

function displayUniservalValue(signal: Signal, signalValue: SignalLiveValue): void {
  stringValue = signalValue?.value;
}

function createTooltip(signal: Signal, signalValue: SignalLiveValue): void {
  tooltip = timestamp;
  if (SignalUtils.isDigital(signal)) {
    const digitalSettings = signal.Settings as SignalDigitalSettings;
    tooltip = boolValue
      ? digitalSettings.DigitalTrueCaption.Value
      : digitalSettings.DigitalFalseCaption.Value + ' - ' + tooltip;
  }
}

function formatTimestamp(value: Date | string | number | null | undefined): string {
  if (value === null || value === undefined) {
    return '';
  }
  const dateTime =
    value instanceof Date
      ? DateTime.fromJSDate(value)
      : typeof value === 'number'
        ? DateTime.fromMillis(value)
        : DateTime.fromISO(value);
  return dateTime.setLocale('de').toFormat(timestampFormat);
}

const cssLedStyle = $derived(
  Object.entries(ledStyle)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';'),
);
</script>

<main>
  {#if signal}
    <Wrapper>
      <div style="display: flex">
      {#if noValue}
        <i class="fas fa-exclamation-triangle"></i>
      {:else}
      
        {#if SignalUtils.isAnalog(signal) || SignalUtils.isCounter(signal)}
            <p class="signal-value">{stringValue}</p>
        {:else if SignalUtils.isDigital(signal)}
          <div class="led" style={cssLedStyle}></div>
        {:else}
          <p class="signal-value">{stringValue}</p>
        {/if}
        {#if displayTimestamp}
          <div style="margin-left: 5px">
            ({timestamp})
          </div>
        {/if}
      {/if}

      

    </div>
    <Tooltip>{tooltip}</Tooltip>
    </Wrapper>
  {/if}
</main>

<style>
  .led {
    margin: 0 auto;
    width: 24px;
    height: 24px;
    background-color: var(--led-color);
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 0%) 0px -1px 7px 1px, rgb(0 0 0) 0px -1px 9px inset, var(--led-light-color) 0px 2px 12px;
  }

  .signal-value {
    font-weight: bold;
  }
</style>
