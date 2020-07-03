  <template>
  <div class="oilChariotHistory">
    <Header></Header>
    <div class="container oilChariotHistory-container">
      <div class="title-info">
        <span></span>
        <p>余额变化趋势</p>
      </div>
      <div id="moneyEchart"></div>
      <div class="title-info">
        <span></span>
        <p>囤油记录</p>
      </div>
      <ul class="recharge-list">
        <li v-for="(item, index) in rechargeLists" :key="index">
          <p>{{rechargeLists[index].createdDate}}</p>
          <p>{{rechargeLists[index].account}}</p>
          <p>{{rechargeLists[index].money}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "oilChariotHistory",
  path: "/oilChariotHistory",
  components: {
    Header
  },
  data() {
    return {
      rechargeLists: [
        {
          "account": "string",
          "createdDate": "2020-07-03",
          "money": 0,
          "status": 0
        },
        {
          "account": "string",
          "createdDate": "2020-07-03",
          "money": 0,
          "status": 0
        },
        {
          "account": "string",
          "createdDate": "2020-07-03",
          "money": 0,
          "status": 0
        }
      ]
    };
  },
  mounted() {
    this.initEchart();
    Bus.$emit("currentTitle", "屯油记录");
  },
  beforeCreate() {},
  computed: {},
  methods: {
    initEchart() {
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('moneyEchart'));
      // 绘制图表
      myChart.setOption({
          xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: function(value,index){
                let val= null;
                if (value >= 10000) {
                  val = value/10000+'万';
                }else if(value <10000){
                  val = value;
                }
                return val
              }
            }
          },
          series: [{
            data: [8200, 9320, 9001, 9304, 1290, 1330, 13200],
            type: 'line',
            symbol: 'none'
          }],
          lineStyle:{ 
            color:'cornflowerblue' //改变折线颜色
          },
          grid: {
            left: 40,
            top: 10,
            bottom: 10
          }
      });
    }
  }
};
</script>

<style lang="less">
@w: 75rem;
.oilChariotHistory {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  #moneyEchart {
    width: 100%;
    height: 100px;
  }
  .recharge-list {
    &>li {
      height: 40px;
      margin-top: 10px;
      padding: 5px 10px;
      display: flex;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
      background: #ffffff;
      &>p {
        flex: 1;
        text-align: center;
        line-height: 30px;
      }
    }
  }
}
</style>