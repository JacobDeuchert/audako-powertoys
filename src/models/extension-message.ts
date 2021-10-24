export enum MessageType {
  RegisterUrl
}

export class ExtensionMessage {
  public type: MessageType;

  constructor(type: MessageType) {
    this.type = type;
  }
}