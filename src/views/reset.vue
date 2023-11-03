<template>
    <div class="pd1">
    <div class="h3">
        <h3>重置密码</h3>
        <p>请修改初始密码</p>
    </div>
    <div class="loginContent">
        <t-input placeholder="输入新密码" type="password" align="center" borderless :clearable="true"/>
        <t-input placeholder="确认新密码" type="password" :clearable="true" align="center" borderless />
        <p class="tips">安全提示：新密码请勿与旧密码过于相似</p>
        <t-button size="medium" @click="toPagePath('/index')" theme="primary" block>确定</t-button>
    </div>
</div>
</template>
<style scoped lang="less">
    .h3{
        color:#4d4d4d;
        margin-bottom:80px;
        margin-top:0;
        h3{
            font-size:36px;
            margin: 0;
        }
        p{
            margin: 0;
            color: #b3b3b3;
        }
    }
    .t-input{
        margin:1.2em 0;
        border-radius:5px;
        box-shadow:0 3px 5px rgba(0,0,0,0.05)
    }
    :deep(.tips){
        color: #909090;
    }
    :deep(.t-button){
        margin-top:2.5em
    }
</style>
<script lang="ts" setup>
import {useRouter} from "vue-router"
const router  = useRouter();
const toPagePath = (url:string) => {
    router.push({
        path:url,
    })
}

</script>