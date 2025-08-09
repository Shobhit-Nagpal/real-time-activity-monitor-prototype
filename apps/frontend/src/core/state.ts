import type { HttpRequest } from "../types/http";

class State extends EventTarget {
  private httpRequests: HttpRequest[];
  private _isConnected: boolean;

  constructor() {
    super();
    this.httpRequests = [];
    this._isConnected = false;
  }

  addRequest(req: HttpRequest) {
    this.httpRequests.push(req);
  }

  get isConnected() {
    return this._isConnected;
  }

  set isConnected(connected: boolean) {
    if (this._isConnected !== connected) {
      this._isConnected = connected;
    }
  }
}

const state = new State();

export default Object.freeze(state);
