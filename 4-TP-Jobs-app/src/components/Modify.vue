<template>
    <div class="kll">
        
        <div class="form-container">
          <h2>Modify Job</h2>
          <form id="jobForm" @submit.prevent="handler">
            
        <div class="form-group">
          <label for="title">Job Title:</label>
          <input v-model="titre" type="text" id="title" name="title" required>
        </div>
        <div class="form-group">
          <label for="company">Company:</label>
          <input v-model="company"  type="text" id="company" name="company" required>
        </div>

        <div class="form-group">
          <label for="location">Location:</label>
          <input v-model="location" type="text" id="location" name="location" required>
        </div>

        
        <div class="form-group">
          <label for="salaire">Salaire:</label>
          <input v-model="salaire" type="text" id="location" name="location" required>
        </div>

        <div class="form-group">
          <label for="creationdate">Creation Date:</label>
          <input v-model="creationdate" type="text" id="location" name="location" required>
        </div>



        <div class="form-group">
          <label for="description">Description:</label>
          <textarea v-model="description" id="description" name="description" required></textarea>
        </div>

        <div class="op">
            <button @click=" this.$router.push('/Home')" class="btn-submit bnt">Home</button>
            <button type="submit" class="btn-submit ">Modify</button>

        </div>

          </form>
        </div>

    </div>
</template>

<script>

export default {
    props:['job'],
    emits:['modifying']
    ,
    methods:{
        handler(event){
            event.preventDefault();
            this.updater();

        },
        updater(){
            this.$emit('modifying',{
                                "titre":this.titre,
                                "description": this.description,
                                "salaire": this.salaire,
                                "creationdate": this.creationdate,
                                "location": this.location,
                                "company": this.company
                                  },this.job.id)


        }
        
    },beforeMount(){
      if(this.job == null){
         this.$router.push('/Home')

      }

    }, 
    data(){
        return{
            titre:this.job.titre,
            description:this.job.description,
            salaire:this.job.salaire,
            creationdate:this.job.creationdate,
            location:this.job.location,
            company:this.job.company,
        }
    }

}
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



</style>