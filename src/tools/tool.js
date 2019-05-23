import {LoadingPlugin ,ToastPlugin,ConfirmPlugin  } from 'vux';
import Vue from 'vue'; //引入vue
Vue.use(ToastPlugin );
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);

//导出一个toast
export function toast (text){
// 默认参数
   Vue.$vux.toast.show({
       text: text
   })
}

//导出一个loading
export function loading(loading){
    Vue.$vux.loading.show({
        text: loading?loading:'Loading'
    })
}

export function hideLoading(){
    Vue.$vux.loading.hide()
}

//获取loading显示状态
export function getLoaidngState(){
    Vue.$vux.loading.isVisible()
}

//提示确认弹窗
export function confirm(param){
    let _confirm=Vue.$vux.confirm;
    _confirm.show({
        title:'this a title',
        content:'this is a content',
        // 组件除show外的属性
        onCancel () {
            param.onCancel&&param.onCancel();
            //影藏
            Vue.$vux.confirm.hide()
        },
        onConfirm () {
            param.onConfirm&&param.onConfirm();
            Vue.$vux.confirm.hide();
        },
    })

}
