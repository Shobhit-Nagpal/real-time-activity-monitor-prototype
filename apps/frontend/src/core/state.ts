import type { HttpRequest } from "../types/http";

import { Sockets } from "./sockets";

class State extends EventTarget {
  private httpRequests: HttpRequest[];
  private _isConnected: boolean;
  private ws: Sockets;

  constructor() {
    super();
    this.httpRequests = [];
    this._isConnected = false;
    this.ws = new Sockets("ws://localhost:3001");
  }

  addRequest(req: HttpRequest) {
    this.httpRequests.push(req);
    this.dispatchEvent(new Event("addRequest"));
  }

  getRequests() {
    return this.httpRequests;
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
