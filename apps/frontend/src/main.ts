import "./style.css";
import { ElementIds } from "./constants/id.ts";
import "./core/ui.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="flex flex-col items-center">
    <button id='${ElementIds["sendReqBtn"]}'>Send Request</button>

    <table id='${ElementIds["reqTable"]}' class="table">
    </table>

  </div>
`;
