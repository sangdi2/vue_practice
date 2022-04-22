import Vue from "vue";
import VueRouter from "vue-router";

import Login from '../components/MyLogin'
import Home from '../components/MyHome'
import Mygoods from '../components/menus/MyGoods'
import Myorders from '../components/menus/MyOrders'
import Myrights from '../components//menus/MyRights'
import Mysetting from '../components//menus/MySettings'
import Myusers from '../components/menus/MyUsers'
Vue.use(VueRouter)

const router= new VueRouter({
    routes:[
        {path:"/login",component:Login},
        {path:"/",redirect:"/login"},
        {path:'/home',component:Home,children:[
            {path:'users',component:Myusers},
            {path:'right',component:Myrights},
            {path:'goods',component:Mygoods},
            {path:'orders',component:Myorders},
            {path:'setting',component:Mysetting}
        ],redirect:'/home/users'}
    ]
})

router.beforeEach(function(to,from,next){
    if(to.path=='/home'){
        const token =localStorage.getItem('token')
        if(token){
            next()
        }else{
            next('/login')
        }
    }else {
        next()
    }
})

export default router