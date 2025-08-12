//export type HttpRequest = {
//  method: string;
//  baseUrl: string;
//  body: Record<string, any> | undefined;
//  cookies: object;
//  fresh: boolean;
//  host: string;
//  hostname: string;
//  ip: string;
//  ips: string[];
//  originalUrl: string;
//  params: object;
//  path: string;
//  protocol: string;
//  query: object;
//  secure: boolean;
//  signedCookies: object;
//  stale: boolean;
//  subdomains: string[];
//  xhr: boolean;
//};

import { boolToString } from "./index.js";

export function parseRequest(req) {
  console.log("params:", req.params);
  const httpRequest = {
    method: req.method,
    baseUrl: req.baseUrl,
    fresh: boolToString(req.fresh),
    host: req.host,
    hostname: req.hostname,
    ip: req.ip,
    ips: Buffer.from(req.ips),
    originalUrl: req.originalUrl,
    path: req.path,
    protocol: req.protocol,
    secure: boolToString(req.secure),
    stale: boolToString(req.stale),
    subdomains: Buffer.from(req.subdomains),
    xhr: boolToString(req.xhr),
  };

  if (req.body) {
    httpRequest.body = req.body;
  }

  if (req.cookies) {
    httpRequest.cookies = JSON.stringify(req.cookies);
  }

  if (req.params) {
    httpRequest.params = JSON.stringify(req.params);
  }

  if (req.query) {
    httpRequest.query = JSON.stringify(req.query);
  }

  if (req.signedCookies) {
    httpRequest.signedCookies = JSON.stringify(req.signedCookies);
  }

  return httpRequest;
}
