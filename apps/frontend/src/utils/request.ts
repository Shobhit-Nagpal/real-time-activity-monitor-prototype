import { stringToBoolean } from ".";
import { PRIMARY_BACKEND_URL } from "../constants/config";
import type { HttpRequest } from "../types/http";

export async function sendHttpRequest() {
  try {
    await fetch(`${PRIMARY_BACKEND_URL}/test`);
  } catch (err) {
    console.error(err);
    alert("Request had an error");
  }
}

export function extractRequest(request: any, id: string): HttpRequest {
  const req: HttpRequest = {
    id,
    method: request.method,
    baseUrl: request.baseUrl,
    cookies: request.cookies ? JSON.parse(request.cookies) : {},
    fresh: stringToBoolean(request.fresh),
    host: request.host,
    hostname: request.hostname,
    ip: request.ip,
    ips: JSON.parse(request.ips),
    originalUrl: request.originalUrl,
    params: request.params ? JSON.parse(request.params) : {},
    path: request.path,
    protocol: request.protocol,
    query: request.query ? JSON.parse(request.query) : {},
    secure: request.secure,
    signedCookies: request.signedCookies
      ? JSON.parse(request.signedCookies)
      : {},
    stale: stringToBoolean(request.stale),
    subdomains: JSON.parse(request.subdomains),
    xhr: stringToBoolean(request.xhr),
  };

  return req;
}
