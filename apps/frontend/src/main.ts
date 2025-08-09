import "./style.css";
import { ElementIds } from "./constants/id.ts";
import { ui } from "./core/ui.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <button id='${ElementIds["sendReqBtn"]}'>Send Request</button>
  </div>
`;
