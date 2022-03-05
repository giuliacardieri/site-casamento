<template>
  <main>
    <Hero title="Giulia &amp; Gabriel"
      image="hero-home"
      hasDates
    />
    <VSection>
      <h2>Oiiiii! Bem-vindos ao site do nosso casamento! 👋</h2>
      <p>Estamos muito felizes de comemorar esse dia tão especial com vocês, nossa família e amigos!</p>
      <p>Nesse site vamos compartilhar mais sobre o grande dia, mais para frente vamos adicionar a lista de presentes e você poderá confirmar sua presença.</p>
      <p>Vamos começar?</p>
      <ol>
        <li>Que tal <router-link to="/a-festa">saber mais sobre a festa</router-link> para planejar seu look?</li>
        <li>Enquanto o grande dia não chega, que tal <router-link to="/mural-de-mensagens">deixar uma mensagem</router-link> animada no nosso mural?</li>
        <li>Se você não é de sorocaba, recomendamos dar uma olhada no <router-link to="/guia-de-sorocaba">guia de sorocabano</router-link> da Giulia e do Gabriel</li>
      </ol>
      <p>Esperamos vocês dia 9 de julho!</p>
      <p>Um abraço,</p>
      <h3 class="h3--jenna">Giulia &amp; Gabriel</h3>
    </VSection>
    <CountdownSection />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import VSection from '@/components/VSection.vue'
import CountdownSection from '@/components/CountdownSection.vue'

export default {
  name: 'Home',
  metaInfo () {
    return {
      title: 'Casamento Giulia e Gabriel',
      meta: [
        {
          name: 'name',
          content: 'Casamento Giulia e Gabriel'
        }
      ]
    }
  },
  components: {
    Hero,
    VSection,
    CountdownSection
  }
}
</script>
