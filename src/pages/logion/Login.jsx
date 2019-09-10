import React, { Component } from "react";
import "./login.less";
import logo from "./images/logo.png";
import { Form, Icon, Input, Button } from "antd";
/*
    登录的路由组件
*/



const Item = Form.Item;//需要注意的是此写法不能写到import之前·

class Login extends Component {
    handleSubmit=(event)=>{
        //阻止事件的默认行为
        event.preventDefault(); 

       //在此方法中发送ajax请求将用户的登录信息发送给后台保存在数据库中 
    //    取输入的值，，，，通过得到强大的属性form对象进行取值
    const form = this.props.form;
    // 获取表单的值
    const values = form.getFieldsValue()
    console.log('handleSubmit()',values);
        
    }
  render() {
// 得到具有强大功能的form对象
    const form = this.props.form;
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
              {/* 用户名 */}
            <Item>
            {
                getFieldDecorator('username', {//配置对象：属性名是一些特定的名称
                rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={ <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> } placeholder="Username" />
                  ,)
          }
              </Item>
                {/* 密码 */}
            <Item>
                {
                    getFieldDecorator('password', {
                         rules: [{ required: true, message: 'Please input your password!' }],
                    })(
              <Input  prefix={ <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> } type="password" placeholder="Password" />
                   , )
                }
                </Item>
             {/* 登录 */}
            <Item>
              <Button  type="primary"  htmlType="submit" className="login-form-button" >
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}

/*
    1、高阶组件
        1）、本质就是一个函数
        2）、接受一个组件（被包装组件），返回一个新的组件（包装组件），包装组件会向被包装组件传入特定属性
        3）、作用：扩展组件的功能
        4）、高阶组件也是高阶函数：接收一个组件函数，返回是一个新的组件函数
    2、高阶函数
            create是一个高阶函数，因为他返回的是一个函数
            getFieldDecorator()(组件标签)
            1)一类特别的函数
                1.接受函数类型的参数
                2、返回值是函数
                只要满足一种就是高阶函数
            2）常见
            参数是函数
            a.定时器：setTimeout()/setInterval()
            b:promise:promise(()=>{})then(value=>{},reason=>{})
            c:数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()
            返回值是函数
            d:函数对象的bind()
            e:Form.create()() / getFieldDecorator()(组件标签)

            3）高阶函数更新动态，更加具有扩展性：

3.组件和标签对象的区别
    组件是一个构造函数，最后产生对象实例，组件的实例就是标签对象
    即组件是一个类型，标签是组件的一个实例
    而高阶组件是为了包装组件的
{
    getFieldDecorator('参数的描述',｛｝)(组件标签)
}
            
*/ 
/*
    包装form组件生成一个新的组件：Form(Login)
    新的组件会向Form组件传递一个强大的对象属性：form,即父组件会给子组件传递一个小写的form
*/ 
const WrapLogin = Form.create()(Login);
export default WrapLogin;
/*
    前台表单验证--------输入过程中或者点击登录的时候
    收集数据
*/ 