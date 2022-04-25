<template>
  <section class="form-wrapper">
    <form class="form">
      <VInput label="Nome"
        name="nome"
        :max-length="50"
        :reset="sentMessage"
        @updatedField="updateField"
      />
      <VTextarea label="Mensagem"
        name="message"
        :max-length="150"
        :reset="sentMessage"
        @updatedField="updateField"
      />
      <p v-if="isMural" class="form__p">
        Ao clicar em enviar, você concorda em deixar sua mensagem pública. Após uma revisão, adicionaremos a mensagem no mural. Qualquer problema nos avise!
      </p>
      <button type="submit"
        :disabled="this.name && this.message ? false : true"
        @click="submit"
      >
        Enviar
      </button>
    </form>
    <p :class="[sentMessage ? 'form__sucesso--sucesso' : '' ,'form__sucesso']">
      Oba! Sua mensagem foi enviada com succeso! 😁
    </p>
  </section>
</template>

<script>
import VInput from '@/components/form/VInput.vue'
import VTextarea from '@/components/form/VTextarea.vue'

export default {
  name: 'MensagensForm',
  prop: ['endpoint', 'isMural'],
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
          .post(this.endpoint, {
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
.form-wrapper {
  margin-top: 1rem;
  max-width: 800px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form__sucesso {
  display: none;
  color: var(--bordo);
  font-weight: bold;
  margin-top: 1rem;
}

.form__sucesso--sucesso {
  display: block;
}

.form__p {
  font-size: .9rem;
  line-height: 1;
}
</style>
