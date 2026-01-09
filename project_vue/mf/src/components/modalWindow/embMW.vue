<template>
    <div class="container">
        <button @click="handleOpen" class="modalBtn" >
            Locations
        </button>
        <modalWindow :is-open="open" :on-close="handleClose">
            <div v-if="parsed.length == 0">
                Choose your favorite locations to see the events nearby!
            </div>

            <div v-else>
                <p>Favorite locations ({{ numberOfLocations = parsed.length }}): </p>

                <div v-for="loc in parsed">
                    {{ loc }}
                </div>
            </div>
        </modalWindow>
    </div>
</template>

<script setup>
    import modalWindow from './modalWindow.vue';
    import { ref } from 'vue';

    const open = ref(false);
    const numberOfLocations = ref(0);
    
    const cities = localStorage.getItem("Hotels");
    const parsed = JSON.parse(cities);

    const handleClose = () => {
        open.value = false;
    };

    const handleOpen = () => {
        open.value = true;
    };
</script>