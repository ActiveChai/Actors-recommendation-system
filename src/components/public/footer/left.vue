<template>
    <div class="left">
        <el-card class="box-card">
            <div class="title">演员位置分布</div>
            <ve-map v-model="map" :data="chartData" :settings="chartSettings"/>
        </el-card>
    </div>
</template>

<script>
import VeMap from 'v-charts/lib/map.common'

export default {
    components: {
        VeMap
    },
    data() {
        this.chartSettings = {
            position: 'world',
            label: false,
            itemStyle: {
                normal: {
                    areaColor: '#40BFFF'
                }
            }
            // selectData: true,
            // selectedMode: 'single'
        }
        return {
            map:'',
            cityName: '',
            chartData: {
                columns: ['位置', '人数']
            }
        }
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/footer/left.css';
</style>

