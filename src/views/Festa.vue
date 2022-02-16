<template>
  <main>
    <Hero title="A Festa"
      image="figueira"
    />
    <VSection>
      <h2>O Local 🌳</h2>
      <p>Queriamos um local cheio de natureza, mas também não muito longe da cidade. após uma busca, encontramos a <a href="https://www.instagram.com/villaasolo/" target="_blank">villa ásolo</a>!</p>
      <p>Villa ásolo fica em votorantim, a poucos minutos da rodovia raposo tavares, do centro de votorantim, e de sorocaba. Fica numa estrada normal, não é de terra nem de difícil acesso.</p>
      <p>está em dúvida de onde ficar em sorocaba? dê uma olhada no nosso <router-link to="/guia-de-sorocaba">guia de sorocaba</router-link>!</p>
      <p>Aqui embaixo temos o endereço exato. recomendamos vir de uber ou <a href="http://sorotaxi.com.br/" target="_blank">sorotaxi</a>, mas teremos estacionamento caso você decida vir dirigindo.</p>
    </VSection>
    <Map heading="Villa Ásolo"
      lat="-23.53266994567835"
      lng="-47.447315798969534"
      end="Av. Rev. José Manoel da Conceição, 1225, Votorantim - SP"
      :zoom="16"
    />
    <VSection isPink>
      <h2>O Dia 📅</h2>
      <p>Nosso casamento será dia 9 de julho de 2022 as 15:30hrs, não se atrase!</p>
      <p>Vamos ter uma cerimônia de casamento durante o dia, e ao anoitecer teremos uma festa com jantar tema italiano (opções com carne e vegetarianas, se você segue alimentação vegana, nos avise por favor), banda, dj e muitas outras coisas legais!</p>
    </VSection>
    <VSection>
      <h2>Que roupa eu vou? 👗</h2>
      <p>com uma roupa que você se sinta a vontade, por ser uma festa esperamos que você vá com uma roupa social (ex: calça social e camisa, ou terno, vestido, ou alguma roupa que você ache que combina).</p>
      <p>dia 9 de julho costuma ficar entre 10-18 graus durante a noite em sorocaba. Por isso, traga um casaco, jaqueta ou pashmina, pois a festa será ao ar livre! mas se você é friorento não se preocupe, teremos aquecedores!</p>
      <p>ah, outra coisa, não recomendamos vir de salto fino, o local da cerimônia é de grama, e o piso do espaço é irregular.</p>
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
  name: 'Festa',
  metaInfo () {
    return {
      title: 'A Festa | Giulia e Gabriel',
      meta: [
        {
          name: 'name',
          content: 'A Festa | Giulia e Gabriel'
        }
      ]
    }
  },
  components: {
    Hero,
    VSection,
    CountdownSection,
    Map
  }
}
</script>
