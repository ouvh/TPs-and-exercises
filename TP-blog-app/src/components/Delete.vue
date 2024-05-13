<template>

    <TopBarDelete/>
    <JobDelete :key="job.id" v-for="job in jobs" :job="job" @deleted="senddeletetoparent"/>
    
  
  </template>
  
  <script>
  
  
  import JobDelete from "./JobDelete.vue";
  import TopBarDelete from "./TopBarDelete.vue";
  
  export default {
    name: 'Delete',
    components: {
        JobDelete,TopBarDelete
    },
    props:["jobs"],
    emits: ['deletejob'],
    methods:{
        senddeletetoparent(job){
            this.$emit('deletejob',job)
        }
        
    }
    
  }
  </script>
  

  