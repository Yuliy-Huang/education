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
