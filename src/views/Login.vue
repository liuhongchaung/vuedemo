<template>
    <div class="login-container">
        <el-form :model="loginForm" :rules="rules"
                 status-icon
                 ref="loginForm"
                 label-position="left"
                 label-width="0px"
                 class="login-page">
            <h3 class="text-center">系统登录</h3>

            <el-form-item prop="loginName">
                <el-input type="text"
                          v-model="loginForm.loginName"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input type="password"
                          v-model="loginForm.password"
                          placeholder="密码">
                </el-input>
            </el-form-item>

            <el-form-item prop="checkCode">
                <el-input type="checkCode" style="width:45%;" @input="handleInput"
                          v-model="loginForm.checkCode"
                          placeholder="验证码">
                </el-input>
            </el-form-item>

            <el-form-item prop="role">
                <el-radio-group v-model="loginForm.role" class="radio-margin">
                    <el-radio value="2">普通用户</el-radio>
                    <el-radio value="1">管理员</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item style="width:100%;" class="button-margin">
                <el-button type="primary" style="width:30%;" @click="login">登录</el-button>
                <el-button type="primary" style="width:30%;" >注册</el-button>
            </el-form-item>


        </el-form>

    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                loginForm: {
                    loginName: '',
                    password: '',
                    role:'2',
                    checkCode:'',
                },
                rules: {
                    loginName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                    checkCode: [{required: true, message: '请输入验证码', trigger: 'blur'}],
                }
            }
        },
        methods: {
            login(){
                alert(this.loginForm.loginName )
                alert(this.loginForm.password )
            },
            handleInput() {
                //直接在input事件中处理，防止用户输入汉字
                this.loginForm.checkCode = this.loginForm.checkCode.replace(/[\u4e00-\u9fa5]/g, '');
                //不允许输入特殊符号
                this.loginForm.checkCode = this.loginForm.checkCode.replace(/[^\w\u4E00-\u9FA5]/g, '')
            }

        }
    }
</script>

<style>
    .login-container {
        width: 100%;
        height: 100%;
    }
    .text-center{
        text-align: center;
    }
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 250px;
        height: 300px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .radio-margin {
        margin-left: 10%;
    }
    .button-margin {
        margin-left: 16%;
    }
</style>
