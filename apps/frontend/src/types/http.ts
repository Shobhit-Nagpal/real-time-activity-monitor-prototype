export type HttpRequest = {
  id: string;
  method: string;
  baseUrl: string;
  body?: Record<string, any> | undefined;
  cookies?: object; //object
  fresh: boolean; //boolean
  host: string;
  hostname: string;
  ip: string;
  ips: string[]; //Buffer
  originalUrl: string;
  params?: object; //object
  path: string;
  protocol: string;
  query?: object; //object
  secure: boolean; //boolean
  signedCookies?: string; //object
  stale: boolean; //boolean
  subdomains: string[]; //Buffer
  xhr: boolean; //boolean
};
