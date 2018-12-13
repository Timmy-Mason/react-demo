import React, {Component} from 'react';
// cookie
import cookie from 'react-cookies'
import './login.css'
import {message,Form, Icon, Input, Button, Checkbox,} from 'antd';
const FormItem = Form.Item;

class loginForm extends Component {
    constructor(props) {
        // 必须调用super,和继承相关
        super(props);
        if(cookie.load("react_admin_token") === "591e90aa2c1b3110490592f0"){
            // this必须在super后边才能够访问和使用
            this.props.history.push({pathname: '/react_admin'});
        }
        // 禁止在构造函数中调用setState，可以直接给state设置初始值
        this.state = {
            loginPath: "aaa"
        }
    }
    componentDidMount() {
        // 已生效
        // if("判断是否登陆的条件"){
        //     this.props.history.push({ pathname : '/APP'})
        // }
    }
    handleClick() {
        this.props.history.push({pathname: '/react_admin'});
    }
    // form提交登陆
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                // 下边发起ajax请求判断输入的账号和密码是否正确
                if(value.userName === "admin" && value.password === "1234567"){
                    cookie.save("react_admin_token","591e90aa2c1b3110490592f0");
                    this.props.history.push({pathname: '/react_admin'});
                }else if(value.userName !== "admin" || value.password !== "1234567"){
                    message.info('账号或者密码错误');
                }
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-container">
                {/*原始：跳转方案1*/}
                {/*<Button onClick={this.handleClick.bind(this)} type="primary">点击我跳转</Button>*/}
                {/*<Route path={this.state.loginPath} component={App}/>*/}
                {/*<Link to="/App">*/}
                {/*<Button type="primary">点击我跳转</Button>*/}
                {/*</Link>*/}
                {/*<Route path="/App" component={App}></Route>*/}

                {/*原始：跳转方案2*/}
                {/*<Button onClick={this.handleClick.bind(this)} type="primary">点击我跳转</Button>*/}

                {/*现在：form表单进行跳转*/}
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="javascript:void(0);">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                        </Button>
                        Or <a href="javascript:void(0);">register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const login = Form.create()(loginForm);
export default login;