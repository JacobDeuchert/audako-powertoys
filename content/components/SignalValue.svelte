<script lang="ts">
import Tooltip, { Wrapper } from '@smui/tooltip';
import { afterUpdate } from 'svelte';

import { Signal, SignalAnalogSettings, SignalDigitalSettings, SignalType } from '../models/signal';
import { SignalLiveValue } from '../services/SignalRService';
import { ColorUtils } from '../utils/color-utils';


    export let signal: Signal;
    export let signalValue: SignalLiveValue;

    let stringValue: string;
    let boolValue: boolean;
    let noValue: boolean;

    let ledStyle = {
      'led-color': null,
      'led-light-color': null
    }

    afterUpdate(() => {

      noValue = !signalValue || !signalValue.value;
      
      if (signal && signalValue) {

        switch (signal.Type.Value) {
          case SignalType.AnalogInput:
          case SignalType.AnalogInOut:
          case SignalType.Counter:
            const analogSettings= signal.Settings as SignalAnalogSettings;
            stringValue = signalValue.value?.toFixed(analogSettings?.DecimalPlaces?.Value ?? 2) + ' ' + analogSettings?.Unit?.Value;
            break;
          case SignalType.DigitalInput:
          case SignalType.DigitalInOut:
            const digitalSettings = signal.Settings as SignalDigitalSettings;
            boolValue = signalValue?.value >= 1;

            const color = boolValue ? digitalSettings.DigitalTrueColor.Value : digitalSettings.DigitalFalseColor.Value;
            ledStyle['led-color'] = color;
            ledStyle['led-light-color'] = ColorUtils.LightenDarkenColor(color, 20);
            break;
          case SignalType.UniservalInput:
          case SignalType.UnversalInOut:
            stringValue = signalValue?.value;
            break;
        }
      }
	});
    let signalType = SignalType;

    $: cssLedStyle= Object.entries(ledStyle)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<main>
  {#if signal}
    {#if signal.Type?.Value == signalType.AnalogInput || signal.Type?.Value == signalType.AnalogInOut || signal.Type?.Value == signalType.Counter}
    <Wrapper>
      <p>{ stringValue }</p>
      <Tooltip>Ayo</Tooltip>
    </Wrapper>
    {:else if signal.Type?.Value == signalType.DigitalInput || signal.Type?.Value == signalType.DigitalInOut}
      <div class="led" style="{cssLedStyle}"></div>
    {:else}
      <p>Universal</p>
    {/if}
  {/if}
</main>

<style>
.led {
  margin: 0 auto;
  width: 24px;
  height: 24px;
  background-color: var(--led-color);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset var(--led-light-color) 0 -1px 9px, var(--led-light-color) 0 2px 12px;
}
</style>