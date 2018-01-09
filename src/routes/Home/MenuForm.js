
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Button, Checkbox, notification } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import FooterToolbar from '../../components/FooterToolbar';

import styles from './MenuForm.less';

const FormItem = Form.Item;
const ButtonGroup = Button.Group;

class MenuForm extends PureComponent {
  state = { formData: {} };

  componentWillReceiveProps(nextProps) {
    if (nextProps.formData) {
      this.setState({
        formData: nextProps.formData,
      });
      this.props.form.setFieldsValue(nextProps.formData);
    }
  }

  handleValidate = () => {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        notification.error({
          message: '表单提示',
          description: '表单验证失败，请正确填写表单信息',
        });
        return false;
      }
      notification.error({
        message: '表单提示',
        description: JSON.stringify(values, null, 2),
      });
      return true;
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
  }
  handleGoback = () => {

  }

  render() {
    const { formData } = this.state;
    const { getFieldDecorator } = this.props.form;
    const respProps = {
      sm: 12,
      xs: 24,
      md: 8,
      lg: 8,
      xl: 6,
      xxl: 6,
    };
    const rowProps = {
      gutter: 24,
    };
    return (
      <PageHeaderLayout
        wrapperClassName={styles.advancedForm}
        footerClassName={styles.footerClassName}
      >
        <Card
          title="菜单编辑"
          bordered={false}
          className={styles.card}
          extra={
            <div>
              <Button type="default" shape="circle" icon="rollback" className={styles.extraButton} />
              <Button type="default" shape="circle" icon="reload" className={styles.extraButton} />
            </div>
          }
        >
          <Form layout="vertical">
            <Row {...rowProps}>
              <Col {...respProps} key="name">
                <FormItem label="菜单名称">
                  {getFieldDecorator('name', {
                    rules: [{
                      required: true,
                      message: '菜单名称不能为空',
                    }],
                    initialValue: formData.name,
                  })(
                    <Input placeholder="请输入菜单名称" />
                    )}
                </FormItem>
              </Col>
              <Col {...respProps} key="uri">
                <FormItem label="菜单地址">
                  {getFieldDecorator('uri', {
                    rules: [{
                      required: true,
                      message: '菜单地址不能为空',
                    }],
                  })(
                    <Input placeholder="请输入菜单地址" />
                    )}
                </FormItem>
              </Col>
              <Col {...respProps} key="icon">
                <FormItem label="菜单图标">
                  {getFieldDecorator('icon', {
                    rules: [{
                      required: true,
                      message: '菜单地址不能为空',
                    }],
                    initialValue: 'code',
                  })(
                    <Input placeholder="请输入菜单图标" />
                    )}
                </FormItem>
              </Col>
              <Col {...respProps} key="parent">
                <FormItem label="父级菜单">
                  {getFieldDecorator('parent', {
                    rules: [],
                  })(
                    <Input placeholder="请输入父级菜单" />
                    )}
                </FormItem>
              </Col>
              <Col {...respProps} key="permission">
                <FormItem label="关联权限">
                  {getFieldDecorator('permission', {
                    rules: [{
                      required: true,
                      message: '权限编码不能为空',
                    }],
                  })(
                    <Input placeholder="请输入关联权限" />
                    )}
                </FormItem>
              </Col>
              <Col {...respProps} key="order">
                <FormItem label="显示顺序">
                  {getFieldDecorator('order', {
                    rules: [],
                    initialValue: 100,
                  })(
                    <Input placeholder="请输入显示顺序" />
                    )}
                </FormItem>
              </Col>
              <Col {...respProps} key="is_active">
                <FormItem label="是否启用">
                  {getFieldDecorator('is_active', {
                    valuePropName: 'checked',
                    rules: [{
                      required: true,
                      message: '启用标记不能为空',
                    }],
                    initialValue: true,
                  })(
                    <Checkbox>是否启用</Checkbox>
                    )}
                </FormItem>
              </Col>
              <Col {...respProps} key="is_out">
                <FormItem label="是否外链">
                  {getFieldDecorator('is_out', {
                    valuePropName: 'checked',
                    rules: [],
                    initialValue: false,
                  })(
                    <Checkbox>是否外链</Checkbox>
                    )}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
        <FooterToolbar>
          <Button type="default" onClick={this.handleReset}>重置</Button>
          <Button type="primary" onClick={this.handleValidate} loading={false}>提交</Button>
        </FooterToolbar>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  formData: state.formData,
}))(Form.create()(MenuForm));
