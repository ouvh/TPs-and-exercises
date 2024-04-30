<template>


  
  <RouterView name="Home" :jobs="jobs" @moredetail="update_jobdetails" @modify="update_modifier"/>

  <RouterView name="Add" @adding="addnew" />

  <RouterView name="jobview" :job="currentjob"/>
  
  <RouterView name="DeleteJob" :jobs="jobs"  @deletejob="deletejob"/>

  <RouterView name="modify" :job="currentmodifier" @modifying="modifyjob"  />

  

</template>

<script>


export default {
  name: 'App',
 

  data(){

    return { 
      currentjob:null,
      currentmodifier:null,
      jobs:null



};
  

  },methods:{ 


    modifyjob(data,id){

    
        const jobIdToUpdate = id;

        const indexToUpdate = this.jobs.findIndex(job => job.id === jobIdToUpdate);

        
          this.jobs[indexToUpdate] = {
            ...this.jobs[indexToUpdate], ...data
          };


          this.$router.push('/Home')

          fetch('http://localhost:3000/jobs/'+id, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.jobs[indexToUpdate])
              })
              .then(response => response.json())
              .catch(error => console.error('Error:', error));

          

        

    },


    moredetails(){
            this.$router.push('/job')
    },

    update_jobdetails(data){
      this.currentjob = data;
      this.moredetails();
     
    },

    deletejob(jobb){

      this.jobs = this.jobs.filter(job => job.id !== jobb.id);

      fetch('http://localhost:3000/jobs/' + jobb.id, {
        method: 'DELETE'
      })
      .catch(error => console.error('Error:', error));

    },

    update_modifier(data){
      this.currentmodifier = data;
      this.$router.push('/modify');
    },

    addnew(data){

      

        fetch('http://localhost:3000/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data =>    this.jobs.push(data))
        .catch(error => console.error('Error:', error));


        this.$router.push('/Home')


      }
      
      
    },
  async beforeMount() {
    try {
      const response = await fetch('http://localhost:3000/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      this.jobs = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  
  
  
}
</script>

<style>

</style>
