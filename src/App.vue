<template>
  <div id="app">
    <MainNav />
    <router-view/>
  </div>
</template>
<script>
import MainNav from '@/components/MainNav.vue'

export default {
  components: {
    MainNav
  }
}
</script>

<style>
@font-face {
  font-family: 'Jenna Sue';
  src: url('/assets/fonts/JennaSue.ttf') format('ttf');
}

@font-face {
  font-family: 'Nimbus Mono';
  src: url('/assets/fonts/nimbusmono-regular.otf') format('otf');
}

@font-face {
  font-family: 'Nimbus Mono';
  src: url('/assets/fonts/nimbusmono-bold.otf') format('otf');
  font-style: bold;
}

:root {
  --bordo: #8B002D;
  --rosa: #D7B9B0;
  --branco: #FFFFFF;
  --preto: #2B2B2B;
}

body {
  font-family: 'Nimbus Mono', sans-serif;
  color: var(--preto);
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

body * {
  box-sizing: border-box;
}

.container  {
  margin: 0 auto;
  max-width: 1184px;
}

h2 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  text-transform: lowercase;
}

a:not(.link-no-inherit) {
  background-color: transparent;
  border-bottom: 1px dotted var(--bordo);
  color: var(--bordo);
  padding: 0.25rem 0.25rem 0;
  text-decoration: none;
  transition: background-color .5s ease-in-out;
}

a:not(.link-no-inherit):hover,
a:not(.link-no-inherit):active,
a:not(.link-no-inherit):focus {
  background-color: var(--bordo);
  border-bottom: 1px dotted transparent;
  color: var(--branco);
}

p, li {
  margin: 0;
  text-transform: lowercase;
}

.h3--jenna {
  color: var(--bordo);
  font-family: 'Jenna Sue', serif;
  font-size: 3rem;
  font-weight: normal;
  margin: 1rem 0;
}

@media (max-width: 991px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>
