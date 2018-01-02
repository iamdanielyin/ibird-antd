
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Select, Table, Alert, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './MenuForm.less';

const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

@connect(state => ({
  rule: state.rule,
}))
@Form.create()
export default class MenuForm extends PureComponent {
  state = {};

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'rule/fetch',
    // });
  }

  handleSelectRows = (selectedRowKeys) => {
    this.setState({
      selectedRowKeys,
    });
  }

  handleClearSelected = () => {
    this.setState({
      selectedRowKeys: [],
    });
  }


  render() {
    // const { rule: { loading: ruleLoading, data } } = this.props;
    const { selectedRowKeys, columns } = this.state;

    return (
      <PageHeaderLayout
        title="菜单编辑"
      >
        <Card bordered={false}>
          123
        </Card>
      </PageHeaderLayout>
    );
  }
}
