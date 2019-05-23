<template>
   <div class="item" @click.stop="clickBar">
       <span>{{title}}--{{pageIndex}}</span>
       <img v-bind:src="tarImg" alt="">
   </div>
</template>

<script>

    export default {
        name: "item",
        props:{
            title:{
                type:String,
                default:'a'
            },
            imgSrc:{
                type:String,
                default: null
            },
            activeImg:{
                type:String,
                default:null
            },
            pageIndex:{
                default:null,
                type:Number
            },
            isSelected:{
                default:null,
                type:Number
            }
        },
        filters:{
          addOne(value){
              return Number(value)+1
          }
        },
        data(){
            return {
                pageKey:null
            }
        },
        created(){
        },
        //计算属性
        computed:{
            tarImg(){
                // console.log(this.pageIndex,'this.isSelected',this.isSelected)
                // if(this.)
                if((this.pageIndex+1)==this.isSelected){
                    return this.activeImg
                };

                return this.imgSrc;

            }

        },
        methods:{
            //点击了bar
            clickBar:function(){
                // console.log(this.title);
                // console.log('子集'+(Number(this.PageIndex)+1)
                this.$emit('clickBar',this.pageIndex+1);
                var  name='';
                // const testName =(value) => {
                    switch(Number(this.pageIndex)){
                        case 0:
                           name='pageA';
                           break;
                        case 1:
                            name='pageB'
                            break;
                        case 2:
                            name='pageC'
                            break;
                        case 3:
                           name='pageD'
                            break;
                    }

                // };
                console.log('name   :'+name+this.pageIndex)
                this.$router.push({path:'/tabBar/'+name})

            }
        }

    }
</script>

<style scoped lang="less">
.item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;//平分
    background: aqua;
    span{
        text-align: center;
        font-size: 20px;
        line-height: 1;
        padding-bottom: 10px;
    }
    img{
        width: 30px;
        height: 30px;
    }
}
</style>
