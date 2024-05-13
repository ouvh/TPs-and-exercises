<template>
<div class="aaa">
    <h2 style="text-align:center">Tags</h2>

    <tag :key="tag.id" v-for="tag in tags" :tag="tag" />
</div>
  
</template>

<script>
import tag from "./tag.vue"
export default {
    components: {
      tag
    },
    props:["tags"]

}
</script>

<style scoped>
.aaa{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
    border-radius: 10px;
    align-items: center;

}

</style>