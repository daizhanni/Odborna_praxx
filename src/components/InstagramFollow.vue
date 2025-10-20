<template>
  <section class="instagram">
    <h1 class="title">
      {{ t('instagram.title') }} <span>{{ t('instagram.handle') }}</span>
    </h1>

    <div class="grid">
      <div class="card big">
        <div class="image"></div>
        <div class="footer">
          <small>Dolor Sitamet</small>
          <strong>LOREM IPSUM</strong>
        </div>
      </div>

      <div class="right">
        <div class="card medium">
          <div class="image"></div>
          <div class="footer">
            <small>Dolor Sitamet</small>
            <strong>LOREM IPSUM</strong>
          </div>
        </div>

        <div class="bottom">
          <div class="card small">
            <div class="image"></div>
            <div class="footer">
              <small>Dolor Sitamet</small>
              <strong>LOREM IPSUM</strong>
            </div>
          </div>

          <div class="card small">
            <div class="image"></div>
            <div class="footer">
              <small>Dolor Sitamet</small>
              <strong>LOREM IPSUM</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.instagram {
  width: 100vw;
  height: 100vh;
  background: #fff;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px 30px 30px;
}

.title {
  font-size: 2.1rem;
  font-weight: 800;
  color: #44d78b;
  margin-bottom: 28px;
  text-align: center;
}

.title span {
  color: #44d78b;
}

.grid {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  height: calc(100% - 120px);
}

.card.big {
  flex: 1.05;
  background: #f2f9fc;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right {
  flex: 0.9;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.card.medium {
  height: 50%;
  background: #f2f9fc;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottom {
  display: flex;
  gap: 28px;
  height: 50%;
}

.card.small {
  flex: 1;
  background: #f2f9fc;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space между;
}

.image {
  flex: 1;
  background: #f2f9fc url('src/assets/001.jpg') center/cover no-repeat;
  border-radius: 12px 12px 0 0;
}

.footer {
  background: #44d78b;
  color: #fff;
  padding: 14px 20px;
  border-radius: 0 0 12px 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.footer small {
  font-size: 0.75rem;
  opacity: 0.9;
  display: block;
}

.footer strong {
  font-size: 0.9rem;
  font-weight: 700;
  display: block;
  margin-top: 2px;
}

@media (max-width: 950px) {
  .instagram {
    height: auto;
    padding: 30px 30px 60px;
  }

  .grid {
    flex-direction: column;
    height: auto;
  }

  .right,
  .card.big,
  .card.medium,
  .card.small {
    width: 100%;
  }

  .bottom {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
