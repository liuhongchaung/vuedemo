<template>
  <div class="common-layout">
    <el-container>
      <!--头部-->
      <el-header>Header</el-header>

      <!--左侧-->
      <el-container>
        <el-menu>

          <el-aside width="200px">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>第一级</span>
              </template>



              <el-menu-item index="1-1"><el-icon><Setting /></el-icon>第一级-1</el-menu-item>
              <el-menu-item index="1-2">第一级-2</el-menu-item>

              <el-sub-menu index="1-3">
                <template #title>
                  <span>第一级-3</span>
                </template>
                <el-menu-item index="1-3-1">第一级-3-1</el-menu-item>
                <el-menu-item index="1-3-2">第一级-3-2</el-menu-item>
              </el-sub-menu>

            </el-sub-menu>
          </el-aside>

        </el-menu>

        <!--右侧-->
        <el-main>Main</el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {Location, Setting} from '@element-plus/icons-vue';
export default {
  name: 'HomeView',
  components: {
    //图标
    Location, Setting
  },
}
</script>
