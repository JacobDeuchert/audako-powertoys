<script lang="ts">
import Tooltip, { Wrapper } from '@smui/tooltip';
import { afterUpdate } from 'svelte';

import { Signal, SignalAnalogSettings, SignalDigitalSettings, SignalType } from '../../models/signal';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { SignalLiveValue } from '../../services/signalR.service';
import { ColorUtils } from '../../utils/color-utils';


    export let signal: Signal;
    export let signalValue: SignalLiveValue;

    let stringValue: string;
    let boolValue: boolean;
    let noValue: boolean;

    let tooltip: string;

    let ledStyle = {
      'led-color': null,
      'led-light-color': null
    }

    afterUpdate(() => {

      noValue = !signalValue || !signalValue.value;
      
      if (signal && signalValue) {

        tooltip = dayjs(signalValue.timestamp).locale('de').format('DD.MM.YYYY HH:mm:ss');

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
            tooltip = boolValue ? digitalSettings.DigitalTrueCaption.Value : digitalSettings.DigitalFalseCaption.Value + ' - ' + tooltip;

            const color = boolValue ? digitalSettings.DigitalTrueColor.Value : digitalSettings.DigitalFalseColor.Value;
            ledStyle['led-color'] = color;
            ledStyle['led-light-color'] = ColorUtils.LightenDarkenColor(color, 5);
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
  <Wrapper>
    <div>
      {#if signal.Type?.Value == signalType.AnalogInput || signal.Type?.Value == signalType.AnalogInOut || signal.Type?.Value == signalType.Counter}
        {#if stringValue}
          <p>{ stringValue }</p>
        {:else}
          <i class="fas fa-exclamation-triangle"></i>
        {/if}
      {:else if signal.Type?.Value == signalType.DigitalInput || signal.Type?.Value == signalType.DigitalInOut}
        <div class="led" style="{cssLedStyle}"></div>
      {:else}
      <p>{ stringValue }</p>
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
</style>  