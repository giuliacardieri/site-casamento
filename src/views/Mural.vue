<template>
  <main>
    <Hero title="Mural de Mensagens"
      image="mural-mensagens"
    />
    <VSection>
      <h2>Que tal deixar uma mensagem pra gente? 📬</h2>
      <p>Fale um oi! Ajude a gente a ficar ainda mais animados para dia 9 de Julho!!</p>
      <MensagensForm @submittedContent="updateMural" />
    </VSection>
    <Mensagens :update="update" />
    <CountdownSection />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Mensagens from '@/components/Mensagens.vue'
import MensagensForm from '@/components/MensagensForm.vue'
import VSection from '@/components/VSection.vue'
import CountdownSection from '@/components/CountdownSection.vue'

export default {
  name: 'Mural',
  components: {
    Hero,
    Mensagens,
    MensagensForm,
    VSection,
    CountdownSection
  },
  data: function () {
    return {
      update: false
    }
  },
  methods: {
    updateMural () {
      this.update = true
    }
  }
}
</script>
