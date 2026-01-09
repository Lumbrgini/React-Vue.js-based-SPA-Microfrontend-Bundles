<template>
  <div class="mf-2">
    <eventCardList />
  </div>
</template>

<script>
  import eventCardList from './components/eventCardList/eventCardList.vue';
  import "./global-styles/App.css";

  export default {
    name: "MF2",
    components: {
      eventCardList,
    }
  };
</script>
