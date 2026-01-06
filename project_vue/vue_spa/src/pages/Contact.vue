<template>
  <section class="contact">
    <div class="textContainer">
      <h1 class="contact-title">{{ t('contact.title') }}</h1>
      <p class="contact-subtitle">{{ t('contact.description') }}</p>
    </div>

    <div class="contact-grid">
      <div class="contact-card">
        <h3>Tourism information</h3>

        <p>
          <strong>Upper Austrian Tourist Board (Urlaubsinfo)</strong><br />
          Tel: <a href="tel:+4373221022">+43 732 221022</a><br />
          Email:
          <a href="mailto:info@oberoesterreich.at">info@oberoesterreich.at</a>
        </p>

        <p>
          <strong>Upper Austria Tourism (Head office, Linz)</strong><br />
          Tel: <a href="tel:+437327277100">+43 732 7277-100</a><br />
          Email:
          <a href="mailto:tourismus@oberoesterreich.at">tourismus@oberoesterreich.at</a>
        </p>
      </div>

      <div class="contact-card">
        <h3>Tourist Info Linz</h3>
        <p>
          <strong>Tourist Information Linz</strong><br />
          Hauptplatz 1, 4020 Linz<br />
          Tel: <a href="tel:+4373270702009">+43 732 7070 2009</a><br />
          Email: <a href="mailto:info@linztourismus.at">info@linztourismus.at</a>
        </p>
      </div>

      <div class="contact-card">
        <h3>Emergency numbers (Austria)</h3>
        <ul class="contact-list">
          <li><strong><a href="tel:112">112</a></strong> — European emergency number</li>
          <li><strong><a href="tel:122">122</a></strong> — Fire brigade</li>
          <li><strong><a href="tel:133">133</a></strong> — Police department</li>
          <li><strong><a href="tel:140">140</a></strong> — Mountain rescue</li>
          <li><strong><a href="tel:141">141</a></strong> — Medical on-call service</li>
          <li><strong><a href="tel:144">144</a></strong> — Ambulance / Rescue</li>
        </ul>
      </div>

      <div class="contact-card small">
        <h3>Health &amp; pharmacy</h3>
        <ul class="contact-list">
          <li><strong><a href="tel:1450">1450</a></strong> — Health advice hotline (24/7)</li>
          <li><strong><a href="tel:1455">1455</a></strong> — Pharmacy on-call service</li>
          <li><strong><a href="tel:+4314064343">+43 1 406 43 43</a></strong> — Poison control</li>
        </ul>
      </div>

      <div class="contact-card small">
        <h3>Roadside assistance</h3>
        <ul class="contact-list">
          <li><strong><a href="tel:120">120</a></strong> — ÖAMTC roadside assistance</li>
          <li><strong><a href="tel:123">123</a></strong> — ARBÖ roadside assistance</li>
        </ul>
      </div>

      <div class="contact-card small">
        <h3>Alerts &amp; disaster coordination</h3>
        <p>
          <strong>Landeswarnzentrale</strong><br />
          Tel: <a href="tel:130">130</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import "../page-styles/Contact.css"
const { t } = useI18n()
</script>