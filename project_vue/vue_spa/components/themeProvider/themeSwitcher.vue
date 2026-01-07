<template>
    <button @click="toggleTheme" class="themeSwitcher">
        {{ theme === "light" ? "🌑" : "☀️" }}
    </button>
</template>

<script>
import { useTheme } from './themeContext';
import "./themeSwitcher.css"

export default {
    setup() {
        const {theme, toggleTheme} = useTheme();
        return {theme, toggleTheme};
    },
}
</script>