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
    console.log(message);
    alert(message)
    // Update the state here
  }

  disconnect() {
    this.socket.close();
  }
}
