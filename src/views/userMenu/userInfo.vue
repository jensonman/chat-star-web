<template>
    <div class="side-menu-user">
        <a-popover :getPopupContainer="getPopupContainer" class="side-menu-user-info" v-model:visible="visible" title="Title" trigger="click">
            <template #content>
                <a @click="logout">退出登录</a>
            </template>
            <a-button class="side-menu-user-button" type="primary">
                <user-outlined />
                <span>your name</span>
                <span style="right:0px;">...</span>
            </a-button>
        </a-popover>
    </div>



</template>

<script>
import {useRouter} from 'vue-router'
import { UserOutlined } from '@ant-design/icons-vue';

export default {
    components:{
        UserOutlined
    },
    setup() {
        const router = useRouter()
        const getPopupContainer = (trigger) => {
            // 返回当前标签的父元素作为 Popover 的挂载容器
            return trigger.parentNode;
        }
        const logout = () => {
            // 删除token
            localStorage.removeItem('access_token')
            router.push('/login')
        }
        return {
            getPopupContainer,
            logout
        }
    },
}
</script>

<style lang="less" scoped>
.side-menu-user {
    bottom: 0px;
    width: 100%;
    height: 52px;
    position: absolute;
    color: aliceblue;
    background-color: #202123;
    cursor: pointer;
    padding: 0 8px;

    .side-menu-user-info {
        height: 100%;
        width: 100%;
        // display: flex;
        justify-content: center;
        align-items: center;
        color: aliceblue;
        background-color: #202123;

    }

    .side-menu-user-button {
        width: 100%;
        height: 100%;
        background-color: #202123;
        border: none;
        border-top: 1px solid hsla(0, 0%, 100%, .2);

    }
    .side-menu-user-selected {
        height: 100%;
        width: 100%;
        background-color: rgba(52, 53, 65, 1);
        border-radius: 5px;

    }

    ::v-deep .ant-popover {
        width: 99%;
        padding: 0 8px;
    }
}

.side-menu-user-info:hover {
    color: aliceblue;
    background-color: #363636;
    border-radius: 5px;
}

</style>