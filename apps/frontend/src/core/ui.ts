import { ElementIds } from "../constants/id";
import { sendHttpRequest } from "../utils/request";
import state from "./state";

export class UI {
  private sendReqBtn!: HTMLElement;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.init();
      this.setupListeners();
    });
  }

  init() {
    this.sendReqBtn = document.getElementById(ElementIds["sendReqBtn"])!;
    console.log(this.sendReqBtn);
    console.log("isConnected:", state.isConnected);
  }

  setupListeners() {
    this.sendReqBtn.addEventListener("click", sendHttpRequest);
  }
}

export const ui = new UI();
