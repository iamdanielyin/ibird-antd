import mockjs from 'mockjs';
import { getRule, postRule } from './mock/rule';
import { getActivities, getNotice, getFakeList } from './mock/api';
import { getFakeChartData } from './mock/chart';
import { imgMap } from './mock/utils';
import { getProfileBasicData } from './mock/profile';
import { getProfileAdvancedData } from './mock/profile';
import { getNotices } from './mock/notices';
import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  // 支持值为 Object 和 Array
  'GET /mock/api/currentUser': {
    $desc: "获取当前用户接口",
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eHBsAsOrrJcnvFlnzNTT.png',
      userid: '00000001',
      notifyCount: 12,
    },
  },
  // GET POST 可省略
  'GET /mock/api/users': [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }],
  'GET /mock/api/project/notice': getNotice,
  'GET /mock/api/activities': getActivities,
  'GET /mock/api/rule': getRule,
  'POST /mock/api/rule': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postRule,
  },
  'POST /mock/api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /mock/api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }]
  }),
  'GET /mock/api/fake_list': getFakeList,
  'GET /mock/api/fake_chart_data': getFakeChartData,
  'GET /mock/api/profile/basic': getProfileBasicData,
  'GET /mock/api/profile/advanced': getProfileAdvancedData,
  'POST /mock/api/login/account': (req, res) => {
    const { password, userName } = req.body;
    res.send({ status: password === '888888' && userName === 'admin' ? 'ok' : 'error', type: 'account' });
  },
  'POST /mock/api/login/mobile': (req, res) => {
    res.send({ status: 'ok', type: 'mobile' });
  },
  'POST /mock/api/register': (req, res) => {
    res.send({ status: 'ok' });
  },
  'GET /mock/api/notices': getNotices,
};

export default noProxy ? {} : delay(proxy, 1000);
