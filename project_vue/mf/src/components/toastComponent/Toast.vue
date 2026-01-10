<template>
    <Teleport to="body">
        <div v-if="open" class="toast" role="status" aria-live="polite">
            {{ message }}
        </div>
    </Teleport>
</template>
<script setup>

    import "./Toast.css"
    defineProps({
        open: Boolean,
        message: String
    })
</script>