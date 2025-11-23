<template>
  <div>
    <MF1 />
    <MF2 />
  </div>
</template>

<script>
import MF1 from "./MF1.vue";
import MF2 from "./MF2.vue";

export default {
  name: "MFRoot",
  components: { MF1, MF2 },
};
</script>
