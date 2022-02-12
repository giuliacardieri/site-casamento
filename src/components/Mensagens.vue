<template>
  <section class="mural">
    <div class="container">
      <h1 class="mural__h1">mensagens</h1>
      <div class="mural__board">
        <div v-if="loading"
          class="mural__loading">
          opa, carregando, só um minuto...
        </div>
        <div v-else v-for="(postit, index) in mensagens"
          :key="index"
          class="mural__postit"
        >
          <p>{{ postit.message }}</p>
          <h3 class="mural__h3">{{ postit.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Mensagens',
  props: {
    update: Boolean
  },
  watch: {
    update () {
      this.getMensagens()
    }
  },
  data: function () {
    return {
      loading: true,
      mensagens: undefined,
      name: 'giulia',
      message: 'e ai parabensssss bjs'
    }
  },
  methods: {
    getMensagens () {
      this.axios
        .get('https://casamento-api-gg.herokuapp.com/api/mensagens')
        .then(response => {
          this.mensagens = response.data
          this.loading = false
        })
    }
  },
  created () {
    this.getMensagens()
  }
}
</script>

<style scoped>
.mural {
  background-color: var(--bordo);
  padding: 4rem;
}

.mural__loading {
  color: var(--branco);
}

.mural__h1 {
  color: var(--branco);
  font-size: 2rem;
  margin: 0 0 .75rem 0;
}

.mural__board {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.mural__h3 {
  margin: .5rem 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mural__postit {
  border-radius: 0.25rem;
  font-size: 1rem;
  min-height: 150px;
  padding: 1rem;
  text-transform: lowercase;
}

.mural__postit:nth-child(odd) {
  background-color: var(--branco);
}

.mural__postit:nth-child(even) {
  background-color: var(--rosa);
}

@media (max-width: 991px) {
  .mural {
    padding: 3rem;
  }

  .mural__board {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .mural__board {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
