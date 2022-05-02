<template>
  <section class="form-wrapper">
    <form class="form">
      <VInput label="Nome*"
        name="name"
        :max-length="50"
        :reset="sentMessage"
        @updatedField="updateField"
      />
      <VInput v-if="isConfirmacao"
        label="Celular*"
        name="phone"
        :max-length="20"
        :reset="sentMessage"
        @updatedField="updateField"
      />
      <VInput v-if="isConfirmacao"
        label="Quantidade de Adultos*"
        name="adult"
        type="number"
        :reset="sentMessage"
        @updatedField="updateField"
      />
      <VInput  v-if="isConfirmacao"
        label="Quantidade de Crianças"
        name="child"
        type="number"
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
        :disabled="isDisabled"
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
  props: {
    presente: {
      type: String,
      default: ''
    },
    endpoint: {
      type: String
    },
    isMural: {
      type: Boolean,
      default: false
    },
    isConfirmacao: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VInput,
    VTextarea
  },
  data: function () {
    return {
      sentMessage: false,
      name: '',
      phone: '',
      adult: 0,
      child: 0,
      message: '',
      isDisabled: true
    }
  },
  methods: {
    checkDisabled () {
      if (this.isConfirmacao && (!this.name || !this.phone || !this.adult)) {
        return true
      }
      if (!this.isConfirmacao && (!this.name || !this.message)) {
        return true
      }
      return false
    },
    updateField (data) {
      this.sentMessage = false
      this.$emit('submittedContent', false)
      switch (data.name) {
        case 'name': { this.name = data.value; break }
        case 'phone': { this.phone = data.value; break }
        case 'adult': { this.adult = data.value; break }
        case 'child': { this.child = data.value; break }
        case 'message': { this.message = data.value; break }
      }
      this.isDisabled = this.checkDisabled()
    },
    submit (e) {
      e.preventDefault()
      if (this.isConfirmacao && this.name && this.phone && this.adult) {
        this.postData({
          name: this.name,
          phone: this.phone,
          adult: this.adult,
          child: this.child,
          message: this.message,
          willgo: true
        })
      } else if (!this.isMural && this.name && this.message) {
        this.postData({
          name: this.name,
          presente: this.presente,
          message: this.message
        })
      } else if (this.name && this.message) {
        this.postData({
          name: this.name,
          message: this.message
        })
      }
    },
    postData (data) {
      this.axios
        .post(this.endpoint, data)
        .then(() => {
          this.sentMessage = true
          this.name = ''
          this.phone = ''
          this.adult = 0
          this.child = 0
          this.message = ''
          this.$emit('submittedContent', true)
        })
        .catch(error => (console.log(error)))
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
