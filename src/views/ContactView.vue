<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowUpRight, Check, Clock3, Facebook, MapPin, Phone, Users } from 'lucide-vue-next'
import { photoPositions, villaPhotos } from '../data'

const submitted = ref(false)
const booking = ref({ name: '', email: '', date: '', time: '19:30', guests: '2 personnes', note: '' })
const minDate = computed(() => new Date().toISOString().slice(0, 10))
const mapLink = 'https://www.google.com/maps/place/LA+VILLA+ZARZIS+Restaurant+%26+Caf%C3%A9/data=!4m7!3m6!1s0x13aaef1d5b10767f:0xe8f525c037b513a6!8m2!3d33.5027902!4d11.1072631!16s%2Fg%2F11x_zfftwn!19sChIJf3YQWx3vqhMRphO1N8Al9eg?authuser=0&hl=en&rclk=1'
const facebookLink = 'https://www.facebook.com/la.villa.lounge.zarzis/'
const whatsappLink = 'https://wa.me/21692360918'
function submitBooking() {
  const date = new Date(`${booking.value.date}T00:00:00`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  const message = [
    'Bonjour LA VILLA ZARZIS, je souhaite réserver une table.',
    `Nom : ${booking.value.name}`,
    `Date : ${date}`,
    `Heure : ${booking.value.time}`,
    `Nombre de personnes : ${booking.value.guests}`,
    booking.value.email ? `E-mail : ${booking.value.email}` : '',
    booking.value.note ? `Note : ${booking.value.note}` : '',
  ].filter(Boolean).join('\n')
  window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="page-hero page-hero-contact">
      <div class="page-hero-image" :style="{ backgroundImage: `url(${villaPhotos.lounge})`, backgroundPosition: photoPositions[villaPhotos.lounge] }"></div><div class="page-hero-shade"></div>
      <div class="page-hero-content"><span class="eyebrow eyebrow-light"><i></i> MARHBA BIKOM À ZARZIS</span><h1>On vous <em>attend.</em></h1><p>Une table à partager, un café à savourer<br>ou juste un petit mot — bienvenue chez nous.</p></div>
    </section>
    <section class="contact-page section-wrap">
      <div class="contact-intro"><span class="eyebrow"><i></i> LA VILLA EST À VOUS</span><h2>La prochaine belle<br>soirée <em>commence ici.</em></h2></div>
      <div class="contact-layout">
        <div class="contact-details">
          <article class="contact-info-card"><span class="contact-icon"><MapPin :size="18"/></span><div><span class="footer-label">Nous trouver</span><p>Av. Farhat Hached<br>Zarzis 4170, Tunisie · G434+4W</p><a :href="mapLink" target="_blank" rel="noreferrer" class="text-link">Itinéraire Google Maps <ArrowUpRight :size="14"/></a></div></article>
          <article class="contact-info-card"><span class="contact-icon"><Phone :size="18"/></span><div><span class="footer-label">Nous appeler</span><p><a href="tel:+21692360918">+216 92 360 918</a></p><span class="detail-note">Ou réservez directement par WhatsApp.</span></div></article>
          <article class="contact-info-card"><span class="contact-icon"><Facebook :size="18"/></span><div><span class="footer-label">Nous écrire</span><p>Retrouvez notre page officielle</p><a :href="facebookLink" target="_blank" rel="noreferrer" class="text-link">LA VILLA Lounge Zarzis <ArrowUpRight :size="14"/></a></div></article>
          <article class="contact-info-card"><span class="contact-icon"><Clock3 :size="18"/></span><div><span class="footer-label">Nos horaires · tous les jours</span><p>11h–14h30<br>18h–22h</p></div></article>
          <a class="whatsapp-link" :href="whatsappLink" target="_blank" rel="noreferrer"><span>Réserver sur WhatsApp · +216 92 360 918</span><ArrowUpRight :size="16"/></a>
        </div>
        <form class="booking-form" @submit.prevent="submitBooking">
          <template v-if="!submitted">
            <div class="form-heading"><div><span class="eyebrow"><i></i> VOTRE TABLE VOUS ATTEND</span><h3>Demander <em>une table.</em></h3></div><span class="form-aside">Quelques détails<br>et le tour est joué.</span></div>
            <div class="form-grid"><label>Votre nom<input v-model="booking.name" required placeholder="Prénom et nom"></label><label>Votre e-mail<input v-model="booking.email" type="email" required placeholder="vous@exemple.com"></label><label>La date<input v-model="booking.date" type="date" :min="minDate" required></label><label>L’heure<select v-model="booking.time"><option>12:00</option><option>12:30</option><option>13:00</option><option>13:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option><option>21:00</option></select></label><label class="wide-label"><Users :size="15"/> Nombre de personnes<select v-model="booking.guests"><option>1 personne</option><option>2 personnes</option><option>3 personnes</option><option>4 personnes</option><option>5 personnes</option><option>6 personnes</option><option>7 personnes ou plus</option></select></label><label class="wide-label">Une occasion, une envie ? <textarea v-model="booking.note" rows="3" placeholder="Un petit mot pour notre équipe (facultatif)"></textarea></label></div>
            <button class="button button-dark form-submit" type="submit">Continuer sur WhatsApp <ArrowUpRight :size="16"/></button><p class="form-fineprint">WhatsApp s’ouvrira avec votre demande préremplie. Envoyez le message pour confirmer.</p>
          </template>
          <div v-else class="success-message"><span class="success-icon"><Check :size="24"/></span><span class="eyebrow"><i></i> MARHBA</span><h3>Votre demande est prête, {{ booking.name }}.</h3><p>WhatsApp s’est ouvert avec le récapitulatif de votre réservation. Envoyez le message dans WhatsApp pour le transmettre à La Villa.</p><a :href="whatsappLink" target="_blank" rel="noreferrer" class="text-link">Ouvrir WhatsApp <ArrowUpRight :size="15"/></a></div>
        </form>
      </div>
    </section>
    <section class="map-section"><iframe title="Carte de localisation de LA VILLA ZARZIS" src="https://maps.google.com/maps?q=33.5027902%2C11.1072631&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><div class="map-card"><span class="eyebrow"><i></i> À ZARZIS, EN TUNISIE</span><p>Av. Farhat Hached<br>Zarzis 4170 · G434+4W</p><a :href="mapLink" target="_blank" rel="noreferrer" class="text-link">Ouvrir la fiche Google Maps <ArrowUpRight :size="15"/></a></div></section>
  </div>
</template>
