<template>
  <div class="pd1">
  <a class="return" href="javascript:history.back(-1);">
        <img src="../assets/return.png" alt="">
    </a>
  <div class="top">
    <div class="title">
      <h3>我要申报</h3>
      <span>I NEED TO DECLARE</span>
    </div>
  </div>

  <div class="cell-content">
    <t-cell
      arrow
      title="德育表现分"
      :note="seasonState.season.join(' ')"
      @click="seasonState.show = true"
    />
    <t-cell
      arrow
      title="文体表现分"
      :note="seasonState2.season2.join(' ')"
      @click="seasonState2.show = true"
    />
    <t-cell
      arrow
      title="计算机技能"
      :note="cityState.city.join(' ')"
      @click="cityState.show = true"
    />
    <!-- 联动选择 -->
    <t-cell-group>
      <t-cell
        arrow
        title="语言技能"
        :note="data.join('')"
        @click="state.show = true"
      />
    </t-cell-group>
    <t-popup v-model="cityState.show" placement="bottom">
      <t-picker
        v-model="cityState.city"
        :columns="cityOptions"
        @confirm="onConfirm"
        @cancel="cityState.show = false"
      />
    </t-popup>
    <t-popup v-model="state.show" placement="bottom">
      <t-cascade
        :value="data"
        title=""
        :columns="roles"
        @change="onChange"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </t-popup>

    <t-popup v-model="seasonState.show" placement="bottom">
      <t-picker
        v-model="seasonState.season"
        :columns="seasonColumns"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </t-popup>
    <t-popup v-model="seasonState2.show" placement="bottom">
      <t-picker
        v-model="seasonState2.season2"
        :columns="seasonColumns2"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </t-popup>

    <div class="upload-demo">
      <div class="upload-title">证件上传</div>
      <t-upload
      v-model="files"
        multiple
        :max="10"
        :grid-config="gridConfig"
        :action="action"
        :on-fail="onFail"
      :on-success="onSuccess"
      >
      </t-upload>
    </div>

    <div class="textarea">
      <t-textarea
        class="textarea-example"
        placeholder="自定义补充内容"
      ></t-textarea>
    </div>


    <div class="tips">
      <p>可加分材料由学生向班级考评组递交。劳动卫生检查 的结果由劳动部公示，各班在公示栏自行查阅。</p>
      <p>扣分材料由 学管办、班主任、学生会提供。</p>
      <p>综合素质测评分认定工作每学期期末开展一次。</p>
      <p>班主任完成班级评分认定。测评结果在班级内公示3个工作日。</p>
      <p>班级公示后的结果送交分院考评组组织复核，结果在分院公示 5 个工作日。</p>
      <p>1.参加各项奖助优评选及推优入党的，同等条件下，志愿服务时长较多者优先推荐。</p>
      <p>2.参加国家奖学金、省级自强之星、省级三好学生、省 级优秀学生干部、省级优秀大学毕业生、市级优秀共青团员 评比的，测评分排名在班级及专业总排名前 10%。</p>
      <p>3.参加国家励志奖学金、院级优秀大学毕业生、院级三好学生、院级优秀学生干部、院级优秀团干及推优入党的， 测评分排名在班级及专业总排名前 20%。</p>
      <p>4.参加国家助学金、院级优秀学生、院级优秀共青团员 评比的，测评分排名在班级及专业总排名前 30%。</p>
      <p>5.学业补考、重修者，实行评优评奖当年一票否决。</p>
      <p>6.受处分者（通报批评起），实行评优评奖当年一票否决。</p>
      <p>7.年满十八周岁，未按要求在兵役网站登记者，实行评 优评奖当年一票否决。</p>
      <p>8.劳动分（单项）一学期累计被扣超过 40 分的，《劳 动教育》课程成绩记为不合格。</p>
      <p>9.《实践育人》课程、《第二课堂成绩单》课程的成绩， 按综合素质测评得分实际得分计。超过 100 分者，按满分计。</p>
    </div>

  </div>

  <t-button size="large" class="submit" theme="primary" block>提交</t-button>
</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const files = ref([
{
    url: 'https://tdesign.gtimg.com/miniprogram/images/example4.png',
    name: 'uploaded1.png',
    type: 'image',
  },
]);
const onFail = ({ file, e }: { file: UploadFile; e: ProgressEvent }): any => {
  console.log("---onFail", file, e);
  return null;
};
const gridConfig = {
  column: 4,
};

const onSuccess = ({ file, fileList, response, e }: SuccessContext) => {
  
 
};
const action =
  "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo";

const cityOptions = [
  [
    {
      label: "三级（高级）",
      value: "三级（高级）",
    },
    {
      label: "二级（中级）",
      value: "二级（中级）",
    },
    {
      label: "一级（初级）",
      value: "一级（初级）",
    },
  ],
];

const cityState = reactive({
  show: false,
  city: [],
});

const roles = [
  {
    label: "外语等级考试",
    value: "外语等级考试",
    children: [
      {
        label: "CET-6、日语N1",
        value: "CET-6、日语N1",
      },
      {
        label: "CET-4、日语N2-N3",
        value: "CET-4、日语N2-N3",
      },
    ],
  },
  {
    label: "普通话等级考试",
    value: "普通话等级考试",
    children: [
      {
        label: "一级甲等、乙等",
        value: "一级甲等、乙等",
      },
      {
        label: "二级甲等",
        value: "二级甲等",
      },
      {
        label: "二级乙等",
        value: "二级乙等",
      },
    ],
  },
];

const state = reactive({
  show: false,
});

const data: any = ref(["外语等级考试", "CET-6、日语N1"]);
const onChange = (value: PickerValue[], context: any) => {
  data.value = value;
};

const yearOptions = [
  {
    label: "国家级",
    value: "国家级",
  },
  {
    label: "省级",
    value: "省级",
  },
  {
    label: "市级",
    value: "市级",
  },
  {
    label: "学院级",
    value: "学院级",
  },
];
const seasonOptions = [
  {
    label: "一等奖",
    value: "一等奖",
  },
  {
    label: "二等奖",
    value: "二等奖",
  },
  {
    label: "三等奖",
    value: "三等奖",
  },
  {
    label: "优秀奖",
    value: "优秀奖",
  },
  {
    label: "初始参与未获奖",
    value: "初始参与未获奖",
  },
];
const seasonColumns = [yearOptions, seasonOptions];
const seasonColumns2 = [yearOptions, seasonOptions];

const seasonState = reactive({
  show: false,
  season: [],
  season2: [],
});
const seasonState2 = reactive({
  show: false,
  season: [],
  season2: [],
});

const onCancel = () => {
  cityState.show = false;
  seasonState.show = false;
  seasonState2.show = false;
  state.show = false;
};

const onConfirm = () => {
  cityState.show = false;
  seasonState.show = false;
  seasonState2.show = false;
  state.show = false;
};
</script>

<style scoped lang="less">
:global(body) {
  place-items: baseline;
}


.upload-demo {
  background: #fff;
}
.upload-title {
  padding-top: 20px;
}
:deep(.textarea-example) {
  height: 128px;
  textarea {
    font-family: "微软雅黑";
  }
}
.textarea {
  margin: 16px 0;
}
.cell-content {
  padding: 20px 0;
}
.t-cell {
  margin-bottom: 16px;
}

.tips{
  text-align: left;
  font-size: 12px;
  color: #999;
}
.submit{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
:deep(.t-image-viewer__content){
  left: 0;
}
</style>
