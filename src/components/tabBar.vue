<template>
    <div class="box">
        <router-view tag="div" class="routerBox"></router-view>
        <div class="tabBar">
            <item v-for="(val,index) in TarDec" :title="val.title" :imgSrc="val.imgSrc" :key="index" :activeImg="val.activeImg" :isSelected="isSelected" :pageIndex="index"  v-on:clickBar="changeSelected"></item>
        </div>
    </div>

</template>

<script>
    import item from './item';
    export default {
        name: "tabBar",
        components:{
            item
        },
        data(){
            return {
                isSelected:1,
                TarDec:[{
                    title:'a',
                    imgSrc: require('@/assets/logo.png'),
                    activeImg:"",
                },{
                    title:'b',
                    imgSrc: require('@/assets/logo.png'),
                    activeImg:"",
                },{
                    title:'c',
                    imgSrc: require('@/assets/logo.png'),
                    activeImg:"",
                },{
                    title:'d',
                    imgSrc: require('@/assets/logo.png'),
                    activeImg:"",
                }]

            }
        },
        methods:{
            changeSelected(index){
                console.log('负极',index)
                this.isSelected=index;
            }
        }


    }
</script>

<style scoped lang="less">
    .box{
        width: 100%;
        height: 100%;
    }
    .routerBox{
        width: 100%;
        height: 100%;
        background: bisque;
    }
    .tabBar{
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        background: black;
        height: 100px;
        width:100%;
    }

</style>
