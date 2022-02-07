<template>
  <section class="countdown">
    <div class="container">
      <h2 class="countdown__h2">
        Faltam <span class="countdown__h2--bordo">{{ days }} dias</span> pro nosso casamento 👰🤵
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CountdownSection',
  data: function () {
    return {
      days: undefined
    }
  },
  methods: {
    getDays () {
      const dateParty = this.$dayjs('2022-07-09T18:00')
      const dateNow = this.$dayjs()
      this.days = dateParty.diff(dateNow, 'days')
    }
  },
  mounted () {
    this.getDays()
  }
}
</script>

<style scoped>
.countdown {
  background-color: var(--rosa);
  color: var(--branco);
  padding: 4rem;
}

.countdown__h2 {
  color: var(--branco);
  font-size: 3rem;
  margin: 0.75rem 0 0 0;
  text-align: center;
  text-transform: lowercase;
}

.countdown__h2--bordo {
  color: var(--bordo);
}

@media (max-width: 991px) {
  .countdown {
    padding: 2rem;
  }

  .countdown__h2 {
    font-size: 2rem;
  }
}
</style>
