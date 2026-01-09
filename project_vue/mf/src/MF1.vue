<template>
  <div class="mf-1">
    <hotelCardsList />
  </div>
</template>

<script>
  import hotelCardsList from './components/hotelCardsList/hotelCardsList.vue';
  import "./global-styles/App.css";
  
  export default {
    name: "MF1",
    components: {
      hotelCardsList
    }
  };


</script>
