<template>
 
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

        <el-main
            class="main"
            v-loading="loading"
            element-loading-text="拼命加载中"
        >
            <div class="item-list">
                <p
                    class="empty-text item"
                    v-if="itemList.length === 0 && !loading"
                >
                    暂无数据
                </p>
                <div
                    class="item"
                    v-for="item in itemList"
                    @click="onItemClick(item)"
                    :key="item.id"
                >
                    <div>
                        <el-image :src="item.img" class="image"></el-image>
                        <div style="textAlign: left;">
                            <div
                                class="red"
                                style="fontSize: 20px; margin: 5px 0"
                            >
                                <em style="fontStyle: normal">￥</em
                                >{{ item.price }}
                            </div>
                            <div class="text">
                                <a
                                    style="color: #333;"
                                    class="text-link"
                                    target="_blank"
                                    :href="item.book_href"
                                    :title="item.book_name"
                                    >{{ item.book_name }}</a
                                >
                            </div>
                            <div class="text">
                                <a
                                    :title="item.description"
                                    style="fontSize: 12px"
                                    class="text-link"
                                    target="_blank"
                                    :href="item.book_href"
                                    >{{ item.description }}</a
                                >
                            </div>
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
                                    >好评率</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-pagination v-if="!loading"
                class="pagination"
                background
                layout="prev, pager, next, sizes"
                :total="limit"
                @current-change="handlePageChange"
                @size-change="handleSizeChange"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pageSize"
                :current-page.sync="currentPage"
            >
            </el-pagination>
        </el-main>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import { getItemList } from '../mock';
export default {
    name: 'Home',
    // components: {
    //     HelloWorld
    // },
    data() {
        return {
            searchText: '',
            itemList: [],
            loading: false,
            limit: 0,
            searchKey: '',
            pageSize: 20,
            currentPage: 1
        };
    },
    created: function() {
        this.fetchItemList(1, 20, '');
    },
    watch: {
        $route: function() {
            this.searchKey = this.$route.query.searchKey;
            this.fetchItemList(1, 20, this.searchKey);
        }
    },
    methods: {
        fetchItemList: function(startPage, pageSize, searchKey) {
            this.loading = true;
            // 模拟异步
            setTimeout(() => {
                getItemList(startPage, pageSize, searchKey).then(result => {
                    const { data, limit } = result;
                    this.limit = limit;
                    this.itemList = data;
                });
                this.loading = false;
            }, 1000);
        },
        onItemClick: function({ id }) {
            if (id) {
                this.$router.push(`/list/${id}`);
            }
        },
        handlePageChange: function(currentPage) {
            this.currentPage = currentPage;
            this.fetchItemList(currentPage, this.pageSize, this.searchKey);
        },
        handleSizeChange: function(pageSize) {
            this.pageSize = pageSize;
            this.fetchItemList(this.currentPage, this.pageSize, this.searchKey);
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    height: calc(100vh - 16px);
}
.container {
    height: 100%;
    box-sizing: border-box;
}

.main {
    height: 80%;
    box-sizing: border-box;
    padding: 0;
}
.search-input {
    width: 30%;
}
.item-list-container {
    /* width: 50%; */
    height: 100%;
}
.empty-text {
    font-size: 24px;
    color: #121212;
}
.item-list {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.item {
    width: 20%;
    min-width: 220px;
    padding: 10px;
    border: 1px solid transparent;
}
.item:hover {
    border: 1px solid #e7e3e7;
}
.image {
    width: 220px;
    height: 220px;
}
.red {
    color: #e4393c;
}
.text {
    font-size: 14px;
}
.text-link {
    color: #a7a7a7;
    text-decoration: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    padding: 2px 0;
}
.comment {
    color: #646fb0;
    font-weight: 700;
}
.good_rate {
    color: #e4393c;
    margin-left: 10px;
}
.pagination {
    margin: 20px 0;
    height: 100px;
}
</style>
