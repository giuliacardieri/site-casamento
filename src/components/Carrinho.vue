<template>
  <section class="carrinho">
    <div class="container">
      <h2>Items</h2>
      <div class="carrinho__container">
        <div v-for="item in presentes" :key="item.nome" class="carrinho__item">
          <img v-if="item.foto"
            class="carrinho__foto"
            :src="require('@/assets/images/presentes/' + item.foto)"
            :alt="item.nome"
          />
          <h3 class="carrinho__nome">{{ item.nome }}</h3>
          <p class="carrinho__valor">{{ item.valor }}</p>
          <p class="carrinho__categoria">🔖 {{ item.categoria }}</p>
          <button @click="chooseItem(item)">Escolher esse</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import presentesJSON from '@/assets/data/presentes.json'
export default {
  name: 'Carrinho',
  data: function () {
    return {
      presentes: [],
      activeItem: undefined
    }
  },
  methods: {
    chooseItem (item) {
      this.activeItem = item
      this.$emit('updatedItem', item)
    }
  },
  mounted () {
    this.presentes = presentesJSON.sort((a, b) => {
      return a.nome.localeCompare(b.nome)
    })
  }
}
</script>

<style scoped>
.carrinho {
  background-color: var(--bordo);
  box-sizing: border-box;
  color: var(--branco);
  padding: 4rem;
}

.carrinho__container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.carrinho__item {
  border-radius: 10px;
  color: var(--preto);
  padding: 1rem;
}

.carrinho__item:nth-child(odd) {
  background-color: var(--branco);
}

.carrinho__item:nth-child(even) {
  background-color: var(--rosa);
}

.carrinho__foto {
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 100%;

}

.carrinho__nome {
  margin: 0 0 .5rem 0;
}

.carrinho__valor {
  font-size: 1.25rem;
  font-weight: bold;
}

.carrinho__categoria {
  align-items: center;
  border: 1px dashed var(--bordo);
  border-radius: 10px;
  color: var(--bordo);
  display: flex;
  font-size: 0.8rem;
  line-height: 1;
  margin: 0.5rem 0 1rem;
  padding: .5rem .5rem .25rem;
  width: max-content;
}

@media (max-width: 991px) {
  .carrinho {
    padding: 3rem;
  }

  .carrinho__container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .countdown {
    padding: 2rem;
  }

  .countdown__h2 {
    font-size: 2rem;
  }
}
</style>
