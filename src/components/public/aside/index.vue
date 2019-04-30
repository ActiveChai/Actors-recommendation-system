<template>
    <div class="side">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-select v-model="value" clearable placeholder="拍戏最多的演员">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </div>
            <div class="text" v-for="item in actors" :key="item.name">
                <router-link :to="{ name: 'actor', params:{ id: item.id}}" key="item.id">
                    <el-button type="text">
                        <span class="iconfont">&#xe61a;</span>
                        {{ item.name }}
                    </el-button>
                </router-link>
            </div>
            <el-pagination class="top" background layout="prev, pager, next" :total="30"></el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'myaside',
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '拍戏最多的演员'
                },
                {
                    value: '选项2',
                    label: '今年最火的演员'
                }
            ],
            value: '',
            actors: [
                {
                    id: '1005110',
                    name: '黄圣依 Eva Huang'
                },
                {
                    id: '1048026',
                    name: '周星驰 Stephen Chow'
                },
                {
                    id: '1050240',
                    name: '元华 Wah Yuen'
                },
                {
                    id: '1202926',
                    name: '释彦能 Xingyu Shi'
                },
                {
                    id: '1229775',
                    name: '陈国坤 Kwok-Kwan Chan'
                },
                {
                    id: '1274255',
                    name: '冯小刚 Xiaogang Feng'
                },
                {
                    id: '1274267',
                    name: '梁小龙 Siu-Lung Leung'
                },
                {
                    id: '1274279',
                    name: '林雪 Suet Lam'
                },
                {
                    id: '1274936',
                    name: '董志华 Zhihua Dong'
                }
            ]
        }
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/aside/aside.css';
</style>