<template>
  <a-layout has-sider >
    <a-layout-sider
      class="side-theme"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }" :width="sidebarWidth"
    >
      <div class="logo" />
      <UserMenu></UserMenu>

    </a-layout-sider>
    <div class="divider" ref="divider" :style="{'margin-left':sidebarWidth + 'px'}" @mousedown="startDrag">||</div>
    <a-layout class="layout-container" :style="{'margin-left': sidebarWidth + 10 + 'px'}">
      <a-layout-content class="layout-container-content" :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div>
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
      <div class="layout-container-footer">
        <a-input-search
          v-model:value="value"
          placeholder="input search text"
          size="large"
          @search="onSearch"
        >
          <template #enterButton>
            <a-button>Custom</a-button>
          </template>
        </a-input-search>

        <a-button></a-button>
      </div>
    </a-layout>
  </a-layout>
</template>
<script>
// import { UserOutlined, VideoCameraOutlined, UploadOutlined, BarChartOutlined, CloudOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, onMounted  } from 'vue';
import UserMenu from '@/views/userMenu/userMenu'
import api from '../api/api'

// import { debounce } from 'lodash';
export default defineComponent({
  components: {
    // UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    // BarChartOutlined,
    // CloudOutlined,
    // AppstoreOutlined,
    // TeamOutlined,
    // ShopOutlined,
    UserMenu
  },
  setup() {
    const themeOption = ref('light')
    const sidebarWidth = ref(260); // 初始左侧边栏宽度
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
@tw-bg-menu: #202123;
@tw-bg-opacity: 1;
#app > section {
  background-color:@tw-bg-menu;
}
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background-color: rgba(68,70,84,var(@tw-bg-opacity));
}

.ant-layout .side-theme {
  background:@tw-bg-menu;
  min-width: 260px;
  .ant-menu{
    background:@tw-bg-menu;
    font-weight: 600;
  }
}


.layout-container{
  background-color: rgba(68,70,84,@tw-bg-opacity);
  .layout-container-content {
    div {
      background-color: rgba(68,70,84,@tw-bg-opacity);
      // padding: 24px;
      text-align: center;
    }
  }
  .layout-container-footer {
    background-image: linear-gradient(180deg,rgba(53,55,64,0),#353740 58.85%);
    color:aliceblue;
    height: 192px;
    position: sticky;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
  }
}

.divider {
  width: 10px;
  background-color: #5f6366;
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