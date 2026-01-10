<template>
  <div class="mf-2">
    <eventCardList />
    <embMW />
    <p className="creator">
        <strong>Powered by LustFänger.at</strong>
    </p>
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
