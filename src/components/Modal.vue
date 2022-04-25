<template>
  <aside v-if="isVisible && item" class="modal">
    <div class="modal__container">
      <button @click="closeModal">Fechar</button>
      <div class="modal__foto-wrapper">
        <img v-if="item.foto"
          class="modal__foto"
          :src="require('@/assets/images/presentes/' + item.foto)"
          :alt="item.nome"
        />
      </div>
      <h2 class="modal__title">Você escolheu
        <span class="modal__item">{{ item.nome }} - {{ item.valor }}</span>
      </h2>
      <p>Para presentear a Giulia e o Gabriel, por favor, faça um pix para:</p>
      <p class="modal__pix">Celular - 15997551715</p>
      <p>Deixe uma mensagem no seu PIX, ou se preferir escreva a mensagem abaixo:</p>
      <Form isMural="false"
        endpoint="https://casamento-api-gg.herokuapp.com/api/presentes"
      />
    </div>
  </aside>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  name: 'Modal',
  props: ['visible', 'item'],
  components: {
    Form
  },
  watch: {
    item () {
      if (this.item) {
        this.isVisible = true
      }
    }
  },
  data: function () {
    return {
      isVisible: this.visible
    }
  },
  methods: {
    closeModal () {
      this.isVisible = false
    }
  }
}
</script>

<style scoped>
.modal {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
}

.modal__container {
  background-color: var(--branco);
  border-radius: 10px;
  max-width: 60vw;
  padding: 2rem;
}

.modal__foto-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.modal__title {
  margin: 0;
}

.modal__item {
  color: var(--bordo);
}

.modal__foto {
  border-radius: 10px;
  max-height: 200px;
}

.modal__pix {
  border: 3px dashed var(--bordo);
  color: var(--bordo);
  font-size: 2rem;
  margin: 1.5rem;
  padding: 1rem 1rem .25rem;
  text-align: center;
}
</style>
