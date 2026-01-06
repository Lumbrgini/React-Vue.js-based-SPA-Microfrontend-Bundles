<template>
  <div class="photosPage">
    <div class="textContainer">
      <h1>{{ t('photos.title') }}</h1>
      <p class="description">{{ t('photos.description') }}</p>
    </div>

    <section class="mosaic">
      <figure class="tile h1"><img :src="hor1" alt="Horizontal 1" /></figure>
      <figure class="tile v1"><img :src="ver1" alt="Vertical 1" /></figure>
      <figure class="tile v2"><img :src="ver2" alt="Vertical 2" /></figure>

      <figure class="tile v3"><img :src="ver3" alt="Vertical 3" /></figure>
      <figure class="tile v4"><img :src="ver4" alt="Vertical 4" /></figure>
      <figure class="tile h2"><img :src="hor2" alt="Horizontal 2" /></figure>
    </section>

    <section class="mosaic">
      <figure class="tile h1"><img :src="hor3" alt="Horizontal 3" /></figure>
      <figure class="tile v1"><img :src="ver5" alt="Vertical 5" /></figure>
      <figure class="tile v2"><img :src="ver6" alt="Vertical 6" /></figure>

      <figure class="tile v3"><img :src="ver7" alt="Vertical 7" /></figure>
      <figure class="tile v4"><img :src="ver8" alt="Vertical 8" /></figure>
      <figure class="tile h2"><img :src="hor4" alt="Horizontal 4" /></figure>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import "../page-styles/Photos.css"

import ver1 from '../pictures/ver1.JPG'
import ver2 from '../pictures/ver2.JPG'
import ver3 from '../pictures/ver3.JPG'
import ver4 from '../pictures/ver4.JPG'
import ver5 from '../pictures/ver5.JPG'
import ver6 from '../pictures/ver6.JPG'
import ver7 from '../pictures/ver7.JPG'
import ver8 from '../pictures/ver8.JPG'

import hor1 from '../pictures/hor1.JPG'
import hor2 from '../pictures/hor2.JPG'
import hor3 from '../pictures/hor6.JPG'
import hor4 from '../pictures/hor4.JPG'
</script>
