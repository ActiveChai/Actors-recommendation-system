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
                <router-link :to="{ name: 'actor', params:{ id: item.id}}" :key="item.id">
                    <el-button @click="saveItem(item)" type="text" :key="item.id">
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
// import axios from 'axios'

// Vue.prototype.$ajax = axios

export default {
    name: 'myaside',
    // components: {
    //     axios
    // },
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
            actors: []
        }
    },
    mounted() {
        this.$http
            .get('/api/popular')
            .then(response => {
                this.actors = Object.values(response)[0]['person'] //接口返回的不是数组
                // console.log(Object.values(response)[0]["person"])
            })
            .catch(error => {
                console.log(error)
            })
        // this.actors = await axios.get('/api/actor/1005110')
    },
    methods: {
        saveItem: function(item) {
            //用箭头函数会报错，this指向问题
            this.bus.$emit('get', item)
            // console.log(item)
        }
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/aside/aside.css';
</style>