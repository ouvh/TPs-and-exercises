<template>

    <TopBar/>
  
    <Job :key="job.id"  v-for="job in jobs" :job="job" @detail="this.$emit('moredetail',job)" @modify="this.$emit('modify',job)"/>
    
  
  </template>
  
  <script>
  
  
  import Job from "./Job.vue";
  import TopBar from "./TopBar.vue";
  
  export default {
    emits: ['moredetail','modify'],
    name: 'Home',
    components: {
      Job,TopBar
    },
    props:["jobs"],
    methods:{
        
    }
    
  
   
    
    
  }
  </script>
  

  