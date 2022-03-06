import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Jobs from '@/views/jobs/Jobs.vue';
import JobDetails from '@/views/jobs/JobDetails.vue';
import Notfound from '@/views/jobs/Notfound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component : Home
    },
    {
        path: '/about',
        name: 'About',
        component:About
    },
    {
        path: '/contact',
        name: 'Contact',
        component:Contact
    },
    {
        path: '/jobs',
        name: 'Job',
        component:Jobs
    },

    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props:true

   },


//redirect
    {
        path: '/all-jobs',
        redirect:'/jobs'
    },

    //catchAll/ Notfound
    {
        path: '/:pathMatch(.*)',
        name: 'Notfound',
         component:Notfound
    }


];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;