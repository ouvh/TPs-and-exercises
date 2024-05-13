<template>
  <div class="top-bar">
        <button @click="this.$router.push('/Home')" class="button-primary">Home</button>

    <button @click="this.$router.push('/addBlog')" class="button-primary">Add New Job</button>
    <button @click="this.$router.push('/DeleteBlog')" class="button-danger">Delete Job</button>

  </div>
</template>



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
