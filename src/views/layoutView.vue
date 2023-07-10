<template>
  <a-layout has-sider >
    <a-layout-sider
      class="side-theme"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }" :width="sidebarWidth"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <bar-chart-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
        <a-menu-item key="5">
          <cloud-outlined />
          <span class="nav-text">nav 5</span>
        </a-menu-item>
        <a-menu-item key="6">
          <appstore-outlined />
          <span class="nav-text">nav 6</span>
        </a-menu-item>
        <a-menu-item key="7">
          <team-outlined />
          <span class="nav-text">nav 7</span>
        </a-menu-item>
      </a-menu>
      <UserInfo></UserInfo>

    </a-layout-sider>
    <div class="divider" ref="divider" :style="{'margin-left':sidebarWidth + 'px'}" @mousedown="startDrag">||</div>
    <a-layout :style="{'margin-left': sidebarWidth + 10 + 'px'}">
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        <!-- Ant Design ©2018 Created by Ant UED -->
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined, BarChartOutlined, CloudOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, onMounted  } from 'vue';
import UserInfo from '@/views/userInfo/userInfo.vue'
import api from '../api/api'

// import { debounce } from 'lodash';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    // ShopOutlined,
    UserInfo
  },
  setup() {
    const themeOption = ref('light')
    const sidebarWidth = ref(200); // 初始左侧边栏宽度
    const startDrag = () => {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', stopDrag);
    };
    const handleDrag = (event) => {
      const mouseX = event.clientX;
      const minSidebarWidth = 200; // 最小左侧边栏宽度

      // 计算左侧边栏和右侧内容的宽度
      sidebarWidth.value = Math.max(mouseX, minSidebarWidth);
    };

    const stopDrag = () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', stopDrag);
    };
    onMounted(() => {
      const access_token = localStorage.getItem('access_token')
      api.apiManagement.hasLogined({access_token})
      // 监听窗口大小变化，并调用防抖或节流的处理函数
      // window.addEventListener('resize', debouncedUpdateContentWidth);
      // window.addEventListener('resize', throttledUpdateContentWidth);
    });

    return {
      startDrag,
      stopDrag,
      sidebarWidth,
      selectedKeys: ref(['4']),
      themeOption,
    };
  }
});
</script>
<style lang="less" scoped>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout .side-theme {
  background: rgba(102,205,170) ;
  .ant-menu{
    background: rgba(102,205,170) ;
    font-weight: 600;
  }
}

.divider {
  width: 10px;
  background-color: rgb(196, 193, 193);
  cursor: ew-resize;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color:aliceblue;
  position: fixed;
}
/* 鼠标悬停在分割线上时显示光标 */
.divider:hover {
  cursor: ew-resize;
}
</style>