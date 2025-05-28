<template>
  <div style="width: 22%;
    margin-left: auto;
    margin-right: auto; ">
    <div ref="container"></div>
    <button @click="onClick">Update Data</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from '@antv/g2';

const container = ref(null);
const chart = ref(null);

function renderBarChart(container) {
  const chart = new Chart({
    container,
  });

  // 准备数据
  const data = [
  { name: 'PC端', 类型: '门户', 次数: 18203 },
  { name: 'APP端', 类型: '门户', 次数: 18203 },
  { name: 'H5端', 类型: '门户', 次数: 18203 },
  { name: '小程序', 类型: '门户', 次数: 18203 },
  { name: 'cas', 类型: '认证', 次数: 28105 },
  { name: 'oauth2', 类型: '认证', 次数: 28105 },
  { name: '系统通知', 类型: '消息', 次数: 32652 },
  { name: 'App推送', 类型: '消息', 次数: 25652 },
  { name: '短信', 类型: '消息', 次数: 9652 },
  { name: '微信', 类型: '消息', 次数: 8652 },
  { name: '完成', 类型: '事务', 次数: 19124 },
  { name: '挂起', 类型: '事务', 次数: 13124 },
  { name: '退回', 类型: '事务', 次数: 12124 },
];

  // 声明可视化
  chart
  .interval()
  .scale('x', {
    range: [0.15, 1.1],
    marginRatio: -1
  })
  .data(data)
  .encode('x', '类型')
  .encode('y', '次数')
  .style('width',40)
  .encode('color', 'name')
  .transform({ type: 'stackY' })
  .label({
    text: 'name',
    position: 'bottom',
    style: {
      dx: -45,
      dy: -10,
      rotate: 0,
      textAlign: 'center'
    },
    layout: {
      type: 'limit-in-plot',
      cfg: { showAll: true }
    }
  })
  .interaction('elementHighlight', { background: true });


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

onMounted(() => {
  chart.value = renderBarChart(container.value);
});

function onClick() {
  updateBarChart(chart.value);
}
</script>
