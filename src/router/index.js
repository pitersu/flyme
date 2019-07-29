import {
    PhoneList,
    PhoneSound,
    PhonePart,
    PhoneLife,
    Home,
    Login,
    Users,
    Orders
} from "@pages"

//带layout布局的
export const layoutRouteComponent = [
    {
        path:"/home",
        meta:{},
        component:Home,
        name:"首页",
        key:"/home"
    },
    {
        path:"/books",
        meta:{},
        name:"商品管理",
        key:"/books",
        children:[
            {
                path:"/books/phoneList",
                name:"手机",
                meta:{},
                component:PhoneList,
                key:"/books/phoneList"
            },
            {
                path:"/books/phoneSound",
                name:"声学",
                meta:{},
                component:PhoneSound,
                key:"/books/phoneSound"
            },
            {
                path:"/books/phonePart",
                name:"配件",
                meta:{},
                component:PhonePart,
                key:"/books/phonePart"
            },
            {
                path:"/books/phoneLife",
                name:"生活",
                meta:{},
                component:PhoneLife,
                key:"/books/PhoneLife"
            }

        ]
    },
    {
        path:"/orders",
        meta:{},
        component:Orders,
        name:"订单管理",
        key:"/orders"
    },
    {
        path:"/users",
        meta:{},
        component:Users,
        name:"会员管理",
        key:"/users"
    }
    ,

]

//不带layout布局的
export const noLayoutRouteComponent = [
    {
        path:"/login",
        meta:{},
        component:Login,
        name:"登陆",
        key:"/login"
    }
]