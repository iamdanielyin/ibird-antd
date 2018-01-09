/*
 * 通用接口操作模块
 * @Author: yinfxs
 * @Date: 2017-09-02 08:41:11
 * @Last Modified by: yinfxs
 * @Last Modified time: 2018-01-06 10:34:59
 */

import request from '../utils/request';

/**
 * 常规GET请求
 * @param url
 * @param onError
 * @returns {Object}
 */
export function get({ url, onError }) {
  return request({ url, onError });
}

/**
 * 常规POST请求
 * @param url
 * @param onError
 * @returns {Object}
 */
export function post({ url, body, onError }) {
  return request({
    url,
    options: {
      method: 'POST',
      body: JSON.stringify(body, null, 0),
    },
    onError,
  });
}

/**
 * 常规PUT请求
 * @param url
 * @param onError
 * @returns {Object}
 */
export function put({ url, body, onError }) {
  return request({
    url,
    options: {
      method: 'PUT',
      body: JSON.stringify(body, null, 0),
    },
    onError,
  });
}

/**
 * 常规DELETE请求
 * @param url
 * @param onError
 * @returns {Object}
 */
export function del({ url, body, onError }) {
  return request({
    url,
    options: {
      method: 'DELETE',
      body: JSON.stringify(body, null, 0),
    },
    onError,
  });
}

/**
 * 调用模型默认列表查询接口
 * @param url
 * @param onError
 * @returns {Object}
 */
export function list({ url, onError }) {
  return get({ url, onError });
}

/**
 * 调用模型默认单个查询接口
 * @param url
 * @param onError
 * @returns {Object}
 */
export function one({ url, onError }) {
  return get({ url, onError });
}

/**
 * 调用模型默认ID查询接口
 * @param url
 * @param onError
 * @returns {Object}
 */
export function id({ url, onError }) {
  return get({ url, onError });
}

/**
 * 调用模型默认新增接口
 * @param url
 * @param body
 * @param onError
 * @returns {Object}
 */
export function create({ url, body = {}, onError }) {
  return post({ url, body, onError });
}

/**
 * 调用模型默认修改接口
 * @param url
 * @param body
 * @param onError
 * @returns {Object}
 */
export function update({ url, body = {}, onError }) {
  return put({ url, body, onError });
}

/**
 * 调用模型默认删除接口
 * @param url
 * @param body
 * @param onError
 * @returns {Object}
 */
export function remove({ url, body = {}, onError }) {
  return del({ url, body, onError });
}
