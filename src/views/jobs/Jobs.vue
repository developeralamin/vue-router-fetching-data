<template>
    <div>
        <h1>This is Jobs </h1>
        <div v-if="jobs.length">
             <div v-for="job in jobs" :key="job.id" class="job">
                <router-link :to="{ name:'JobDetails',params:{id:job.id}}">
                    <h2>{{ job.title }}</h2>
                </router-link>
             </div>
        </div>
        <div v-else>
           <p>Loading this jobs ........</p>
        </div>
       

    </div>
</template>

<script>
export default {
    name: 'VueRouterJobs',

    data() {
        return {
             jobs:[]
        };
    },

    mounted() {
        fetch('http://localhost:3000/jobs/')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    },

    methods: {
        
    },
};
</script>

<style>
h1{
  margin:0;
  padding:0;
}

.job h2{
   display: inline-block;
   background-color: red;
   padding: 12px 15px;
   color: white;
   cursor: pointer;
}
</style>