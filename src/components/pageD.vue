<template>
    <div class="box" @click="jumpShouye">
        this is pageD
    </div>
</template>

<script>
    export default {
        name: "pageA",
        methods:{
            jumpShouye(){
                this.$router.push({
                    path:'/helloWord',
                    query:{
                        title:1
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .box{
        width: 100%;
        height: 100%;
        background: rebeccapurple;
    }
</style>
