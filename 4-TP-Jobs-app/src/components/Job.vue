<!-- JobCard.vue -->
<template>
    <div class="job-card" @click="viewDetails">
      <div class="job-info">
        <h3>{{ job.titre }}</h3>
      </div>
      <div class="loc">
        <button @click="this.$emit('detail')" class="view-details-btn">View Details</button>
        <button @click="this.$emit('modify')" class="view-details-btn bc">modify</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['detail','modify'],
    props: ['job'],
    methods: {
     
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
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  
  .job-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .job-info h3 {
    margin-top: 0;
  }
  
  .view-details-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .view-details-btn:hover {
    background-color: #0056b3;
  }
  .loc{
    width: 15%;
    display: flex;
    justify-content: space-between;
  }

  .bc{
    background-color: rgb(149, 16, 131);
  }
  </style>
  