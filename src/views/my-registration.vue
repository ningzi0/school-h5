<template>
    <a class="return" href="javascript:history.back(-1);">
        <img src="../assets/return.png" alt="">
    </a>


    <div class="top">
        <div class="title">
            <h3>我的报名</h3>
            <span>MY REGISTRATION</span>
        </div>
    </div>

    <div class="activity">
        <div class="a-item">
            <div class="tips inReview"></div>
            <div class="a-itemContent">
                <h1>书法比赛</h1>
                <div class="list">
                    <p>参赛人数：不限</p>
                    <p>参赛性别：不限</p>
                    <p>参赛年龄：不限</p>
                </div> 
            </div>
            <div class="sign" >
                <span>已报名</span>
                <span class="right">
                    <icon name="arrow-right" />
                </span>
            </div>
        </div>
        <div class="a-item">
            <div class="tips Approved"></div>
            <div class="a-itemContent">
                <h1>围棋大赛</h1>
                <div class="list">
                    <p>参赛人数：不限</p>
                    <p>参赛性别：不限</p>
                    <p>参赛年龄：不限</p>
                </div> 
            </div>
            <div class="sign" >
                <span>报名成功</span>
                <span class="right">
                    <icon name="arrow-right" />
                </span>
            </div>
        </div>
        
    </div>

    <div class="footer">
        <t-footer text="—— 我是有底线的 ——" />
    </div>

</template>

<style scoped lang="less">
    .tips{
        width: 80px;
        height: 80px;
        position: absolute;
        right: 0;
        top: 0;
    }
    .inReview{
        background: url(../assets/tips.png) no-repeat;
        background-size: contain;
    }
    .Approved{
        background: url(../assets/tips2.png) no-repeat;
        background-size: contain;
    }

    :global(body){
        place-items: baseline;
    }
    :global(#app){
        padding: 0;
    }
    .top{
        padding: 3em 1em 0;
    }
    .sign{
        display: flex;
        align-items: center;
        border-top: 1px solid #c9cdd1;
        padding: 10px 20px;
        color: #999999;
        span{
            flex: 1;
            font-size: 18px;
            font-weight: bold;
        }
        .right{
            text-align: right;
            font-size: 28px;
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
        position: relative;
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
import { Icon } from 'tdesign-icons-vue-next';
</script>