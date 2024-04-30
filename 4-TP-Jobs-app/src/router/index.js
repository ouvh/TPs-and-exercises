import { createRouter, createWebHistory } from 'vue-router';
import jobview from '../components/jobview.vue';
import Home from "../components/Home.vue";
import Add from "../components/Add.vue";
import Delete from "../components/Delete.vue";
import Modify from "../components/Modify.vue"

const routes = [
  {
    path: '/job',
    name: 'jobview',
    components: {jobview:jobview}
    
  },
  {
    path: '/Home',
    name: 'Home',
    components: {Home:Home},
  },
  { path: '/', redirect: '/Home' },
  {
    path: '/addjob',
    name: 'Add',
    components: {Add:Add},
  },
  {
    path: '/Deletejob',
    name: 'DeleteJob',
    components: {DeleteJob:Delete},
  },
  {
    path: '/modify',
    name: 'modify',
    components: {modify:Modify},
  }



];



const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
