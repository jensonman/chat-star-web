<template>
    <div class="chat-talk-about">
        <div class="chat-request">
            <span>我是提问者</span>
        </div>
        <div class="chat-response">
            <span>我是回复者</span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({

})
</script>

<style lang="less">
@tw-text-opacity: 1;
@tw-bg-opacity: 1;

.chat-talk-about {
    width: 100%;
    color: rgba(236,236,241,@tw-text-opacity);
    .chat-request{
        width: 100%;
        background-color: rgba(52,53,65,@tw-bg-opacity);
        padding: 24px 16px;
    }
    .chat-response{
        padding: 24px 16px;
    }
}
</style>