<template>
  <main>
    <Hero title="Guia de Sorocaba"
      image="soro-noite"
    />
    <VSection>
      <h2>Sorocaba 🌃</h2>
      <p>Na verdade, o casamento será em Votorantim. Pra quem não conhece, Sorocaba e Votorantim ficam grudadas, você praticamente não sabe quando sai de uma cidade e entra na outra. Por isso, vamos fazer o guia de Sorocaba pois é onde conhecemos mais e recomendamos vocês se hospedarem (nada contra Votorantim, só que Sorocaba é bem maior).</p>
      <p>Villa ásolo fica em votorantim, a poucos minutos da rodovia raposo tavares, do centro de votorantim, e de sorocaba. Fica numa estrada normal, não é de terra nem de difícil acesso.</p>
      <p>está em dúvida de onde ficar em sorocaba? dê uma olhada no nosso <router-link to="/guia-de-sorocaba">guia de sorocaba</router-link>!</p>

    </VSection>
    <Map lat="-23.505699037692782"
      lng="-47.46603097635713"
      :zoom="12"
    />
    <VSection isPink>
      <h2>Como chegar? 📍</h2>
      <p>Se você vem de São Paulo e de carro, recomendamos vir pela Rodovia Castello Branco, a Raposo Tavares demora bem mais e a estrada não é tão boa.</p>
      <p>Se você vem de São Paulo e não tem carro, recomendamos vir de Viação Cometa. Costuma ter ônibus saindo a cada 15 min da Barra Funda. O último ônibus Sorocaba-SP é próximo da meia-noite. Não recomendamos deixar para voltar após a festa.</p>
      <p>O aeroporto mais próximo é o de Viracopos em Campinas. Fica a 50-60 minutos de Sorocaba/Votorantim.</p>
      <p>Aeroporto de congonhas em SP também não é tão longe. Fica a 1:20 de Sorocaba/Votorantim dependendo do trânsito.</p>
    </VSection>
    <VSection>
      <h2>Como posso me locomover? 🚗</h2>
      <p>Recomendamos vir de uber ou <a href="http://sorotaxi.com.br/" target="_blank">sorotaxi</a></p>
      <p>teremos estacionamento caso você decida vir dirigindo, só se lembre que teremos bebidas alcóolicas na festa.</p>
    </VSection>
    <VSection isPink>
      <h2>Onde ficar? 🏨</h2>
      <p>Sorocaba tem vários hotéis. Recomendamos ficar na região do Campolim, próximo ao shopping Iguatemi Esplanada. Essa região tem bastante opções de alimentação e hotéis, além de ser pertinho do local da festa.</p>
      <p>Conseguimos um descontinho em dois hoteis na região do Campolim/Shopping Iguatemi. Que fica a 10 minutos de carro do evento.</p>
    </VSection>
    <VSection>
      <h2>Onde comer? </h2>
      <p>Pizza 🍕: Lady Olive (napolitana, delivery e local), Zero39 (napolitana, delivery), Micheluccio (normal, ultra recheada, preço mais salgado, delivery e local), Dom Momaia (normal, bem recheada, preço ok, delivery).</p>
      <p>Churrasco 🥩: Villa Nativa, Nativa's Grill.</p>
      <p>Italiana 🍝: Cucina del Capo, Tutto Benne.</p>
      <p>Hamburger 🍔: Primatas (hamburger alto e ao ponto, delivery e local), Alemão Burger (hamburger smash, delivery e local), Oca Burger (hamburger nem tão alto nem tão smash, local e delivery).</p>
      <p>Famosos 🤩: Padaria Real, Outback, outras opções na praça de alimentação do shopping Iguatemi Esplanada.</p>
      <p>Salgadinhos 🥨: Padaria Real (muito bom), Supre Salgados (muito bom com mais opções).</p>
    </VSection>
    <CountdownSection />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import VSection from '@/components/VSection.vue'
import CountdownSection from '@/components/CountdownSection.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Guia',
  components: {
    Hero,
    VSection,
    CountdownSection,
    Map
  }
}
</script>
