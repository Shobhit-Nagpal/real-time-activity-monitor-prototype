import type { HttpRequest } from "../types/http";
import { extractRequest } from "../utils/request";
import state from "./state";

export class Sockets {
  private socket: WebSocket;

  constructor(url: string) {
    this.socket = new WebSocket(url);
    this.init();
  }

  init() {
    this.socket.onopen = () => {
      console.log("[open] Connection established");
      this.socket.send("My name is John");
    };

    this.socket.onclose = () => {
      this.disconnect();
    };

    this.socket.onmessage = (e) => {
      let message = e.data;
      this.processStream(message);
    };

    this.socket.onerror = () => {
      alert(`[error]`);
    };
  }

  processStream(stream: any) {
    const payload = JSON.parse(stream);
    const messages = payload[0].messages;
    const id = messages[messages.length - 1].id;
    const req = messages[messages.length - 1].message;
    const newRequest = extractRequest(req, id);
    state.addRequest(newRequest);
  }

  disconnect() {
    this.socket.close();
  }
}
