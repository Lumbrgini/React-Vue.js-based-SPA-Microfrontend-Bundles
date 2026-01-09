<template>
    <div v-if="!isOpen"></div>
    
    <div v-else @click="onClose" class="modalBackground">
        <div class="modalWindow">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import './modalWindow.css'

    const props = defineProps({
        isOpen: Boolean,
        onClose: Function,
    });
</script>