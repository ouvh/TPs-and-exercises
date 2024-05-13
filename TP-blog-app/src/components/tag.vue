<template>
<div @click="this.$router.push('/tag/'+this.tag)" class="o">
    {{this.tag}}
</div>
  
</template>

<script>
export default {
    props:["tag"]

}
</script>

<style scoped>
.o{ 
    background-color: rgb(229, 229, 77);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 20px;
    font-size: large;
    cursor: pointer;
    width: 80%;

}

.o:hover{
    background-color: rgb(167, 167, 14);

}

</style>