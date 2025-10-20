<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__col footer__col--left">
        <h3 class="footer__title">{{ t('footer.interesting') }}</h3>

        <div class="footer__links">
          <ul>
            <li><a href="#" class="link">{{ t('footer.links.ukf') }}</a></li>
            <li><a href="#" class="link">{{ t('footer.links.ukf') }}</a></li>
            <li><a href="#" class="link">{{ t('footer.links.ukf') }}</a></li>
          </ul>

          <ul>
            <li><a href="#" class="link">{{ t('footer.links.eprihlas') }}</a></li>
            <li><a href="#" class="link">{{ t('footer.links.ais') }}</a></li>
            <li><a href="#" class="link">{{ t('footer.links.studentmail') }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__col footer__col--center">
        <h3 class="footer__title">{{ t('footer.follow') }}</h3>

        <nav class="socials">
          <a href="#" class="socials__item" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm5.75-.25a1.25 1.25 0 10.001-2.5 1.25 1.25 0 000 2.5z"
                  fill="currentColor"
              />
            </svg>
          </a>

          <a href="#" class="socials__item" aria-label="Twitter" title="Twitter">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M22.46 6a8.47 8.47 0 01-2.46.69 4.21 4.21 0 00-7.18 3.84A11.94 11.94 0 013.15 4.9a4.21 4.21 0 001.3 5.62A4.17 4.17 0 013.15 9v.05a4.22 4.22 0 003.38 4.14A4.24 4.24 0 014.64 13a4.22 4.22 0 003.94 2.93A8.45 8.45 0 012 19.54 11.92 11.92 0 008.45 21.43c7.74 0 11.97-6.41 11.97-11.97 0-.18-.01-.35-.02-.53A8.57 8.57 0 0022.46 6z"
                  fill="currentColor"
              />
            </svg>
          </a>

          <a href="#" class="socials__item" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.25-1.5 1.56-1.5h1.64V4.9c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.98 1.44-3.98 4.08V11H7.5v3h2.84v8h3.16z"
                  fill="currentColor"
              />
            </svg>
          </a>

          <a href="#" class="socials__item" aria-label="Website" title="Website">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 8A7.98 7.98 0 0018.43 6H5.57A8.03 8.03 0 004.07 10h14.86zM5.57 18A8.03 8.03 0 004.07 14h14.86a7.98 7.98 0 01-1.5 4H5.57z"
                  fill="currentColor"
              />
            </svg>
          </a>
        </nav>
      </div>

      <div class="footer__col footer__col--right">
        <h3 class="footer__title">{{ t('footer.studyDept') }}</h3>
        <ul class="contacts">
          <li>
            {{ t('footer.email') }}:
            <a href="mailto:sofpv@ukf.sk" class="link">sofpv@ukf.sk</a>
          </li>
          <li>{{ t('footer.phone') }}: +421 37 6408 560</li>
          <li>+421 37 6408 565</li>
          <li>+421 37 6408 562</li>
          <li>+421 37 6408 569</li>
        </ul>
      </div>
    </div>

    <button class="toTop" @click="scrollTop" :aria-label="t('footer.toTop')">
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12z" fill="currentColor" />
      </svg>
    </button>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<style scoped>
.footer {
  background: #111216;
  color: #f5f5f5;
  position: relative;
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 44px 24px 64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: start;
  gap: 48px;
}

.footer__title {
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 20px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 12px 56px;
}

.footer__links ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__links li {
  line-height: 1.9;
}

.link {
  color: #e9e9e9;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.footer__col--left {
  justify-self: start;
  text-align: left;
}

.footer__col--center {
  justify-self: center;
  text-align: center;
}

.footer__col--right {
  justify-self: end;
  text-align: right;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 26px;
  margin-top: 8px;
}

.socials__item {
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  color: #f7f7f7;
  opacity: 0.95;
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.socials__item:hover {
  transform: translateY(-2px);
  opacity: 1;
}

.icon {
  width: 24px;
  height: 24px;
  display: block;
}

.contacts {
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 1.9;
}

.toTop {
  position: absolute;
  right: 16px;
  top: 24px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: transparent;
  color: #f5f5f5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.toTop:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

/* адаптив */
@media (max-width: 1024px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }

  .footer__col--right {
    justify-self: start;
    text-align: left;
  }
}

@media (max-width: 680px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer__col--center {
    justify-self: start;
    text-align: left;
  }

  .socials {
    justify-content: flex-start;
  }

  .toTop {
    top: 12px;
  }
}
</style>
