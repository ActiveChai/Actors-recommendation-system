<template>
    <div class="main-actor">
        <el-card class="box-card">
            <template v-for="item in actor">
                <div slot="header" class="clearfix" :key="item.name">
                    <span>{{item.name}}</span>
                </div>
                <div class="body" :key="item.name">
                    <img
                        class="img"
                        :src="item.img"
                    >
                    <div class="actor">
                        <div class="text item">{{'性别：'+item.sex}}</div>
                        <div class="text item">{{'出生日期：'+item.birthday}}</div>
                        <div class="text item">{{'出生地：'+item.birthplace}}</div>
                        <div class="text item">{{'个人简介：'+item.summary}}</div>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'actor',
    data() {
        return {
            actor: [
                // {
                //     name: '黄圣依',
                //     photo:
                //         'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28576.webp',
                //     sex: '女',
                //     birthday: '1983/2/11',
                //     birthplace: '中国,上海',
                //     summary:
                //         '黄圣依，中国内地知名影视女演员、歌手，曾签约星辉公司，凭借电影《功夫》迅速成为国内颇具代表性的一线女星。1983年2月11日出生于上海，2005年毕业于北京电影学院表演系。在2009年4月的“80后新生代娱乐大明星”评选活动中，黄圣依与刘亦菲、杨幂、王珞丹，被评为内地新“四小花旦”。2011年6月13日在第十四届上海国际电影节上宣布已成立“巨力圣依影视传媒有限公司”，自行管理公司。明星身份之外，黄圣依现已成为中国巨力影视传媒有限公司执行总裁、巨力圣依影视传媒有限公司总裁。'
                // }
            ]
        }
    },
    mounted(){
        this.$http
            .get('/api/actor/1050240')
            .then(response => {
                this.actor = Object.values(response)[0]["person"]//接口直接返回的不是数组
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style scoped>
@import './../assets/css/main/actor.css';
</style>
