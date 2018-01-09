/**
 * 账户服务模块
 */

import request from '../utils/request';

export async function accountLogin(params) {
  return request('/api/login', {
    method: 'POST',
    body: params,
  });
}

export async function accountLogout() {
  return request('/api/logout', {
    method: 'POST',
  });
}
