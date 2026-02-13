import { Signal, SignalType } from 'audako-core-components';

export class SignalUtils {

  public static isAnalog(signal: Signal): boolean {
    return [SignalType.AnalogInOut, SignalType.AnalogInput].includes(signal?.Type?.Value);
  }

  public static isCounter(signal: Signal): boolean {
    return signal?.Type?.Value === SignalType.Counter;
  }

  public static isDigital(signal: Signal): boolean {
    return [SignalType.DigitalInOut, SignalType.DigitalInput].includes(signal?.Type?.Value);
  }

  public static isUniversal(signal: Signal): boolean {
    return [SignalType.UniversalInput, SignalType.UniversalInOut].includes(signal?.Type?.Value);
  }

}
