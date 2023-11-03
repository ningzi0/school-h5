<template>


    <div class="top">
        <div class="title">
            <h3>活动列表</h3>
            <span>ACTIVITY LIST </span>
        </div>
    </div>

    <div class="activity">
        <div class="a-item">
            <div class="a-itemContent">
                <h1>书法比赛</h1>
                <div class="list">
                    <p>参赛人数：不限</p>
                    <p>参赛性别：不限</p>
                    <p>参赛年龄：不限</p>
                </div> 
            </div>
            <div class="sign" @click="isShowDialog5 = true">
                <span>参与报名</span>
                <span class="right">
                    <icon name="arrow-right" />
                </span>
            </div>
            <t-dialog
            v-model:visible="isShowDialog5"
            title="确认报名"
            content="确认报名后请耐心等待，审核时长预计3个工作日"
            cancel-btn="取消"
            confirm-btn="确认报名"
            @confirm="onConfirm"
            @cancel="onCancel"
        >
        </t-dialog>
        </div>
        <div class="a-item">
            <div class="a-itemContent">
                <h1>围棋大赛</h1>
                <div class="list">
                    <p>参赛人数：不限</p>
                    <p>参赛性别：不限</p>
                    <p>参赛年龄：不限</p>
                </div> 
            </div>
            <div class="sign" @click="isShowDialog5 = true">
                <span>参与报名</span>
                <span class="right">
                    <icon name="arrow-right" />
                </span>
            </div>
        </div>
        <div class="a-item">
            <div class="a-itemContent">
                <h1>围棋大赛</h1>
                <div class="list">
                    <p>参赛人数：不限</p>
                    <p>参赛性别：不限</p>
                    <p>参赛年龄：不限</p>
                </div> 
            </div>
            <div class="sign" @click="isShowDialog5 = true">
                <span>参与报名</span>
                <span class="right">
                    <icon name="arrow-right" />
                </span>
            </div>
        </div>
    </div>

    <div class="footer">
        <t-footer text="—— 我是有底线的 ——" />
        <t-loading theme="dots" size="40px" />
        
    </div>


    <t-tab-bar v-model="value" :split="false" @Change="tabChange">
        <t-tab-bar-item
        v-for="item in list"
        :key="item.name"
        :value="item.name"
        :badge-props="item.badgeProps"
        >
        {{ item.text }}
        <template #icon>
            <t-icon :name="item.icon" />
        </template>
        </t-tab-bar-item>
    </t-tab-bar>
    
</template>

<style scoped lang="less">
    
    :global(body){
        place-items: baseline;
    }
    :global(#app){
        padding: 0;
    }
    .sign{
        display: flex;
        align-items: center;
        border-top: 1px solid #c9cdd1;
        padding: 10px 20px;
        span{
            flex: 1;
            font-size: 18px;
            font-weight: bold;
        }
        .right{
            text-align: right;
            font-size: 28px;
            color: #346bfd;
        }
    }
    .sign:active{
        background: #f5f5f5;
    }

    :deep(.t-tab-bar-item){
        margin: 16px 0;
    }
    .a-itemContent{
        padding: 25px 35px 20px;

    }
    .a-item{
        background: #fff;
        border-radius: 23px;
        overflow: hidden;
        box-shadow: 0 7px 15px rgba(0,0,0,0.1);
        margin: 13px 0;
        h1{
            font-size: 36px;
            color: #4d4d4d;
            margin: 0 0 20px;
        }
    }
    p{
        margin: 5px 0;
        padding-left: 25px;
        color: #858789;
        position: relative;
    }
    p::before{
        border: 4px solid #346bfd;
        content: "";
        width: 10px;
        height: 10px;
        display: block;
        position: absolute;
        border-radius: 50%;
        left: 0;
        top: 50%;
        transform: translate(0,-50%);
    }


    .activity{
        text-align: left;
        padding:0 1em 0;
    }
    .t-loading {
        justify-content: center;
    }
    .footer{
        margin-bottom: 80px;
    }



    
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue-next';
import {useRouter} from "vue-router"
const value = ref('label_1');
const router  = useRouter();
const toPagePath = (url:string) => {
    router.push({
        path:url,
    })
}
const list = ref([
  { name: 'label_1', text: '活动', icon: 'hd',  path:`./index`},
  { name: 'label_4', text: '我的', icon: 'user', path:`./my`},
]) as any;
const tabChange = (e:any)=>{
   const listItem =  list.value.filter((v:any)=>{
       if(v.name==e){
        return v
       }
    })
    console.log(listItem)
    toPagePath(listItem[0]['path'])
}
const isShowDialog5 = ref(false);
const onConfirm = () => {
  console.log('dialog:confirm');
};
const onCancel = () => {
  console.log('dialog: cancel');
};




const clientHeight = document.documentElement.clientHeight; //浏览器⾼度
const distance = 50; //距离视窗还有50的时候，开始触发；

const fun = () => {
  let scrollHeight = document.body.scrollHeight; // 内容高度
  let scrollTop = document.documentElement.scrollTop; // 滚动高度
  if ((scrollTop + clientHeight) >= (scrollHeight - distance)) {
     console.log("开始加载数据");
  }
}
// 添加滚动监听
window.addEventListener('scroll', fun);


</script>