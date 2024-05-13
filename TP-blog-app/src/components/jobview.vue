<template>
  <template v-if="job != null">
    <div class="job-detail-view">

      <div class="job-content">
        <div class="top-bar">
    <button @click="this.$router.push('/Home')" class="button-primary">Home</button>
  </div>

        <div class="job-header">
          <h2>{{job.title}}</h2>
        </div>
        <div class="job-details">
          <p class="job-description">{{job.body}}</p>
          <p class="job-date">📅 Created at : {{job.createdAt}}</p>
  <h2>Tags</h2>

  <div class="sidebar">
  <ul class="tag-list">
      <li :key="index" v-for="(tag,index) in job.tags"><a @click.prevent="this.$router.push('/tag/'+tag)">{{tag}}</a></li>


  </ul>
</div>

<h2>Edited Dates</h2>

  <div class="sidebar">
    <ul class="edited-date-list">
        <li :key="index" v-for="(date,index) in job.edited">{{date}}</li>

     
      <!-- Add more edited dates here -->
    </ul>
  </div>




        </div>
      </div>
    </div>
  </template>



  </template>
  
  <script>
  export default {
    props: ['job'],

    beforeMount(){
      if(this.job == null){
         this.$router.push('/Home')

      }
    },beforeRouteUpdate(to, from, next) {
      if(this.job == null){
         this.$router.push('/Home')}
   
    next(); 
  },

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
  overflow: scroll;
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

.sidebar {
      background-color: #f4f4f4;
      padding: 20px;
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch; /* Enables momentum scrolling in iOS Safari */
    }
    .sidebar h2 {
      margin-top: 0;
      margin-bottom: 10px;
    }
    .tag-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: inline-block;
    }
    .tag-list li {
      display: inline-block;
      margin-right: 10px;
    }
    .tag-list li a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 20px;
      background-color: #ddd;
      transition: background-color 0.3s;
      cursor: pointer;
    }
    .tag-list li a:hover {
      background-color: #007bff;
      color: #fff;
    }
 

 .edited-date-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: inline-block;
    }

  .edited-date-list li {
      display: inline-block;
      margin-right: 10px;
    }
 .edited-date-list li {
      font-size: 14px;
    }
  </style>
  