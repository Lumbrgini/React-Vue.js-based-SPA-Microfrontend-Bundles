<template>
  <div class="about-page">
    <h1 class="about-title">{{ t('about.p-title') }}</h1>

    <div class="about-grid">
      <div class="about-card">
        <h3>{{ t('about.card1-title') }}</h3>
        <p>{{ t('about.p-about') }}</p>
      </div>

      <div class="about-card">
        <h3>{{ t('about.card2-title') }}</h3>
        <p>{{ t('about.p-discover') }}</p>
      </div>

      <div class="about-card">
        <h3>{{ t('about.card3-title') }}</h3>
        <p>{{ t('about.p-services') }}</p>
      </div>

      <div class="about-card">
        <h3>{{ t('about.card4-title') }}</h3>
        <p>{{ t('about.p-extra') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import "../page-styles/About.css"

const { t } = useI18n()
</script>
