import { PRIMARY_BACKEND_URL } from "../constants/config";

export async function sendHttpRequest() {
  try {
    await fetch(`${PRIMARY_BACKEND_URL}/test`);
  } catch (err) {
    console.error(err);
    alert("Request had an error");
  }
}
