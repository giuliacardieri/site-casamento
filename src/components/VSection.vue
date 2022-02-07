<template>
  <section :class="[ isPink ? 'section--pink ' : '', 'section' ]">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VSection',
  props: {
    isPink: Boolean
  }
}
</script>

<style scoped>
.section {
  padding: 4rem;
}

.section--pink {
  background-color: var(--rosa);
}

.section p + p {
  margin-top: 1rem;
}

@media (max-width: 767px) {
  .section {
    padding: 3rem;
  }
}
</style>
