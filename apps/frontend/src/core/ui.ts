import { ElementIds } from "../constants/id";
import { sendHttpRequest } from "../utils/request";
import state from "./state";

export class UI {
  private sendReqBtn!: HTMLElement;
  private reqTable!: HTMLElement;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.init();
      this.setupListeners();
      this.render();
    });
  }

  init() {
    this.sendReqBtn = document.getElementById(ElementIds["sendReqBtn"])!;
    this.reqTable = document.getElementById(ElementIds["reqTable"])!;
  }

  setupListeners() {
    this.sendReqBtn.addEventListener("click", sendHttpRequest);
    state.addEventListener("addRequest", () => {
      this.init();
      this.setupListeners();
      this.render();
    });
  }

  render() {
    this.renderTable();
  }

  renderTable() {
    this.reqTable.innerHTML = `
    <tr>
      <th>Method</th>
      <th>Base URL</th>
      <th>Host</th>
      <th>Hostname</th>
      <th>Fresh</th>
      <th>IP</th>
      <th>Original URL</th>
    </tr>
    ${state
      .getRequests()
      .map((req) => 
    `
    <tr>
      <td>${req.method}</td>
      <td>${req.baseUrl}</td>
      <td>${req.host}</td>
      <td>${req.hostname}</td>
      <td>${req.fresh}</td>
      <td>${req.ip}</td>
      <td>${req.originalUrl}</td>
    </tr>
    `
    )
      .join("")}
  `;
  }
}

export const ui = new UI();
