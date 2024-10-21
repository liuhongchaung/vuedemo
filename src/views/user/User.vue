<template>
    <!--搜索框-->
    <div>
        <el-row :gutter="20">
            <el-col :span="6" :offset="2" >
                用户姓名：<el-input v-model="this.selectUser.userName" style="width: 60%"/>
            </el-col>
            <el-col :span="6">
                登录账号：<el-input v-model="this.selectUser.loginName" style="width: 60%"/>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="selectUsers">查询</el-button>
            </el-col>
        </el-row>
        <!--分割线-->
        <el-divider border-style="double" />
    </div>
    <!--表格-->
    <el-table :data="tableData" style="width: 100%" border
              :cell-style="{'text-align':'center'}"
              :header-cell-style="{'text-align':'center','height':'60px','background':'#F6F9FC'}">
        <el-table-column label="序号" type="index" width="55px"/>
        <el-table-column label="用户姓名" prop="name" />
        <el-table-column label="登录账号" prop="loginName" />
        <el-table-column label="密码" prop="password" />
        <el-table-column label="权限" prop="role">
            <template #default="scope">
                <span v-if="scope.row.role ==='1'">管理员</span>
                <span v-else-if="scope.row.role ==='2'">普通用户</span>
            </template>
        </el-table-column>
        <el-table-column label="创建日期" prop="date" />
        <el-table-column label="是否有效" prop="valid">
            <template #default="scope">
                <el-switch v-model="scope.row.valid" inline-prompt
                        active-value="1" inactive-value="2"
                        active-text="是" inactive-text="否"
                        style="--el-switch-on-color: #13ce66;--el-switch-off-color: #ff4949"
                        @change="changeSwitch(scope.row.valid)"/>
            </template>

        </el-table-column>
        <el-table-column label="操作" prop="name">
            <template #default="scope">
                <el-button size="small" type="primary" @click="handleEdit(scope.row)">
                    编辑
                </el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.row)">
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
                       :total="this.tableData.length"/>
                       <!--@size-change="handleSizeChange"
                       @current-change="handleCurrentChange"/>-->
    </div>
</template>

<script>
    export default {
    name: 'User',
    mounted(){

    },
    data(){
        return{
            selectUser:{
              userName:'',
              loginName: '',
            },
            userInfo:{
                date: '',
                name: '',
                address: '' ,
            },
            pageNum:1,
            pageSize:20,
            tableData:[
                {
                    id:'',
                    date: '2016-05-03',
                    name: 'Tom',
                    loginName: 'tom',
                    password: '123456',
                    role: '1',
                    valid: '1',
                },
                {
                    id:'',
                    date: '2016-05-02',
                    name: 'John',
                    loginName: 'john',
                    password: '123456',
                    role: '1',
                    valid: '1',

                },
                {
                    date: '2016-05-04',
                    name: 'Morgan',
                    loginName: 'morgan',
                    password: '123456',
                    role: '1',
                    valid: '1',

                },
                {
                    date: '2016-05-01',
                    name: 'Jessy',
                    loginName: 'jessy',
                    password: '123456',
                    role: '2',
                    valid: '2',

                },
                {
                    id:'',
                    date: '2016-05-03',
                    name: 'Tom',
                    loginName: 'tom',
                    password: '123456',
                    role: '1',
                    valid: '1',
                },
                {
                    id:'',
                    date: '2016-05-02',
                    name: 'John',
                    loginName: 'john',
                    password: '123456',
                    role: '1',
                    valid: '1',

                },
                {
                    date: '2016-05-04',
                    name: 'Morgan',
                    loginName: 'morgan',
                    password: '123456',
                    role: '1',
                    valid: '1',

                },
                {
                    date: '2016-05-01',
                    name: 'Jessy',
                    loginName: 'jessy',
                    password: '123456',
                    role: '2',
                    valid: '2',

                },
                {
                    id:'',
                    date: '2016-05-03',
                    name: 'Tom',
                    loginName: 'tom',
                    password: '123456',
                    role: '1',
                    valid: '1',
                },
                {
                    id:'',
                    date: '2016-05-02',
                    name: 'John',
                    loginName: 'john',
                    password: '123456',
                    role: '1',
                    valid: '1',

                },
                {
                    date: '2016-05-04',
                    name: 'Morgan',
                    loginName: 'morgan',
                    password: '123456',
                    role: '1',
                    valid: '1',

                },
                {
                    date: '2016-05-01',
                    name: 'Jessy',
                    loginName: 'jessy',
                    password: '123456',
                    role: '2',
                    valid: '2',

                },
            ]
        }
    },
    methods:{
        handleEdit(row){
            console.log('编辑本行数据信息',row)
        },
        handleDelete(row){
            console.log('删除本行数据信息',row)
        },
        changeSwitch(valid){
            console.log('变更有效',valid)
        },
        selectUsers(){
            console.log('变更有效',this.selectUser)

        }
    }

}
</script>

<style>

</style>
