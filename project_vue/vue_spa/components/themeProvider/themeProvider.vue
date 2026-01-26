<template>
    <slot></slot>
</template>
<script>
    import { ref, provide, watchEffect } from "vue";
    import { ThemeKey } from "./themeInjection";

    export default {
        setup() {
            const theme = ref("light");

            const toggleTheme = () => {
                theme.value = theme.value === "light"? "dark": "light";
            }

            watchEffect(() => {
                document.body.classList.remove("light", "dark");
                document.body.classList.add(theme.value);
            });

            provide(ThemeKey, {theme, toggleTheme});

            return{};
        },
    }
</script>