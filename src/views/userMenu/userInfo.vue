<template>
    <div class="side-menu-user" @click="handleClick">
        <div class="side-menu-user-info" :class="{ 'side-menu-user-selected': isSelected }">用户信息</div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const isSelected = ref(false)
        const handleClick = () => {
            isSelected.value = !isSelected.value
        }
        return {
            isSelected,
            handleClick
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
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid hsla(0, 0%, 100%, .2);

    }

    .side-menu-user-selected {
        height: 100%;
        width: 100%;
        background-color: rgba(52, 53, 65, 1);
        border-radius: 5px;

    }
}

.side-menu-user-info:hover {
    color: aliceblue;
    background-color: #363636;
    border-radius: 5px;
}
</style>