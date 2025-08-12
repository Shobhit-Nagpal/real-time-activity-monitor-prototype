export type HttpRequest = {
  method: string;
  baseUrl: string;
  body?: Record<string, any> | undefined;
  cookies?: string; //object
  fresh: string; //boolean
  host: string;
  hostname: string;
  ip: string;
  ips: string[]; //Buffer
  originalUrl: string;
  params?: string; //object
  path: string;
  protocol: string;
  query?: string; //object
  secure: string; //boolean
  signedCookies?: string; //object
  stale: string; //boolean
  subdomains: string[]; //Buffer
  xhr: string; //boolean
};
