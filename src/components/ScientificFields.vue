<template>
  <section class="fields" id="section-fields">
    <h1 class="page-title">{{ t('fields.title') }}</h1>

    <div class="grid">
      <aside class="nav">
        <h3 class="nav__title">{{ t('fields.pick') }}</h3>
        <ul class="nav__list">
          <li v-for="(o, i) in disciplines" :key="i">
            <a
                href="#"
                class="nav__link"
                :class="{ active: selectedIndex === i }"
                @click.prevent="select(i)"
            >
              {{ o }}
            </a>
          </li>
        </ul>

        <button class="more-btn">{{ t('fields.showAll') }}</button>
      </aside>

      <main class="main">
        <h2 class="main__title">
          {{ selectedIndex === null ? t('fields.sampleTitle') : disciplines[selectedIndex] }}
        </h2>

        <p class="main__lead">
          Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor
          incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis
          nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div class="image-card">
          <img src="@/assets/001.jpg" alt="Vedný odbor" />
        </div>
      </main>

      <aside>
        <p>
          Culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus
          error sit voluptartem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi ropeior architecto
          beatae vitae dicta sunt explicabo. Nemo eniem
          ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores
          eosep quiklop ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, quepi dolorem ipsum
          quia dolor srit amet, consectetur adipisci velit, seid
          quia non numquam eiuris modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat iope
          voluptatem.
        </p>

        <hr class="divider" />

        <nav class="socials">
          <!-- Instagram -->
          <a href="#" class="socials__item" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm5.75-.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
                  fill="currentColor"
              />
            </svg>
          </a>

          <!-- Twitter (X) -->
          <a href="#" class="socials__item" aria-label="Twitter" title="Twitter">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M22.46 6a8.47 8.47 0 0 1-2.46.69 4.21 4.21 0 0 0-7.18 3.84A11.94 11.94 0 0 1 3.15 4.9a4.21 4.21 0 0 0 1.3 5.62A4.17 4.17 0 0 1 3.15 9v.05a4.22 4.22 0 0 0 3.38 4.14A4.24 4.24 0 0 1 4.64 13a4.22 4.22 0 0 0 3.94 2.93A8.45 8.45 0 0 1 2 19.54 11.92 11.92 0 0 0 8.45 21.43c7.74 0 11.97-6.41 11.97-11.97 0-.18-.01-.35-.02-.53A8.57 8.57 0 0 0 22.46 6z"
                  fill="currentColor"
              />
            </svg>
          </a>

          <!-- Facebook -->
          <a href="#" class="socials__item" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.25-1.5 1.56-1.5h1.64V4.9c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.98 1.44-3.98 4.08V11H7.5v3h2.84v8h3.16z"
                  fill="currentColor"
              />
            </svg>
          </a>

          <!-- Website / Globe -->
          <a href="#" class="socials__item" aria-label="Website" title="Website">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 8A7.98 7.98 0 0 0 18.43 6H5.57A8.03 8.03 0 0 0 4.07 10h14.86zM5.57 18A8.03 8.03 0 0 0 4.07 14h14.86a7.98 7.98 0 0 1-1.5 4H5.57z"
                  fill="currentColor"
              />
            </svg>
          </a>
        </nav>

        <div class="cta-wrap">
          <button class="cta">
            {{ t('fields.cta') }}<br />
            *{{ selectedIndex !== null ? disciplines[selectedIndex] : t('fields.sampleTitle') }}*
          </button>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const disciplines = computed(() => tm('fields.disciplines'))
const selectedIndex = ref(null)
function select(i) {
  selectedIndex.value = i
}
</script>

<style scoped>
.fields {
  --green: #44d78b;
  background: #fff;
  padding: 72px 100px 80px;
  font-family: Arial, sans-serif;
}

.page-title {
  color: var(--green);
  text-align: center;
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 52px;
}

.grid {
  display: grid;
  grid-template-columns: 280px 1fr 300px;
  gap: 48px;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

.nav__title {
  color: var(--green);
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 20px;
}

.nav__list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav__link {
  color: var(--green);
  text-decoration: none;
  font-weight: 600;
}

.nav__link.active {
  color: #2ea369;
}

.more-btn {
  background: var(--green);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 22px;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
}

.main__title {
  color: var(--green);
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 16px;
}

.main__lead {
  color: #333;
  line-height: 1.6;
  margin-bottom: 18px;
}

.image-card {
  width: 350px;
  height: 260px;
  background: #f1f9fd;
  border-radius: 16px;
  overflow: hidden;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.divider {
  border: none;
  border-top: 1px solid var(--green);
  margin: 18px 0;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 26px;
  margin: 20px 0;
}

.socials__item {
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  color: #333;
  opacity: 0.9;
  transition:
      transform 0.18s ease,
      opacity 0.18s ease,
      color 0.2s ease;
}

.socials__item:hover {
  transform: translateY(-2px);
  opacity: 1;
  color: var(--green);
}

.icon {
  width: 24px;
  height: 24px;
}

.cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 28px;
}

.cta {
  border: 2px solid var(--green);
  color: var(--green);
  background: transparent;
  border-radius: 25px;
  padding: 12px 40px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1rem;
}

.cta:hover {
  background: var(--green);
  color: #fff;
}
</style>
