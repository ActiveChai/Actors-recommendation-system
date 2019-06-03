<template>
    <div class="side">
        <el-card class="box-card">
            <div slot="header" class="clearfix t">
                <span class="iconfont">&#xe683;</span>拍戏最多的演员
                <el-button class="charts" type="primary" @click="change">图览</el-button>
            </div>
            <template v-if="chart">
                <div class="text" v-for="item in actors" :key="item.name">
                    <router-link :to="{ name: 'actor', params:{ name: item.name}}" :key="item.id">
                        <el-button type="text" :key="item.id">
                            <span class="iconfont">&#xe61a;</span>
                            {{ item.name}}
                            <span
                                class="num"
                            >{{item.filmNum}}</span>
                        </el-button>
                    </router-link>
                </div>
            </template>
            <template v-else>
                <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
            </template>
        </el-card>
    </div>
</template>

<script>
import VeBar from 'v-charts/lib/bar.common'

export default {
    name: 'myaside',
    components: {
        VeBar
    },
    data() {
        this.chartSettings = {
            dimension: ['actor'],
            metrics: ['filmNum'],
            dataOrder: {
                label: 'filmNum',
                order: 'desc'
            }
        }
        return {
            value: '',
            actors: [],
            chart: true,
            chartData: {
                columns: ['actor', 'filmNum'],
                rows: []
            }
        }
    },
    mounted() {
        this.$http
            .get('/api/most')
            .then(response => {
                this.actors = Object.values(response)[0]['most'] //接口返回的不是数组
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        change: function() {
            this.chart = !this.chart
            this.actors.forEach((item, index) => {
                this.chartData['rows'][index] = {
                    actor: item.name.split(' ')[0], //去除英文名
                    filmNum: item.filmNum
                }
            })
        }
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/aside/aside.css';
</style>