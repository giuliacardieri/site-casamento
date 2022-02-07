<template>
  <header class="hero" :style="`background-image: url('${require('@/assets/images/' + image + '.jpg')}')`">
    <div class="hero__text">
      <h1 class="hero__h1">{{ title }}</h1>
      <p v-if="hasDates" class="hero__p">09.07.2022</p>
      <p v-if="hasDates" class="hero__p">Villa Ásolo, Votorantim</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    image: String,
    hasDates: Boolean
  }
}
</script>

<style scoped>
.hero {
  align-items: center;
  background-color: var(--rosa);
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 600px;
  position: relative;
  width: 100%;
}

.hero:before {
  background-color: var(--rosa);
  content: '';
  height: 100%;
  left: 0;
  opacity: 0.85;
  position: absolute;
  top: 0;
  width: 100%;
}

.hero__text {
  position: relative;
  text-align: center;
  z-index: 1;
}

.hero__h1 {
  color: var(--bordo);
  font-family: 'Jenna Sue', serif;
  font-size: 6rem;
  font-weight: 400;
  margin: 0;
  text-transform: none;
}

.hero__p {
  color: var(--bordo);
  font-size: 1.5rem;
  margin: 0;
}

@media (max-width: 767px) {
  .hero__h1 {
    font-size: 4rem;
  }

  .hero__p {
    font-size: 1.25rem;
  }
}
</style>
