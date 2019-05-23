import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const HelloWorld = (resolve) => {
  import('@/components/HelloWorld').then((module) => {
    resolve(module)
  })
};

const  Home= (resolve) => {
    import('@/components/home/home').then((module) => {
      resolve(module)
    })
};

const  TabBar= (resolve) => {
  import('@/components/tabBar').then((module) => {
    resolve(module)
  })
};

const  pageA= (resolve) => {
    import('@/components/pageA').then((module) => {
        resolve(module)
    })
};

const  pageB= (resolve) => {
    import('@/components/pageB').then((module) => {
        resolve(module)
    })
};

const  pageC= (resolve) => {
    import('@/components/pageC').then((module) => {
        resolve(module)
    })
};

const  pageD= (resolve) => {
    import('@/components/pageD').then((module) => {
        resolve(module)
    })
};


Vue.use(Router);
 let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloWord',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/tabBar',
      name: 'TabBar',
      component: TabBar,
      meta:{
        title:'this is tabBar'
      },
        redirect:'tabBar/pageA',
      children:[  //这里设置2级路由
          {
              path: 'pageA',
              name: 'pageA',
              component: pageA
          },
          {
              path: 'pageB',
              name: 'pageB',
              component: pageB
          },
          {
              path: 'pageC',
              name: 'pageC',
              component: pageC
          },
          {
              path: 'pageD',
              name: 'pageD',
              component: pageD
          },

      ]
    }
  ]
});
 //做一个路由队列
//  let routerQueue=[];
// router.beforeEach((to,from,next)=>{
//    if(routerQueue[routerQueue.length-1] == to.path + '=>'+from.path){
//        routerQueue.pop();
//        console.info(routerQueue);
//    }else{
//        routerQueue.push(to.path + '=>'+from.path);
//        console.info(routerQueue);
//    };
//   next();
// })

export default router;
