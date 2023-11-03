<template>
    <div class="top">
        <div class="title">
            <h3>当前得分</h3>
            <span>学习 + 劳动 + 活动实践  = 综合考评分</span>
        </div>
        <div class="data">
            <div class="d-item">
                <div class="number">
                    <h4>12</h4>
                </div>
                <span>当前学期</span>
            </div>
            <div class="d-item">
                <div class="number">
                    <t-badge count="暂未统计" shape="bubble" aria-role="button">
                        <h4>--</h4>
                    </t-badge>
                </div>
                <span>当前学年</span>
            </div>
        </div>
        <div class="icon" @click="toPagePath('/fraction')">
            <icon name="arrow-right-circle" />
        </div>
    </div>

    <t-cell-group theme="card">
        <t-cell :left-icon="lock" hover title="我的报名" arrow  @click="toPagePath('/myRegistration')"/>
        <t-cell :left-icon="service" hover title="我的申报" arrow  @click="toPagePath('/report')"/>
        <t-cell :left-icon="service2" hover title="申报记录" arrow  @click="toPagePath('/record')"/>
    </t-cell-group>



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
    .top{
        padding: 3em 2em 2em;
        background-image: linear-gradient(to top right, #d4dfe7, #f4e9f1);
        position: relative;
    }

    :deep(.t-tab-bar-item){
        margin: 16px 0;
    }
    .data{
        .d-item{
            margin-right: 10px;
        }
        display: flex;
        text-align: left;
        h4{
            margin: 1em 0 0;
            font-size: 30px;
        }
        span{
            color: #aeb0b8;
        }
    }
    :deep(.t-badge__content:not(:empty) + .t-has-count){
        transform: translate(100%, 150%);
    }
    .icon{
        font-size: 36px;
        position: absolute;
        bottom: 10px;
        right: 20px;
        color: #346bfd;
    }
    :deep(.t-cell-group){
        margin: 16px;
    }
    :deep(.t-cell--middle){
        text-align: left;
    }
</style>
<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router"
import { Icon } from 'tdesign-icons-vue-next';
import { h } from 'vue';
import { ComponentCheckboxIcon, ComponentInputIcon ,ComponentBreadcrumbIcon } from 'tdesign-icons-vue-next';



const lock = () => h(ComponentCheckboxIcon);
const service = () => h(ComponentInputIcon);
const service2 = () => h(ComponentBreadcrumbIcon);
const value = ref('label_4');
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


</script>