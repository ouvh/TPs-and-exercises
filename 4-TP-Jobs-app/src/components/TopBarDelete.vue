<!-- TopBar.vue -->
<template>
    <div class="top-bar">
      <button @click="this.$router.push('/Home')" class="button-primary">Home </button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      addJob() {
        // Method to add a new job
        // You can implement your logic to add a new job here
      },
      deleteJob() {
        // Method to delete a job
        // You can implement your logic to delete a job here
      }
    }
  };
  </script>
  
  <style scoped>
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
  }
  .top-bar button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .button-primary {
    background-color: #007bff;
    color: #fff;
  }
  .button-primary:hover {
    background-color: #0056b3;
  }
  .button-danger {
    background-color: #dc3545;
    color: #fff;
  }
  .button-danger:hover {
    background-color: #c82333;
  }
  </style>
  