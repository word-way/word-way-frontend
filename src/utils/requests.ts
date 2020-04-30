import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import parse from 'url-parse';

import { getConfig } from './config';

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';

export const constructURL = (pathname: string): parse => {
  const url = parse(getConfig('REACT_APP_SERVER_URL'));
  return url.set('pathname', pathname);
};

export async function request(
  pathname: string,
  method: Method,
  data?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  params?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  accessToken?: string,
): Promise<AxiosResponse> {
  const url = constructURL(pathname);
  const payload: AxiosRequestConfig = {
    method: method,
    url: url.toString(),
    headers: {},
    params: params,
  };
  if (accessToken != null) {
    payload['headers']['Authorization'] = `Bearer ${accessToken}`;
  }
  switch (method) {
    case 'post':
    case 'put':
      payload['headers']['Content-Type'] = 'application/json';
      payload['data'] = JSON.stringify(data);
      break;
  }
  return await axios(payload);
}
