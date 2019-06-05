<template>
    <div class="main-result">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>推荐结果</span>
                <el-button class="charts" type="primary" @click="change">切换</el-button>
            </div>
            <div class="h">
                <template v-if="flag">
                    <div class="p">{{actor[num]}}</div>
                    <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
                    <el-button class="place" type="text" @click="next">下一个</el-button>
                </template>
                <template v-else>
                    <div v-for="(item,index) in actors" :key="index" class="t">
                        <div v-for="actor in item" :key="actor.actor" class="text item">
                            <el-button type="text">{{actor.actor}}</el-button>
                        </div>
                        <div class="aname">{{actor[index]}}</div>
                    </div>
                </template>
            </div>
        </el-card>
    </div>
</template>

<script>
import VeBar from 'v-charts/lib/bar.common'

export default {
    name: 'result',
    components: {
        VeBar
    },
    data() {
        this.chartSettings = {
            dimension: ['label'],
            metrics: ['score'],
            dataOrder: {
                label: 'label'
            }
        }
        return {
            actors: [],
            ana: {},
            flag: true,
            actor: [],
            num: 0,
            length: 0,
            r: [],
            chartData: {
                columns: ['label', 'score'],
                rows: []
            }
        }
    },
    mounted() {
        this.$http
            .get('/api/ana')
            .then(response => {
                this.ana = Object.values(response)[0].temp //接口返回的不是数组
                for (let key1 in this.ana) {
                    this.actor.push(key1)
                    this.length++
                    let o = []
                    for (let key2 in this.ana[key1]) {
                        let w = { label: key2, score: this.ana[key1][key2] }
                        o.push(w)
                    }
                    this.r.push(o)
                }
                this.chartData['rows'] = this.r[this.num]
            })
            .catch(error => {
                console.log(error)
            })
        this.$http
            .get('/api/result')
            .then(response => {
                this.actors = Object.values(response)[0]['actors'] //接口返回的不是数组
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        change: function() {
            this.flag = !this.flag
        },
        next: function() {
            this.num++
            if (this.num == this.length) {
                this.num = 0
            }
            this.chartData['rows'] = this.r[this.num]
        }
    },
    computed: {}
}
</script>

<style scoped>
@import './../assets/css/main/result.css';
</style>
