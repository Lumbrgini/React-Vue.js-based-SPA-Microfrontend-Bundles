<template>
    <button @click="toggleLanguage" class="switchBtn">
        {{ locale === "de"? "EN": "DE"}}
    </button>
</template>

<script setup>
    import { useI18n } from 'vue-i18n'
    import "./switchLangBtn.css"
    const { locale } = useI18n()

    const toggleLanguage = () => {
        locale.value = locale.value === "de"? "en": "de";
    }
</script>
