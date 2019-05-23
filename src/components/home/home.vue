<template>
<div class="abc">
<!--    <img src="~assets/logo.png" alt="">-->
<!--    <img src="~@/assets/logo.png" alt="">-->
    <div class="item">22222</div>
    <div class="item">22222</div>

<!--    <div class="item">2</div>-->
<!--    <div class="item">3</div>-->
<!--    <div class="item">4</div>-->
<!--    <div class="item">5</div>-->
    <div class="test">

    </div>

</div>
</template>

<script>
    import {toast,loading,confirm} from '@tool/tool'
    export default {
        name: "home",
        data(){
            return {
            }
        },
        created() {
            confirm({
                title:'this is a title',
                content:'this is a content'

            })
            // console.log('test less '+window.less)
            console.log('home---name',this.name)
        },

    }
</script>

<style scoped lang="less">
    .abc{
        display: flex;
        display: -webkit-flex;
        /*border: 1px solid black;*/
        height: 200px;
        width: 100%;
        align-items:center;
        justify-content:space-around;
        overflow: hidden;
        margin-top:0;
        background-color: red;
        .item{
            width: 50px;
            height: 40px;
            border: 1px solid #00C1B3;
            background-color: red;
            font-size: 12px;
            flex: 1;
            text-align: center;
            line-height: 40px;
        }
        /*.test{*/
        /*    width: 10rem;*/
        /*    height: 100%;*/
        /*    background: black;*/
        /*}*/
    }
</style>
