<template>
  <div>
    <nav>
      <ul class="nav-option-list">
        <li class="nav-option">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="nav-option">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="nav-option">
          <RouterLink to="/photos">Photos</RouterLink>
        </li>
        <li class="nav-option">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
        <li class="nav-option">
          <RouterLink to="/mf1">MF1</RouterLink>
        </li>
        <li class="nav-option">
          <RouterLink to="/mf2">MF2</RouterLink>
        </li>
      </ul>
    </nav>

    <div class="main-text">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
