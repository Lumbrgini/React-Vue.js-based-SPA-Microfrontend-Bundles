<template>
  <div class="shell">
    <switchLangBtn />
    <nav class="navBody">
      <h1 class="title">Explore Upper Austria</h1>

      <div class="navContainer">
        <ul class="nav-option-list">
          <li class="nav-option"><RouterLink to="/">About</RouterLink></li>
          <li class="nav-option"><RouterLink to="/photos">Photos</RouterLink></li>
          <li class="nav-option"><RouterLink to="/contact">Contact</RouterLink></li>
          <li class="nav-option"><RouterLink to="/mf1">MF1</RouterLink></li>
          <li class="nav-option"><RouterLink to="/mf2">MF2</RouterLink></li>
        </ul>
      </div>
    </nav>

    <div class="main-text">
      <Suspense>
        <template #default>
          <RouterView />
        </template>

        <template #fallback>
          <div>Loading…</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import switchLangBtn from '../components/switchLangBtn/switchLangBtn.vue';

export default {
  name: "App",
  components: {
    switchLangBtn
  }
};
</script>
