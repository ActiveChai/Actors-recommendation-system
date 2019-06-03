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
    name: 'mleft',
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
            },
            // selectData: true
            selectedMode: 'single'
        }
        return {
            map: '',
            chartData: {
                columns: ['country', 'actorNum'],
                rows: []
            }
        }
    },
    mounted() {
        this.$http
            .get('/api/country')
            .then(response => {
                this.chartData['rows'] = Object.values(response)[0]['country'] // 接口返回的不是数组
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/footer/left.css';
</style>
