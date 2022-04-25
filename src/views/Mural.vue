<template>
  <main>
    <Hero title="Mural de Mensagens"
      image="mural-mensagens"
    />
    <VSection>
      <h2>Que tal deixar uma mensagem pra gente? 📬</h2>
      <p>Fale um oi! Ajude a gente a ficar ainda mais animados para dia 9 de Julho!!</p>
      <Form isMural="true"
        endpoint="https://casamento-api-gg.herokuapp.com/api/mensagens"
        @submittedContent="updateMural"
      />
    </VSection>
    <Mensagens :update="update" />
    <CountdownSection />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Mensagens from '@/components/Mensagens.vue'
import Form from '@/components/Form.vue'
import VSection from '@/components/VSection.vue'
import CountdownSection from '@/components/CountdownSection.vue'

export default {
  name: 'Mural',
  metaInfo () {
    return {
      title: 'Mural de Mensagens | Giulia e Gabriel',
      meta: [
        {
          name: 'name',
          content: 'Mural de Mensagens | Giulia e Gabriel'
        }
      ]
    }
  },
  components: {
    Hero,
    Mensagens,
    Form,
    VSection,
    CountdownSection
  },
  data: function () {
    return {
      update: false
    }
  },
  methods: {
    updateMural (val) {
      this.update = val
    }
  }
}
</script>
