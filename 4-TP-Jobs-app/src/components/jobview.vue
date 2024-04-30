<template>
    <div class="job-detail-view">

      <div class="job-content">
        <div class="top-bar">
    <button @click="this.$router.push('/Home')" class="button-primary">Home</button>
  </div>

        <div class="job-header">
          <h2>{{job.titre}}</h2>
        </div>
        <div class="job-details">
          <p class="job-description">{{job.description}}</p>
          <p class="job-salary">💰 Salary: {{job.salaire}}</p>
          <p class="job-date">📅 Creation Date: {{job.creationdate}}</p>
          <p class="job-date">📍 location: {{job.location}}</p>
          <p class="job-date">🏢 Company: {{job.company}}</p>


        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['job'],

    beforeMount(){
      if(this.job == null){
         this.$router.push('/Home')

      }

    }


  };
  </script>
  
  
  <style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Center the component vertically and horizontally */
.job-detail-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}

/* Style the job details container */
.job-content {
  max-width: 600px;
  width: 90%;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Style the job header */
.job-header {
  text-align: center;
  margin-bottom: 20px;
}

.job-header h2 {
  font-size: 32px;
  color: #333;
}

.job-id {
  font-size: 18px;
  color: #666;
}

/* Style the job details */
.job-details {
  font-size: 20px;
  color: #555;
  margin-top: 30px;
}

.job-description {
  margin-bottom: 30px;
}

.job-salary,
.job-date {
  margin-bottom: 15px;
}

.job-salary::before,
.job-date::before {
  display: inline-block;
  margin-right: 10px;
  font-size: 22px;
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
  