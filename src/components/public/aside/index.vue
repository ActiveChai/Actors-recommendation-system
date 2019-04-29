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
                <el-button type="text">
                    <span class="iconfont">&#xe61a;</span>
                    {{ item.name }}
                </el-button>
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
                    name: '黄圣依 Eva Huang'
                },
                {
                    name: '周星驰 Stephen Chow'
                },
                {
                    name: '元华 Wah Yuen'
                },
                {
                    name: '释彦能 Xingyu Shi'
                },
                {
                    name: '陈国坤 Kwok-Kwan Chan'
                },
                {
                    name: '冯小刚 Xiaogang Feng'
                },
                {
                    name: '梁小龙 Siu-Lung Leung'
                },
                {
                    name: '林雪 Suet Lam'
                },
                {
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

