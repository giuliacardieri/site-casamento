<template>
  <section class="mensagens-form">
    <form class="mensagens-form__form">
      <VInput label="nome"
        name="nome"
        :max-length="50"
        :reset="sentMessage"
        @updatedField="updateField"
      />
      <VTextarea label="mensagem"
        name="message"
        :max-length="150"
        :reset="sentMessage"
        @updatedField="updateField"
      />
      <p class="mensagens-form__p">Ao clicar em enviar, você concorda em deixar sua mensagem pública. Ela será adicionada no mural abaixo após uma revisão, só para evitar spam. Qualquer problema nos avise!</p>
      <button class="mensagens-form__button"
        type="submit"
        :disabled="this.name && this.message ? false : true"
        @click="submit"
      >
        enviar
      </button>
    </form>
    <p :class="[sentMessage ? 'mensagens-form__sucesso--sucesso' : '' ,'mensagens-form__sucesso']">
      Oba! Sua mensagem foi enviada com succeso, e em breve estará no mural! 😁
    </p>
  </section>
</template>

<script>
import VInput from '@/components/form/VInput.vue'
import VTextarea from '@/components/form/VTextarea.vue'

export default {
  name: 'MensagensForm',
  components: {
    VInput,
    VTextarea
  },
  data: function () {
    return {
      sentMessage: false,
      name: '',
      message: ''
    }
  },
  methods: {
    updateField (data) {
      this.sentMessage = false
      this.$emit('submittedContent', false)
      if (data.name === 'nome') {
        this.name = data.value
      } else {
        this.message = data.value
      }
    },
    submit (e) {
      e.preventDefault()

      if (this.name && this.message) {
        this.axios
          .post('https://casamento-api-gg.herokuapp.com/api/mensagens', {
            name: this.name,
            message: this.message
          })
          .then(() => {
            this.sentMessage = true
            this.name = ''
            this.message = ''
            this.$emit('submittedContent', true)
          })
          .catch(error => (console.log(error)))
      }
    }
  }
}
</script>

<style scoped>
.mensagens-form {
  margin-top: 1rem;
  max-width: 800px;
}

.mensagens-form__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mensagens-form__sucesso {
  display: none;
  color: var(--bordo);
  font-weight: bold;
  margin-top: 1rem;
}

.mensagens-form__sucesso--sucesso {
  display: block;
}

.mensagens-form__p {
  font-size: .9rem;
  line-height: 1;
}

.mensagens-form__button {
  align-self: flex-start;
  background-color: var(--bordo);
  border: none;
  border-radius: .25rem;
  color: var(--branco);
  font-size: 1rem;
  padding: .5rem 1rem;
}

.mensagens-form__button:not(:disabled) {
  cursor: pointer;
}

.mensagens-form__button:disabled {
  opacity: .5;
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
