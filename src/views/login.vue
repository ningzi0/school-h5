<template>
  <div class="pd1">
    <div class="h3">
        <h3>登录</h3>
    </div>
    <div class="loginContent">
        <t-form
        ref="form"
      :data="formData"
      :rules="rules"
      reset-type="empty"
      show-error-message
      label-align="top"
      @submit="onSubmit"
    >
      <t-form-item labelWidth="0" name="name">
        <t-input borderless placeholder="请输入内容" v-model="formData.name" align="center" ></t-input>
      </t-form-item>
      <t-form-item labelWidth="0" name="password">
        <t-input borderless type="password" placeholder="请输入密码" v-model="formData.password" :clearable="true" align="center"  ></t-input>
      </t-form-item>
      <t-checkbox-group class="checkbox" borderless >
            <t-checkbox :block="false" value="checkbox1" /><span>已阅读并同意<a>服务协议</a>和<a>隐私政策</a></span>
        </t-checkbox-group>
      
      <div class="button-group">
        <t-button theme="primary"  type="submit" size="large" block>登录</t-button>
      </div>
    </t-form>



        <!-- <t-input placeholder="请输入学号" align="center" borderless />
        <t-input placeholder="请输入密码" type="password" :clearable="true" align="center" borderless />
        <t-checkbox-group class="checkbox" borderless >
            <t-checkbox :block="false" value="checkbox1" /><span>已阅读并同意<a>服务协议</a>和<a>隐私政策</a></span>
        </t-checkbox-group>
        <t-button size="medium" @click="toPagePath('/reset')" theme="primary" block>登录</t-button> -->
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
    .t-form{
        background:none ;
    }
    .t-form__item{
        margin:1.2em 0;
        border-radius:5px;
        box-shadow:0 3px 5px rgba(0,0,0,0.05);
        background: #fff;
    }
    :deep(.checkbox ){
        span{
        color:#909090
        }
        a{
            color:#346bfd
        }
    }
    :deep(.t-checkbox){
        background:none
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





import { ref, reactive,  onMounted } from 'vue';
  

  
  const formData = reactive({
    name: '',
    password: '',
    gender: '',
    birth: '',
    place: '',
    age: 3,
    description: 2,
    resume: '',
  });
  const form = ref(null);


  const onSubmit = (e: any) => {
    console.log('===onSubmit', e);
    if(e.validateResult === true){
        toPagePath('/reset')
    }



};
const rules = {
  name: [{ validator: (val: any) => val !== '', message: '不能为空' }],
  password: [{ validator: (val: any) => val !== '', message: '不能为空' }],
};


  


    onMounted(() => {
    // @ts-ignore
    form.value.setValidateMessage(rules);
  });
</script>