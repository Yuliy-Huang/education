import request from './request';
import requestWithToken from './requestWithToken';

export function campusAddApi(params) {
  return request({
    url: '/api/system/dept/campus/add',
    method: 'post',
    data: params,
  });
}

export function campusListAddApi(params) {
  return requestWithToken({
    url: '/api/system/dept/campus/addList',
    method: 'post',
    data: params,
  });
}

export function campusGetApi(params) {
  return requestWithToken({
    url: '/api/system/dept/campus/list',
    method: 'get',
    params: params,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
}
