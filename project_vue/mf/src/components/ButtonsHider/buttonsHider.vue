<template>
    <themeSwitcher v-if="!shouldHide"/>
    <switchLangBtn v-if="!shouldHide"/>
</template>
<script>
    import { useRoute } from "vue-router";
    import { computed } from "vue";
    import themeSwitcher from '../../../../vue_spa/components/themeProvider/themeSwitcher.vue';
    import switchLangBtn from '../../../../vue_spa/components/switchLangBtn/switchLangBtn.vue';

    export default {

        setup() {
            const hideOn = ["/mf1", "/mf2"];
            const route = useRoute();

            const pathname = computed(() => route.path)
            const shouldHide = computed(() => hideOn.includes(pathname.value));
            return { shouldHide };
        }, 
        components:{
            themeSwitcher,
            switchLangBtn
        }
    }
</script>