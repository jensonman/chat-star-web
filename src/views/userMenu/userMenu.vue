<template>
    <div>
        <SideMenu :menuList="menuList">
            <!-- <template #footer>
                <a-menu-item class="side-menu-footer">
                    <span>123</span>
                </a-menu-item>
            </template> -->
        </SideMenu>
        <UserInfo></UserInfo>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import UserInfo from './userInfo.vue';
import SideMenu from '@/components/sideMenu'
export default defineComponent({
    components: {
        UserInfo,
        SideMenu
    },
    setup() {
        // const menuList = 

        return {
            menuList: reactive([
                { id: 1, value: "test1" },
                { id: 2, value: "test2" }
            ])
        }
    }
})
</script>

<style scoped>
.side-menu-footer {
    position: absolute;
    bottom: 0px;
}
</style>