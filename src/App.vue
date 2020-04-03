<template>
    <div id="app">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <div class="header">
            <el-input
                placeholder="请输入搜索商品名称"
                v-model="searchText"
                class="search-input"
                @keyup.enter.native="searchChange"
            >
                <el-button
                    slot="append"
                    @click="search"
                    icon="el-icon-search"
                ></el-button>
            </el-input>
            <div class="line"></div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
export default {
    name: 'App',
    // components: {
    //     HelloWorld
    // },
    data() {
        return {
            searchText: '',
            oldText: undefined
        };
    },
    methods: {
        search() {
            if (this.searchText !== this.oldText)
                this.oldText = this.searchText;
            this.$router.push(`/list?searchKey=${this.searchText}`);
        },
        searchChange() {
            this.search();
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
.header {
    height: 20%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
