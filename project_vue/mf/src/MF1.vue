<template>
  <div class="mf-1">
    <hotelCardsList />
    <p class="creator">
        <strong>Powered by Wohnungsfeier.at</strong>
    </p>
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
