import { createWebHistory, createRouter } from "vue-router";
import store from "../store/store";
import Layout from "../components/Layout/layout.vue"
import mLayout from "../components/Layout/mLayout.vue"
import home from "../components/home/home.vue"
import mission from "../components/mission/mission.vue"
import development from "../components/development/development.vue"
import about from "../components/about/about.vue"
import support from "../components/support/support.vue"

const routes = [
    {
        path: "/my-website/",
        name: "early-riser",
        component: store.state.display.isMobile ? mLayout : Layout,
        children: [
            {
                path: "",
                name: "home",
                component: home
            },
            {
                path: "mission",
                name: "mission",
                component: mission
            },
            {
                path: "public-support",
                name: "support",
                component: support
            },
            {
                path: "development-history",
                name: "development",
                component: development
            },
            {
                path: "about",
                name: "about",
                component: about
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;