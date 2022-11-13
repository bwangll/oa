import $http from '@/servicer';
export default {
  namespace: 'user',
  state: {
    userInfo: null,
  },
  reducers: {},
  effects: {
    * login({ payload }: any, { put, call, select }: any) {
      const { data, msg } = yield call($http.userLogin, payload);
      console.log(msg);
    },
  },
};
