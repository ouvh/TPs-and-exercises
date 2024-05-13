<template>

    <TopBar/>
    
    <div class="container">
      <div class="mainarea">
        <Job :key="job.id"  v-for="job in jobs" :job="job" @detail="this.$emit('moredetail',job)" @modify="this.$emit('modify',job)"/>
      </div>
      <div class="tags">

          <TagCloud :tags="this.tags"/>
        
      </div>
    </div>
    
  
  </template>
  
  <script>
  
  
    import Job from "./Job.vue";
    import TagCloud from './TagCloud.vue';
    import TopBar from "./TopBar.vue";
  
  export default {
    emits: ['moredetail','modify'],
    name: 'Home',
    components: {
      Job,TopBar,TagCloud
    },
    props:["jobs","tags"],
   
  
    
  }
  </script>


<style scoped>
.mainarea{
  width: 80%;
}
.container{
  display: flex;
}
.tags{
  position: fixed;
  right: 0;
  width: 20%;
  height: 90%;
  overflow-y: scroll;
}
</style>

  