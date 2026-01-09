<template>
  <div class="mf-2">
    <eventCardList />
    <embMW />
  </div>
</template>

<script>
  import eventCardList from './components/eventCardList/eventCardList.vue';
  import embMW from './components/modalWindow/embMW.vue';
  import "./global-styles/App.css";

  export default {
    name: "MF2",
    components: {
      eventCardList,
      embMW
    }
  };
</script>
