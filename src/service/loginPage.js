import request from './request';

export function registerApi(params) {
  return request({
    url: '/api/register',
    method: 'post',
    data: params,
  });
}

export function loginApi(params) {
  return request({
    url: '/api/login',
    method: 'post',
    data: params,
  });
}
