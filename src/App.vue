<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ArrowUpRight, Menu, X, Facebook, MapPin, Clock3, Phone } from 'lucide-vue-next'
import officialLogo from './assets/la-villa-logo-transparent.png'

const route = useRoute()
const menuOpen = ref(false)
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'La carte', to: '/carte' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <div class="site-shell">
    <div class="topline"><span>LA VILLA · ZARZIS, TUNISIE</span><span class="topline-right"><Clock3 :size="13" /> Tous les jours · 11h–14h30 · 18h–22h</span></div>
    <header class="site-header">
      <RouterLink to="/" class="brand" aria-label="LA VILLA — Accueil" @click="menuOpen = false"><img class="brand-logo" :src="officialLogo" alt="LA VILLA Restaurant & Lounge"></RouterLink>
      <button class="mobile-toggle" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen"><X v-if="menuOpen" /><Menu v-else /></button>
      <nav :class="['main-nav', { 'is-open': menuOpen }]" aria-label="Navigation principale">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" :class="{ active: route.path === link.to }" @click="menuOpen = false">{{ link.label }}</RouterLink>
        <RouterLink to="/contact" class="nav-book" @click="menuOpen = false">Réserver <ArrowUpRight :size="15" /></RouterLink>
      </nav>
    </header>
    <main><RouterView /></main>
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-brand"><RouterLink to="/" class="brand brand-light" aria-label="LA VILLA — Accueil"><img class="brand-logo footer-brand-logo" :src="officialLogo" alt="LA VILLA Restaurant & Lounge"></RouterLink><p>Un lieu pour se retrouver,<br>au cœur de Zarzis.</p><div class="socials"><a href="https://www.facebook.com/la.villa.lounge.zarzis/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook :size="17" /></a></div></div>
        <div class="footer-column"><span class="footer-label">Explorer</span><RouterLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</RouterLink></div>
        <div class="footer-column"><span class="footer-label">Nous trouver</span><a href="https://www.google.com/maps/place/LA+VILLA+ZARZIS+Restaurant+%26+Caf%C3%A9/data=!4m7!3m6!1s0x13aaef1d5b10767f:0xe8f525c037b513a6!8m2!3d33.5027902!4d11.1072631!16s%2Fg%2F11x_zfftwn!19sChIJf3YQWx3vqhMRphO1N8Al9eg?authuser=0&amp;hl=en&amp;rclk=1" target="_blank" rel="noreferrer"><MapPin :size="14" /> Av. Farhat Hached, Zarzis</a><a href="tel:+21692360918"><Phone :size="14" /> +216 92 360 918</a><span><Clock3 :size="14" /> Tous les jours · 11h–14h30 · 18h–22h</span></div>
        <div class="footer-cta"><span class="footer-label">La table vous attend</span><p>Un déjeuner qui s'étire, un dîner à célébrer.</p><RouterLink to="/contact" class="footer-link">Réserver une table <ArrowUpRight :size="15" /></RouterLink></div>
      </div>
      <div class="footer-bottom"><span>© 2026 La Villa. Tous droits réservés.</span><span>Fait avec amour, comme en Italie.</span></div>
    </footer>
  </div>
</template>
