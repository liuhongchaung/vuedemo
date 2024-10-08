<template>
    <div class="login-container">
        <el-form :model="ruleForm" :rules="rules"
                 status-icon
                 ref="ruleForm"
                 label-position="left"
                 label-width="0px"
                 class="login-page">
            <h3 class="text-center">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="ruleForm.username"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm.password"
                          placeholder="密码">
                </el-input>
            </el-form-item>


            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="hi()">登录</el-button>
            </el-form-item>


        </el-form>

    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                }
            }
        },
        methods: {
            hi(){
                alert(this.ruleForm.username )
                alert(this.ruleForm.password )
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
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
</style>