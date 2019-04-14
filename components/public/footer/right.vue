<template>
        <div class="right">
            <el-card class="box-card">
                <div class="title">演员年龄分布</div>
                <!-- <ve-pie :data="chartData" :settings="chartSettings"></ve-pie> -->
            </el-card>
        </div>
</template>

<script>
// import VePie from 'v-charts/lib/pie.common'

export default {
    // components: {
    //     VePie
    // },
    // data() {
    //     this.chartSettings = {
    //         dimension: '年龄',
    //         metrics: '人数'
    //     }
    //     return {
    //         chartData: {
    //             columns: ['年龄', '人数'],
    //             rows: [
    //                 { 年龄: '<20', 人数: 1393 },
    //                 { 年龄: '20-30', 人数: 3530 },
    //                 { 年龄: '30-40', 人数: 2923 },
    //                 { 年龄: '40-50', 人数: 1723 },
    //                 { 年龄: '50-60', 人数: 3792 },
    //                 { 年龄: '>60', 人数: 4593 }
    //             ]
    //         }
    //     }
    // }
}
</script>

<style>
@import '@/assets/css/public/footer/right.css';
</style>
