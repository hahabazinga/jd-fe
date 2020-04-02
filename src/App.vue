<template>
    <div id="app">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <div class="header">
            <el-input
                placeholder="请输入搜索商品名称"
                v-model="searchText"
                class="search-input"
            >
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
                <el-divider></el-divider>

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
       return {}
    },
    
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

</style>
