import "./style.css";
import { ElementIds } from "./constants/id.ts";
import "./core/ui.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <button id='${ElementIds["sendReqBtn"]}'>Send Request</button>

    <table id='${ElementIds["reqTable"]}'>
      <tr>
        <th>Method</th>
      </tr>
    </table>

  </div>
`;
