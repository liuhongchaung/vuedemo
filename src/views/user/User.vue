<template>
    <div>
        <!--搜索框-->
        <div>
            <el-row :gutter="20">
                <el-col :span="6" :offset="3" >
                    用户姓名：<el-input v-model="this.selectUser.userName" style="width: 60%"/>
                </el-col>
                <el-col :span="6">
                    登录账号：<el-input v-model="this.selectUser.loginName" style="width: 60%"/>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="selectUsers">查询</el-button>
                    <el-button type="primary" @click="resetUser">重置</el-button>
                </el-col>
            </el-row>

            <div class="div-addBut">
                <el-button type="primary" @click="addUser()">新增用户</el-button>
            </div>

        </div>
        <!--表格-->
        <el-table :data="tableData" style="width: 100%" border
                  :cell-style="{'text-align':'center'}"
                  :header-cell-style="{'text-align':'center','height':'60px','background':'#F6F9FC'}">
            <el-table-column label="序号" type="index" width="55px"/>
            <el-table-column label="姓名" prop="userName" />
            <el-table-column label="账号" prop="loginName" />
            <el-table-column label="密码" prop="password" />
            <el-table-column label="权限" prop="role">
                <template #default="scope">
                    <span v-if="scope.row.role ==='1'">管理员</span>
                    <span v-else-if="scope.row.role ==='2'">普通用户</span>
                </template>
            </el-table-column>
            <el-table-column label="创建日期" prop="createTime" />
            <el-table-column label="是否有效" prop="valid">
                <template #default="scope">
                    <el-switch v-model="scope.row.valid" inline-prompt
                               active-value="1" inactive-value="2"
                               active-text="是" inactive-text="否"
                               style="--el-switch-on-color: #13ce66;--el-switch-off-color: #ff4949"
                               @change="changeSwitch(scope.row.id,scope.row.valid)"/>
                </template>

            </el-table-column>
            <el-table-column label="操作" prop="name">
                <template #default="scope">
                    <el-button size="small" type="primary" @click="handleEdit(scope.row)">
                        编辑
                    </el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
        <div>
            <el-pagination v-model:current-page="this.pageNum"
                           v-model:page-size="this.pageSize"
                           :page-sizes="[10, 20, 50, 100]"
                           layout="total, sizes, prev, pager, next"
                           :total="this.total"
                           @size-change="selectUsers"
                           @current-change="selectUsers"/>
        </div>
        <!--编辑页面-->
        <el-dialog v-model="this.videoVisible" :close-on-click-modal = "false"
                   :before-close="closeDialog" width="40%">
            <div slot="title">
               <span class="span-tittle">{{this.videoTittle}}</span>
                <el-divider/>
            </div>
            <div  class="dialog-div">
                <el-form :model="addUserFrom" :rules="rules"
                         status-icon
                         ref="addUserFrom"
                         label-width="auto">


                    <el-form-item prop="userName"  label="姓名">
                        <el-input  v-model="addUserFrom.userName" placeholder="请输入姓名" style="width: 250px"/>
                    </el-form-item>

                    <el-form-item prop="loginName" label="账号">
                        <el-input v-model="addUserFrom.loginName" placeholder="请输入账号"/>
                    </el-form-item>

                    <el-form-item  prop="password" label="密码">
                        <el-input v-model="addUserFrom.password" placeholder="请输入密码"/>
                    </el-form-item>

                    <el-form-item prop="role" label="权限">
                        <el-radio-group v-model="addUserFrom.role">
                            <el-radio value="1" size="small">管理员</el-radio>
                            <el-radio value="2" size="small">普通用户</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <!--<el-form-item prop="createTime" label="创建时间">
                        <el-input v-model="addUserFrom.createTime" placeholder="创建时间"/>
                    </el-form-item>

                    <el-form-item prop="role" label="是否有效">
                        <el-input v-model="addUserFrom.valid" placeholder="权限"/>
                    </el-form-item>-->

                    <el-form-item class="dialog-but">
                        <el-button type="primary" @click="saveUser">保存</el-button>
                        <el-button type="primary" @click="closeDialog">关闭</el-button>
                    </el-form-item>

                </el-form>
            </div>


        </el-dialog>

    </div>


</template>

<script>
    import {post,get} from "../../utils/api";

    export default {
    name: 'User',
    mounted(){
        this.selectUsers();
    },
    data(){
        return{

            selectUser:{
              userName:'',
              loginName: '',
            },
            videoVisible:false,
            videoTittle:'',
            addUserFrom:{
                id:'',
                userName: '',
                loginName: '',
                password: '' ,
                role: '' ,
                createTime: '' ,
                valid: '' ,
            },
            pageNum:1,
            pageSize:10,
            total: 0,
            tableData: [],
            rules: {
                userName: [{required: true, message: '请输入姓名', trigger: 'blur'}],
                loginName: [{required: true, message: '请输入账号', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                role: [{required: true, message: '请选择权限', trigger: 'blur'}],
            }
        }
    },
    methods: {
        handleEdit(row) {
            this.videoTittle = '编辑用户';
            this.videoVisible = true;
            this.addUserFrom.id = row.id;
            this.addUserFrom.userName = row.userName;
            this.addUserFrom.loginName = row.loginName;
            this.addUserFrom.password = row.password;
            this.addUserFrom.role = row.role;
        },
        handleDelete(userId) {
            this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                type: 'warning'
            }).then(() => {
                get('/user/deleteUser?userId='+userId).then(response => {
                    if (response) {
                        this.selectUsers();
                    }
                })
            }).catch(() => {
            });
        },
        changeSwitch(userId,valid) {
            this.addUserFrom.id = userId;
            this.addUserFrom.valid = valid;
            post('/user/addUser', this.addUserFrom).then(response => {
                if (response) {
                    this.selectUsers();
                }
            })
        },
        resetUser(){
            this.selectUser.loginName = '';
            this.selectUser.userName = '';
            this.pageNum = 1;
            this.pageSize = 10
            this.selectUsers() ;
            },
        selectUsers() {
            let params = {
                loginName: this.selectUser.loginName,
                userName: this.selectUser.userName,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            };
            post('/user/getAllUser', params).then(response => {
                if (response) {
                    this.tableData = response.data.list;
                    this.total = response.data.total;
                }
            })
        },
        addUser() {
            this.videoVisible = true;
            this.videoTittle = '增加用户';
        },
        saveUser() {
            this.$refs.addUserFrom.validate((valid) => {
                if (valid) {
                    post('/user/addUser', this.addUserFrom).then(response => {
                        if (response) {
                            this.closeDialog();
                            this.selectUsers();
                        }
                    })
                }
            })
        },
        closeDialog() {
            this.videoVisible = false;
            this.addUserFrom.id = '';
            this.addUserFrom.userName = '';
            this.addUserFrom.loginName = '';
            this.addUserFrom.password = '';
            this.addUserFrom.role = '';
            /*this.addUserFrom.createTime = '';
            this.addUserFrom.valid = '';*/
            //清除校验
            this.$refs.addUserFrom.clearValidate()

        },
    }
}
</script>

<style>
    .div-addBut{
        margin-bottom: 5px;
    }
    .span-tittle{
        font-size: 20px;
        font-weight: bold;
    }
    .dialog-div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialog-but{
        margin-left: 23%;
    }
</style>
