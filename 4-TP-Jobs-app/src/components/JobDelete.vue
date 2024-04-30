<template>
    <div class="job-card" >
      <div class="job-info">
        <h3>{{ job.titre }}</h3>
      </div>
      <button @click="deletejob()" class="view-details-btn">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props:['job'],
    emits: ['deleted'],
    methods: {
        deletejob(){
            this.$emit('deleted',this.job);
        }
     
    }
  };
  </script>
  
  <style scoped>
  .job-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .job-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .job-info h3 {
    margin-top: 0;
  }
  
  .view-details-btn {
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .view-details-btn:hover {
    background-color:rgb(168, 13, 13);
  }
  </style>
  