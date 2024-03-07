import {createRouter, createWebHashHistory} from 'vue-router'
import LayoutIndex from "@/layout/layoutIndex.vue";
// import {useStore} from "vuex";

const constantRoutes = [
    {
        path: "/login",
        name: "loginPage",
        component: () =>
            import(
                "@/views/login/loginPage.vue"
                ),
        meta: {
            title: "loginPage",
            breadcrumbNoReaction: true,
            isHidden: true
        },
        children: []
    },
    {
        path: '/',
        component: LayoutIndex,
        redirect: '/home',
        meta: {
            isHidden: true
        },
        children: [
            {
                path: "/home",
                name: "Home",
                meta: {
                    title: "",
                    icon: "home",
                    breadcrumbNoReaction: true,
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/setting',
        component: LayoutIndex,
        redirect: '/system-setting',
        meta: {
            title: "系统设置",
        },
        children: [
            {
                path: "/system-setting",
                name: "SystemSetting",
                meta: {
                    title: "系统设置",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/staff',
        component: LayoutIndex,
        redirect: '/academic-staff',
        meta:{
            title: "教务员工",
        },
        children: [
            {
                path: "/academic-staff",
                name: "AcademicStaff",
                meta: {
                    title: "教务员工",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/substitute',
        component: LayoutIndex,
        redirect: '/substitute-teacher',
        meta:{
            title: "代课教师",
        },
        children: [
            {
                path: "/substitute-teacher",
                name: "SubstituteTeacher",
                meta: {
                    title: "代课教师",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/student',
        component: LayoutIndex,
        redirect: '/campus-student',
        meta:{
            title: "校区学员",
        },
        children: [
            {
                path: "/campus-student",
                name: "CampusStudent",
                meta: {
                    title: "校区学员",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/management',
        component: LayoutIndex,
        redirect: '/query-management',
        meta:{
            title: "查询管理",
        },
        children: [
            {
                path: "/query-management",
                name: "QueryManagement",
                meta: {
                    title: "查询管理",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/archive',
        component: LayoutIndex,
        redirect: '/archive-management',
        meta:{
            title: "管理存档",
        },
        children: [
            {
                path: "/archive-management",
                name: "ArchiveManagement",
                meta: {
                    title: "管理存档",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/filing',
        component: LayoutIndex,
        redirect: '/daily-filing',
        meta:{
            title: "日常归档",
        },
        children: [
            {
                path: "/daily-filing",
                name: "DailyFiling",
                meta: {
                    title: "日常归档",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/detail',
        component: LayoutIndex,
        redirect: '/detail-view',
        meta:{
            title: "明细查看",
        },
        children: [
            {
                path: "/detail-view",
                name: "DetailView",
                meta: {
                    title: "明细查看",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/product',
        component: LayoutIndex,
        redirect: '/product-view',
        meta:{
            title: "商品查看",
        },
        children: [
            {
                path: "/product-view",
                name: "ProductView",
                meta: {
                    title: "商品查看",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/financial',
        component: LayoutIndex,
        redirect: '/financial-statistics',
        meta:{
            title: "财务统计",
        },
        children: [
            {
                path: "/financial-statistics",
                name: "FinancialStatistics",
                meta: {
                    title: "财务统计",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/clock',
        component: LayoutIndex,
        redirect: '/clock-in',
        meta:{
            title: "上班打卡",
        },
        children: [
            {
                path: "/clock-in",
                name: "ClockIn",
                meta: {
                    title: "上班打卡",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
    {
        path: '/campus',
        component: LayoutIndex,
        redirect: '/campus-account',
        meta:{
            title: "校区结账",
        },
        children: [
            {
                path: "/campus-account",
                name: "CampusAccount",
                meta: {
                    title: "校区结账",
                    icon: "home",
                    breadcrumbNoReaction: true,
                    // isHidden: true
                },
                component: () =>
                    import(
                        "@/views/homePage.vue"
                        ),
            },
        ]
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...constantRoutes,
    ],
});

router.beforeEach(async (to, from, next) => {
    next()
    // if (to.path === '/login' || to.path === '/sign-up') {
    //     next()
    // } else {
    //     const store = useStore();
    //     const setSearchKey = (searchKey) => store.commit('setSearchKey', searchKey);
    //     setSearchKey('')
    //
    //     const token = localStorage.getItem('accessToken')
    //     if (token) {
    //         const dynamicCreateRoute = store.state.dynamicCreateRoute
    //         if (!dynamicCreateRoute || !router.hasRoute('My Community')) {
    //             store.commit('updateDynamicCreateRoute', true)
    //             await store.dispatch('getRouteAuth')
    //             const routeAuth = store.state.routeAuth
    //             if (routeAuth.length === 0) {
    //                 next()
    //                 return
    //             }
    //             const dynamicRoutes = {
    //                 path: '/my-communities',
    //                 name: "My Community",
    //                 title: "My Community",
    //                 component: LayoutIndex,
    //                 redirect: routeAuth[0].path,
    //                 children: routeAuth,
    //             }
    //             if (!router.hasRoute(dynamicRoutes.name)) router.addRoute(dynamicRoutes)
    //             next({...to, replace: true})
    //         } else {
    //             next()
    //         }
    //     } else {
    //         next()
    //     }
    // }

    if (!router.hasRoute('redirect404')) router.addRoute({path: '/:catchAll(.*)', name: 'redirect404', redirect: '/404', meta: {isHidden: true}})
})
export default router
