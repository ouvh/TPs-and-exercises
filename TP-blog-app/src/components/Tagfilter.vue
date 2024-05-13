<template>

    <TopBartag/>

    
    <div class="container">
      <div class="mainarea">
        <h1>{{tagchosen}}</h1>
        <Job :key="job.id"  v-for="job in this.jobs.filter(job => job.tags.includes(this.tagchosen))" :job="job" @detail="this.$emit('moredetail',job)" @modify="this.$emit('modify',job)"/>
      </div>
      <div class="tags">

          <TagCloud :tags="this.tags"/>
        
      </div>
    </div>
    
  
  </template>
  
  <script>
  
  
    import Job from "./Job.vue";
    import TagCloud from './TagCloud.vue';
    import TopBartag from "./TopBartag.vue";
  
  export default {
    emits: ['moredetail','modify'],
    name: 'Home',
   
    components: {
      Job,TopBartag,TagCloud
    },
    props:["jobs","tags","tagchosen"],
    
    beforeMount(){
     


      if(!this.tags.includes(this.tagchosen)){
        this.$router.push("/Home")
      }
      
     
    }

   
  
    
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

  