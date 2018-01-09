import {
  list,
  one,
  id,
  create,
  update,
  remove
} from '../services/api';

export default {
  namespace: 'menu-model',

  state: {
    list: [],
    formLoading: false,
    listLoading: false,
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      // 查询前开启loading
      yield put({ type: 'updateState', payload: { listLoading: true } });
      const response = yield call(list, payload);
      // 查询前取消loading
      yield put({ type: 'updateState', payload: { listLoading: false } });
      yield put({
        type: 'updateListData',
        payload: response,
      });
    },
  },

  reducers: {
    updateFormData(state, formData) {
      return {
        ...state,
        formData,
      };
    },
    updateListData(state, resp) {
      const listData = resp && resp.data && Array.isArray(resp.data.list) ? resp.data.list : [];
      const result = resp && resp.data ? resp.data : {};
      delete result.list;
      return {
        ...state,
        result,
        list: listData,
      };
    },
    updateState(state, nextState) {
      return {
        ...state,
        ...nextState,
      };
    },
  },
};
