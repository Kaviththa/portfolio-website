import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from "../views/AboutMe.vue";
import Portfolio from "../views/Portfolio.vue";
import Services from "../views/Services.vue";
import Resume from "../views/Resume.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";


// import Darkmode from "../components/Darkmode.vue";
import Cards from "../components/Cards.vue"
import Testimonial from "../components/Testimonial.vue"
import Resume1 from "../components/Resume1.vue"
// import Testimonial1 from "../components/Testimonial1.vue"
import Window from "../components/Window.vue"



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "AboutMe",
        component: AboutMe
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio
    },
    {
        path: "/service",
        name: "Services",
        component: Services
    },

    {
        path: "/resume",
        name: "Resume",
        component: Resume
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    },

    {
        path: "/card",
        name: "Cards",
        component: Cards
    },
    {
        path: "/resume1",
        name: "Resume1",
        component: Resume1
    },
    {
        path: "/window",
        name: "Window",
        component: Window
    },


    // {
    //     path: "/Darkmode",
    //     name: "Darkmode",
    //     component: Darkmode
    // },
    // {
    //     path: "/Testimonial1",
    //     name: "Testimonial1",
    //     component: Testimonial1
    // },
    {
        path: "/Testimonial",
        name: "Testimonial",
        component: Testimonial
    },

    {

        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;