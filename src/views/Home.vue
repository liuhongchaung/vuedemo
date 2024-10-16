<template>
  <div class="common-layout">
    <el-container>
      <!--头部-->
      <el-header>Header</el-header>

      <!--左侧-->
      <el-container>
        <el-aside width="200px">
          <el-menu router="true">

            <el-sub-menu>
              <template #title>
                <el-icon><location/></el-icon>
                <span>第一级</span>
              </template>


              <el-menu-item index="/test1"><el-icon><Setting/></el-icon>第一级-1</el-menu-item>
              <el-menu-item index="/test2"><el-icon><Setting/></el-icon>第一级-2</el-menu-item>

              <el-sub-menu index="1-3">
                <template #title>
                  <el-icon><location/></el-icon>
                  <span>第一级-3</span>
                </template>
                <el-menu-item index="1-3-1">第一级-3-1</el-menu-item>
                <el-menu-item index="1-3-2">第一级-3-2</el-menu-item>
              </el-sub-menu>

            </el-sub-menu>

            <el-menu-item index="/test3"><el-icon><Setting/></el-icon>用户管理</el-menu-item>

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
  import {Location, Setting} from '@element-plus/icons-vue';
export default {
  name: 'Home',
  components: {
    //图标
    Location, Setting
  },
  methods:{
    pushrouter(){
      this.$router.push('/test1');
    },
    pushrouter2(){
      this.$router.push('/test2');
    }
  }
}
</script>
