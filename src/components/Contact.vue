<template>
  <section class="kontakt" id="section-contact">
    <div class="kontakt__header">
      <h1>{{ t('contact.title') }}</h1>
    </div>

    <div class="kontakt__body">
      <div class="kontakt__info">
        <h2>{{ t('contact.addressTitle') }}</h2>
        <p><strong>{{ t('contact.faculty') }}</strong></p>
        <p>{{ t('contact.university') }}</p>
        <p>{{ t('contact.street') }}</p>
        <p>{{ t('contact.cityZip') }}</p>

        <h2>{{ t('contact.reachUs') }}</h2>
        <p>{{ t('contact.email') }}</p>
        <p>{{ t('contact.phone') }}</p>
      </div>

      <div class="kontakt__map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.951172706064!2d18.08569717684357!3d48.31449114499644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3f048e623ee3%3A0x3b4cfb70b2431a35!2sConstantine%20the%20Philosopher%20University%20in%20Nitra!5e0!3m2!1sen!2ssk!4v1697475123456!5m2!1sen!2ssk"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.kontakt {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.kontakt__header {
  background-color: #44d78b;
  text-align: center;
  padding: 36px 0 28px;
  flex-shrink: 0;
}

.kontakt__header h1 {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}

.kontakt__body {
  flex: 1;
  background-color: #c4f0d2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0;
  box-sizing: border-box;
}

.kontakt__info {
  width: 320px;
  padding-left: 30px;
  text-align: left;
}

.kontakt__info h2 {
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 8px;
  margin-top: 22px;
}

.kontakt__info p {
  margin: 4px 0;
  line-height: 1.5;
}

.kontakt__map {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
}

.kontakt__map iframe {
  width: 850px;
  height: 380px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1200px) {
  .kontakt__map iframe {
    width: 700px;
    height: 350px;
  }
}

@media (max-width: 900px) {
  .kontakt__body {
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
  }

  .kontakt__info {
    width: auto;
    padding: 0 24px;
    text-align: center;
  }

  .kontakt__map {
    padding: 0;
    justify-content: center;
  }

  .kontakt__map iframe {
    width: 100%;
    max-width: 600px;
    height: 300px;
  }
}
</style>
