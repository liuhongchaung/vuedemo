<template>
  <div class="common-layout">
    <el-container>
      <!--头部-->
      <el-header>Header</el-header>

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
    }
  },
  methods:{

  }
}
</script>
