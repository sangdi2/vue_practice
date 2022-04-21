import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Movie from '../components/Movie'
import About from '../components/About'
import login from '../components/login'
import Main from '../components/main'
Vue.use(VueRouter)


const router=new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:Home},
        {path:"/movie",component:Movie},
        {path:"/about",component:About},
        {path:"/login",component:login},
        {path:"/main",component:Main}
    ]
})

router.beforeEach(function(to,from,next){
    
    if (to.path=='/main'){
        const token =localStorage.getItem('token')
        if(token){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})

export default router