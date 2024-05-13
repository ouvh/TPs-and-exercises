<template>

    <template v-if="job != null">
      <div class="kll">
          
          <div class="form-container">
            <h2>Edit Blog</h2>
            <form id="jobForm" @submit.prevent="handler">
              
          <div class="form-group">
            <label for="title">Blog Title:</label>
            <input v-model="titre" type="text" id="title" name="title" required>
          </div>
          

          

          

          <div class="form-group">
            <label for="description">Body:</label>
            <textarea v-model="description" id="description" name="description" required></textarea>
          </div>

          <div class="form-group">
            <label for="title">edit tag</label>
            <input v-model="tagtoadd" type="text" id="title" name="title" >
            <button @click.prevent="addtag" class="btn-submit ppppp">add +</button>

          </div>
          
          <div class="sidebar">
        <ul class="tag-list">
            <li :key="index" v-for="(tag,index) in tags"><a @click.prevent=" this.tags = this.tags.filter(job => job !== tag)" href="/#">{{tag}}</a></li>


          </ul>
          </div>








          <div class="op">
              <button @click=" this.$router.push('/Home')" class="btn-submit bnt">Home</button>
              <button type="submit" class="btn-submit ">Add Job</button>

          </div>

            </form>
          </div>

      </div>
    </template>

    
  

    
</template>

<script>
export default {
  props: ['job'],
  emits: ['modifying'],
  data() {
    return {
      tagtoadd: "",
      titre: "",
      description: "",
      salaire: "",
      creationdate: "",
      location: "",
      company: "",
      tags: []
    };
  },
  methods: {
    handler(event) {
      event.preventDefault();

      if (this.tags.length !== 0) {
        this.updater();
      } else {
        alert("please choose a tag");
      }
    },
    updater() {
      const currentDate = new Date();
      const currentDateTimeString = currentDate.toISOString();

      this.$emit("modifying", {
        title: this.titre,
        body: this.description,
        tags: this.tags,
        edited:  this.job.edited + [currentDateTimeString],
        createdAt: this.job.createdAt
      }, this.job.id);
    },
    addtag() {
      if (!this.tags.includes(this.tagtoadd) && this.tagtoadd !== "") {
        this.tags.push(this.tagtoadd);
      }
      this.tagtoadd = "";
    }
  },
  watch: {
    job: {
      immediate: true,
      handler(newJob) {
        if (newJob) {
          this.titre = newJob.title;
          this.description = newJob.body;
          this.salaire = newJob.salaire;
          this.creationdate = newJob.creationdate;
          this.location = newJob.location;
          this.company = newJob.company;
          this.tags = newJob.tags;
        }
      }
    }
  },
  beforeMount() {
    if (this.job == null) {
      this.$router.push("/Home");
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (this.job == null) {
      this.$router.push("/Home");
    }
    next();
  }
};
</script>


<style scoped>

.op{
    display: flex;
justify-content: space-between;}

.kll{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96vh;
}
 

  .form-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 400px;
  }

  .form-container h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    color: #555;
  }

  .form-group input, .form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .btn-submit {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .bnt{
    background-color: red;


  }

  .btn-submit:hover {
    background-color: #0056b3;
  }

  .sidebar {
      background-color: #f4f4f4;
      padding: 20px;
      width: CALC(100% - 40px);
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch; /* Enables momentum scrolling in iOS Safari */
    margin-bottom: 20px;
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
    }
    .tag-list li a:hover {
      background-color: red;
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
  .ppppp{
    background-color: green;
  }



</style>