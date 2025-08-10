import type { HttpRequest } from "../types/http";
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
      this.processMessage(message);
    };

    this.socket.onerror = () => {
      alert(`[error]`);
    };
  }

  processMessage(message: any) {
    const payload = JSON.parse(message);
    const messages = payload[0].messages;
    console.log(messages[messages.length - 1].message);
    const req = messages[messages.length - 1].message as HttpRequest;
    // Update the state here
    state.addRequest(req);
  }

  disconnect() {
    this.socket.close();
  }
}
