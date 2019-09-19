// import { resolve } from "path";

// const User = {
//     template: '<div>User</div>'
//   }
  
//   const router = new VueRouter({
//     routes: [
//       // dynamic segments start with a colon
//       { path: '/user/:id', component: User }
//     ]
//   })


export default{
    routes : [{
        path: './login',
        name: 'login',
        component: resolve => require(['../modules/basic/'])
    }]
}