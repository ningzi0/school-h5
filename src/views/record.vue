<template>
  <div class="pd1">
    <a class="return" href="javascript:history.back(-1);">
      <img src="../assets/return.png" alt="" />
    </a>
    <div class="top">
      <div class="title">
        <h3>申报记录</h3>
        <span>DECLARATION RECORDS</span>
      </div>
    </div>

    <div class="list">
        <div class="item">
            <div class="date">
                <div class="monthDay">9.15</div>
                <div class="time">10:59</div>
            </div>
            <div class="item-content">
                <h3>申报记录</h3>
                <p>德育表现分：国家级/一等奖</p>
                <p>文体表现分：省级/二等奖</p>
                <p>计算机技能：一级（初级）</p>
                <p><icon name="time" /> 2023-09-15 10:59</p>
                <div class="processTag">
                    <t-tag variant="light" theme="warning">审核中</t-tag>
                </div> 
                <t-button size="small"  theme="danger">删除记录</t-button>
            </div>
        </div>
        <div class="item">
            <div class="date">
                <div class="monthDay">9.15</div>
                <div class="time">10:59</div>
            </div>
            <div class="item-content">
                <h3>申报记录</h3>
                <p>德育表现分：国家级/一等奖</p>
                <p>文体表现分：省级/二等奖</p>
                <p>计算机技能：一级（初级）</p>
                <p><icon name="time" /> 2023-09-15 10:59</p>
                <div class="processTag">
                    <t-tag variant="light" theme="success">审核通过</t-tag>
                </div> 
                <t-button size="small"  theme="danger">删除记录</t-button>
            </div>
        </div>
    </div> 




  </div>
</template>
<style scoped lang="less">
:global(body) {
  place-items: baseline;
}
    .item{
        display: flex;
        padding: 20px;
        .date{
            font-family: Arial, Helvetica, sans-serif;
            text-align: right;
            padding-right: 10px;
            border-right: 1px solid #dfdfdf;
        }
        .monthDay{
            font-size: 21px;
        }
        .time{
            font-size: 14px;
            color: #9c9ea7;
        }   
        .item-content{
            background: #fff;
            margin: 0 0 0 10px;
            width: 100%;
            border-radius: 10px;
            text-align: left;
            padding: 15px 20px;
            position: relative;
            .processTag{
                position: absolute;
                right: 10px;
                top: 10px;
            }
            h3{
                margin: 0;
                font-weight: 500;
                font-size: 18px;
            }
            p{
                font-size: 14px;
                margin: 5px 0;
                color: #a1a3ac;
            }
        }
    }
</style>
<script setup lang="ts">
import { Icon } from 'tdesign-icons-vue-next';
</script>