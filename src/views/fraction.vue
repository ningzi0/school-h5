<template>
     <a class="return" href="javascript:history.back(-1);">
        <img src="../assets/return.png" alt="">
    </a>
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
        <div class="tButton">
            <t-button size="small" theme="primary" shape="round" :note="valueText || '年 月'" @click="visible = true">开始日期</t-button> - <t-button size="small" theme="primary" shape="round" :note="valueText || '年 月'" @click="visible = true">结束日期</t-button>
            <t-popup v-model="visible" placement="bottom">
                <t-date-time-picker
                v-model="value"
                mode="month"
                title="选择日期"
                format="YYYY-MM"
                @change="onChange"
                @pick="onPick"
                @confirm="onConfirm"
                @cancel="onCancel"
                />
            </t-popup>
        </div>
    </div>

    <div class="t-table">
        <t-table
        row-key="index"
        :data="data"
        :columns="columns"
        :show-header="showHeader"
        cell-empty-content="-"
        >
        <!-- 插槽方式 自定义单元格：cell 的值为插槽名称，参数有：{col, colIndex, row, rowIndex}  -->
        <template #type-slot-name="{ col, row }">
            {{ row[col.colKey] }}
        </template>

        <!-- 插槽方式 自定义单元格， colKey 的值默认为插槽名称  -->
        <template #status="{ col, row }">
            {{ row[col.colKey] }}
        </template>
        </t-table>
    </div>
    
    <div class="footer">
        <t-footer text="—— 我是有底线的 ——" />
    </div>


</template>

<style scoped lang="less">
    .t-table{
        margin: 15px;
        border-radius: 10px;
        width: auto;
    }
    :deep(.tButton){
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
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
</style>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const value = new Date();
const valueText = ref('');
const onChange = (value: string) => {
  console.log('change: ', value);
};

const onPick = (value: string) => {
  console.log('pick: ', value);
};

const onCancel = () => {
  console.log('cancel');
  visible.value = false;
};

const onConfirm = (value: string) => {
  console.log('confirm: ', value);
  valueText.value = value;
  visible.value = false;
};



const data: any[] = [];
const total = 3;
for (let i = 0; i < total; i++) {
  data.push({
    index: i + 1,
    applicant: ['2023/10/26', '2023/10/26', '2023/10/26'][i % 3],
    status: ['书法比赛', '围棋大赛', '篮球比赛'][i % 3],
    channel: ['+06', '+06', '+03'][i % 3],
  });
}

const showHeader = ref(true);

const columns = ref([
  { colKey: 'applicant', title: '时间', ellipsis: true, cell: 'type-slot-name' },
  {
    colKey: 'status',
    title: '类型',
    ellipsis: true,
  },
  {
    colKey: 'channel',
    title: '得分',
    // @ts-ignore
    cell: (h, { col, row }) => row[col.colKey],
    ellipsis: true,
  },
]);




</script>