<template>

  <template v-if="!isloading">
    
  
    <RouterView name="Home" :tags="tags" :jobs="jobs" @moredetail="update_jobdetails" @modify="update_modifier"/>

    <RouterView name="Tag" :tags="tags" :jobs="jobs" @moredetail="update_jobdetails" @modify="update_modifier"/>


    <RouterView name="Add" @adding="addnew" />

    <RouterView name="jobview" :job="currentjob"/>
    
    <RouterView name="DeleteJob" :jobs="jobs"  @deletejob="deletejob"/>

    <RouterView name="modify" :job="currentmodifier" @modifying="modifyjob"  />

  </template>

  <div v-if="loading">I am loading</div>

  

</template>

<script>
import { projectFirestore } from './Firebase/Config'



export default {
  name: 'App',
 

  data(){

    return { 
      isloading:true,
      currentjob:null,
      currentmodifier:null,
      jobs:null,
      tags:null,



};
  

  },methods:{ 


    async modifyjob(data,id){

        
        const error = {"value":0}

        
        const jobIdToUpdate = id;

        const indexToUpdate = this.jobs.findIndex(job => job.id === jobIdToUpdate);

        
          this.jobs[indexToUpdate] = {
            ...this.jobs[indexToUpdate], ...data
          };
          this.$router.push('/Home')

        try {
        const res = await projectFirestore.collection('blogs').doc(jobIdToUpdate).update(this.jobs[indexToUpdate])

     
    }
    catch(err) {
      error.value = err.message
    }


          

        

    },


    moredetails(){
            this.$router.push('/Blog')
    },

    update_jobdetails(data){
      this.currentjob = data;
      this.moredetails();
     
    },

    async deletejob(jobb){




      const error = {"value":0}

      this.jobs = this.jobs.filter(job => job.id !== jobb.id);

    
      try {
      await projectFirestore.collection('blogs').doc(jobb.id).delete()


      const extractUniqueTags = (data) => {
          const uniqueTags = new Set(); // Using Set to automatically eliminate duplicates
          data.forEach(item => {
            item.tags.forEach(tag => uniqueTags.add(tag)); // Add each tag to the Set
          });
          return Array.from(uniqueTags); // Convert Set to array and return
        }


    this.tags = extractUniqueTags(this.jobs).sort();






    }
    catch(err) {
      error.value = err.message
    }








    },

    update_modifier(data){
      this.currentmodifier = data;
      this.$router.push('/modify');
    },

     async addnew(data){
            const error = {"value":0}


      


       try {

          const docRef = await projectFirestore.collection('blogs').add(data);
          const newJob =  { ...data, id: docRef.id }
          this.jobs.push(newJob)
          const extractUniqueTags = (data) => {
          const uniqueTags = new Set(); // Using Set to automatically eliminate duplicates
          data.forEach(item => {
            item.tags.forEach(tag => uniqueTags.add(tag)); // Add each tag to the Set
          });
          return Array.from(uniqueTags); // Convert Set to array and return
        }

          this.tags = extractUniqueTags(this.jobs).sort();

          this.$router.push('/Home');


        }
        catch(err) {
          error.value = err.message
        }

      }
      
      
    },
  async beforeMount() {

    const error = {"value":0};
  


    try {
      let res = await projectFirestore.collection('blogs').get()

      

      this.jobs = res.docs.map(doc => {
       
        return { ...doc.data(), id: doc.id }
      })

     
      const extractUniqueTags = (data) => {
          const uniqueTags = new Set(); // Using Set to automatically eliminate duplicates
          data.forEach(item => {
            item.tags.forEach(tag => uniqueTags.add(tag)); // Add each tag to the Set
          });
          return Array.from(uniqueTags); // Convert Set to array and return
        }

    this.tags = extractUniqueTags(this.jobs).sort();
    this.isloading = false;


      
    }
    catch(err) {
      error.value = err.message
    }



    










  }
  
  
  
  
}
</script>

<style>

</style>
