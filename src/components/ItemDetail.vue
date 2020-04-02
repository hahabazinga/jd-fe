<template>
    <div class="detail">
        <el-page-header
            style="margin: 20px auto 20px 10%"
            @back="goBack"
            content="详情页面"
        >
        </el-page-header>
        <div class="content">
            <div class="carousel">
                <el-carousel
                    :interval="4000"
                    indicator-position="outside"
                    height="250px"
                >
                    <el-carousel-item
                        v-for="(img, index) in item.imgs || []"
                        :key="img + index"
                    >
                        <el-image
                            :src="item.img"
                            :title="item.book_name"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="info">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                   
                    <el-breadcrumb-item>{{item.b_name}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{item.s_name}}</el-breadcrumb-item>
                </el-breadcrumb>
                <p class="name text">{{item.book_name}}</p>
                <p class="author text">作者：{{item.book_author}}</p>
                <p class="price red text"><span class="publish">价格：</span> <em style="fontStyle: normal">￥</em>{{item.price}}</p>
                <p class="publish">出版：{{item.publisher}}<span style="paddingLeft: 20px">{{item.publish_date}}</span></p>
                <div class="text">
                                <a
                                    class="text-link"
                                    style="color: #666"
                                    target="_blank"
                                    :href="item.book_href"
                                    ><strong class="comment">{{
                                        item.comments || 0
                                    }}</strong
                                    >条评价<strong class="good_rate">{{
                                        item.good_rate || '--'
                                    }}</strong
                                    > 好评率</a
                                >
                            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getItemDetail } from '../mock';
export default {
    name: 'ItemDetail',
    data() {
        return {
            id: void 0,
            item: {}
        };
    },
    created() {
        this.id = this.$route.params.id;
        getItemDetail(this.id)
            .then(({ data }) => {
                this.item = data;
            })
            .catch(e => console.error(e));
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
    width: 100%;
}
.header {
}
.content {
    display: flex;
    flex-direction: row;
    margin: 10% auto;
    width: 80%;
}
.carousel {
    width: 360px;
}
.text{
    text-align: left;
}
.name{
    font: 700 16px Arial,"microsoft yahei";
    color: #666;
    padding-top: 10px;
    line-height: 28px;
    margin-bottom: 5px;
}
.author{
     color:  #005aa0
}
.red {
    color: #e4393c;
}
.price{
    font-size: 20px;
}
.publish{
    font-size: 12px;
    color: #999
}
.comment {
    color: #646fb0;
    font-weight: 700;
}
.good_rate {
    color: #e4393c;
    margin-left: 10px;
}
</style>
