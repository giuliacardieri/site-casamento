<template>
  <main>
    <Hero title='Confirme Sua Presenca' image='figueira' />
    <VSection>
      <h2>Confirmação de Presença ✅</h2>
      <p>
        O grande dia está chegando, e está na hora de você confirmar (ou não) sua presença.
      </p>
      <p>
        Se você não puder vir, entendemos. Adorariámos que você estivesse conosco, mas sabemos que viajar para Sorocaba pode não ser tão simples, ou que outros compromissos também acontecem. Esperamos te ver em breve!
      </p>
      <p>
        Se você pode vir, ficamos super felizes! Por favor preencha o formulário abaixo com seus dados e também com a quantidade de adultos e crianças que vão vir com vocês. É <strong>muito importante que você nos responda até o dia 2/6</strong> (também conhecido como aniversário da Giulia).
      </p>
    </VSection>
    <VSection isPink>
      <p>Por favor, preencha o formulário abaixo com seus dados. Indique quantos adultos/adolescentes (pessoas com 13 anos ou mais), e de crianças (0-12 anos).</p>
      <Form isConfirmacao
        endpoint="https://casamento-api-gg.herokuapp.com/api/rsvp"
      />
    </VSection>
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Form from '@/components/Form.vue'
import VSection from '@/components/VSection.vue'

export default {
  name: 'Confirmacao',
  metaInfo () {
    return {
      title: 'Confirmação de Presença | Giulia e Gabriel',
      meta: [
        {
          name: 'name',
          content: 'Confirmação de Presença | Giulia e Gabriel'
        }
      ]
    }
  },
  components: {
    Hero,
    Form,
    VSection
  }
}
</script>
