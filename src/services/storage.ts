import { jwtDecode, JwtPayload } from 'jwt-decode';

class StorageService {
  private static _instance: this;
  private readonly localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  getValueFromStorage = (token: string): string | null =>
    localStorage.getItem(token);

  getParsedValueFromStorage = <T>(token: string): (JwtPayload & T) | null => {
    const value = this.getValueFromStorage(token);
    return value ? this.parseValueFromStorage<JwtPayload & T>(value) : null;
  };

  setValueIfNotInStorage = <T>(token: string, value: T): void => {
    if (!this.getValueFromStorage(token)) {
      localStorage.setItem(token, value);
    }
  };

  removeValueFromStorage = (token: string): void => {
    localStorage.removeItem(token);
  };

  private parseValueFromStorage = (token: string): JwtPayload =>
    jwtDecode<JwtPayload>(token);

  static getInstance = (): StorageService =>
    this._instance || (this._instance = new this());
}

const storageService = StorageService.getInstance();

export default storageService;
