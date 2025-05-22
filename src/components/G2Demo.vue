<template>
  <div>
    <div ref="container"></div>
    <button @click="onClick">Update Data</button>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';

function renderBarChart(container) {
  const chart = new Chart({
    container,
  });

  // 准备数据
  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];

  // 声明可视化
  chart
    .interval() // 创建一个 Interval 标记
    .data(data) // 绑定数据
    .encode('x', 'genre') // 编码 x 通道
    .encode('y', 'sold') // 编码 y 通道
    .encode('key', 'genre') // 指定 key
    .animate('update', { duration: 300 }); // 指定更新动画的时间

  // 渲染可视化
  chart.render();

  return chart;
}

function updateBarChart(chart) {
  // 获得 Interval Mark
  const interval = chart.getNodesByType('interval')[0];

  // 模拟并且更新 Interval 的数据
  const newData = interval.data().map((d) => ({
    ...d,
    sold: Math.random() * 400 + 100,
  }));

  interval.data(newData);

  // 重新渲染
  chart.render();
}

export default {
  name: 'G2Demo',
  props: {},
  mounted() {
    // 保存图表实例
    this.chart = renderBarChart(this.$refs.container);
  },
  methods: {
    onClick() {
      updateBarChart(this.chart);
    },
  },
};
</script>
