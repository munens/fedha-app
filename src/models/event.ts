export enum EventNames {
  NEW_TOKEN = 'NEW_TOKEN',
  TOKEN_REMOVED = 'TOKEN_REMOVED'
}

export class FedhaEvent extends Event {
  constructor(type: EventNames, eventInitDict?: EventInit) {
    super(type, eventInitDict);
  }
}
