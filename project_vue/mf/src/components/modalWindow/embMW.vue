ß<template>
    <div class="container">
        <button @click="handleOpen" class="modalBtn" >
            Locations
        </button>
        <modalWindow :is-open="open" :on-close="handleClose">
            <div v-if="parsed.length === 0">
                Choose your favorite locations to see the events nearby!
            </div>

            <div v-else>
                <p ref="count"></p>

                <div v-for="loc in parsed" :key="loc">
                    {{ loc }}
                </div>
            </div>
        </modalWindow>
    </div>
</template>

<script setup>
    import modalWindow from './modalWindow.vue';
    import { ref, nextTick } from 'vue';

    const count = ref(null);
    const open = ref(false);
    const parsed = ref([]);

    const handleClose = () => {
        open.value = false;
    };

    const handleOpen = () => {
        parsed.value = JSON.parse(localStorage.getItem("Hotels") || "[]");
        open.value = true;

        nextTick(() => {
            if (count.value){
                count.value.textContent = `Favorite locations (${parsed.value.length}):`;
            }
        });
    };
</script>