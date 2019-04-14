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
            <div class="text" v-for="o in 9" :key="o">
                <el-button type="text">
                    <span class="iconfont">&#xe61a;</span>
                    {{ o }}
                </el-button>
            </div>
            <el-pagination class="top" background layout="prev, pager, next" :total="30"></el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '拍戏最多的演员'
                },
                {
                    value: '选项2',
                    label: '最近最火的演员'
                }
            ],
            value: ''
            // actors: [
            //     {
            //         name: '黄圣依 Eva Huang'
            //     }
            // ]
        }
    }
}
</script>

<style>
@import '@/assets/css/public/aside/aside.css';
@import '@/assets/iconfont/iconfont.css';
</style>
