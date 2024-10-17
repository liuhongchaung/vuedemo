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
              <el-sub-menu v-if="item.children" :index="item.path">
                <template #title>
                  <el-icon><location/></el-icon>
                  <span>{{item.name}}</span>
                </template>

                <el-menu-item v-for="child in item.children" :index="child.path">
                  {{child.name}}
                </el-menu-item>

              </el-sub-menu>

              <el-menu-item v-else :index="item.path">
                {{item.name}}
              </el-menu-item>

            </div>



          </el-menu>

          <!--<el-menu router>

            <el-sub-menu>
              <template #title>
                <el-icon><location/></el-icon>
                <span>第一级</span>
              </template>


              <el-menu-item index="/test1"><el-icon><Setting/></el-icon>第一级-1</el-menu-item>
              <el-menu-item index="/test2"><el-icon><Setting/></el-icon>第一级-2</el-menu-item>

              &lt;!&ndash;<el-sub-menu index="1-3">
                <template #title>
                  <el-icon><location/></el-icon>
                  <span>第一级-3</span>
                </template>
                <el-menu-item index="1-3-1">第一级-3-1</el-menu-item>
                <el-menu-item index="1-3-2">第一级-3-2</el-menu-item>
              </el-sub-menu>&ndash;&gt;

            </el-sub-menu>

            <el-menu-item index="/test3"><el-icon><Setting/></el-icon>用户管理</el-menu-item>

          </el-menu>-->
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
  import {Location, Setting} from '@element-plus/icons-vue';
  import {useRouter} from "vue-router";
export default {
  name: 'Home',
  components: {
    //图标
    Location, Setting
  },
  mounted() {
    this.routerItems = useRouter().options.routes;
    console.log(this.routerItems)
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
