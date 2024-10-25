<template>
  <div class="common-layout">
    <el-container>
      <!--头部-->
      <el-header class="homeHeader">
        <div class="tittle">后台管理系统</div>
        <div v-show="!this.showDropdown">
          <a href="/login">去登陆</a>
        </div>
        <el-dropdown v-show="this.showDropdown">
          <span class="dropdown-span">
          <el-avatar class="photo" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>你好，{{userInfo.userName}}！
            <!--<el-icon class="el-icon--right"><arrow-down /></el-icon>-->
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">个人中心</el-dropdown-item>
              <el-dropdown-item command="b">设置</el-dropdown-item>
              <el-dropdown-item command="c">注销登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>

        </el-dropdown>
      </el-header>

      <!--左侧-->
      <el-container>
        <el-aside width="200px">
          <el-menu router>

            <div v-for="item in this.routerItems">

              <el-sub-menu v-if="item.children" :index="item.path" v-show="item.showMenu">
                <template #title>
                  <el-icon><component :is="item.icon"/></el-icon>
                  <span>{{item.name}}</span>
                </template>

                <div v-for="child in item.children" v-show="child.showMenu">
                  <el-menu-item  :index="child.path">
                    <el-icon><component :is="child.icon"/></el-icon>
                    {{child.name}}
                  </el-menu-item>
                </div>
              </el-sub-menu>

              <el-menu-item v-else :index="item.path" v-show="item.showMenu">
                <el-icon><component :is="item.icon"/></el-icon>
                {{item.name}}
              </el-menu-item>

            </div>
          </el-menu>
        </el-aside>

        <!--右侧-->
        <el-main>
          <div >
            我是页签
            <el-divider/>
          </div>
          <!--分割线-->
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {useRouter} from "vue-router";
export default {
  name: 'Home',
  mounted() {
    let userInfo = window.localStorage.getItem('userInfo');
    if (userInfo){
      this.userInfo = JSON.parse(userInfo);
      this.showDropdown = true;
    }else {
      this.showDropdown = false;
    }
    let routes = useRouter().options.routes;
    for (let index in routes) {
      let route = routes[index];
      //拿到首页子路由
      if ('/home'=== route.path){
        this.routerItems = route.children;
        console.log("首页路由",this.routerItems)
        return;
      }
    }
  },
  data(){
    return{
      routerItems:[],
      userInfo : {
        userName : '',
      },
      showDropdown:true,
    }
  },
  methods:{

  }
}
</script>
<style>
  .homeHeader{
    background: #409eff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .tittle{
    font-size: 30px;
    font-family: 楷体;
    color: white;
  }
  .photo{
    margin-right: 10px;
  }
  .dropdown-span:focus {
    outline: none;/*隐藏外边框*/
    cursor: pointer;/*鼠标变小手*/
  }
  a{
    text-decoration: none;
  }
</style>
