<template>
  <main>
    <Hero title="Lista de Presentes" image="presentes" />
    <VSection>
      <h2>Lista de Presentes 🎁</h2>
      <p>
        Decidimos não fazer lista de presentes em nenhum loja específica, e focar um pouco na nossa lua de mel ✈️
      </p>
      <p>Se você quiser, pode escolher um desses itens e fazer um PIX para ajudar com nossa viagem para Itália! 🇮🇹</p>
      <p>
        Lembrando que qualquer presente é bem-vindo, mas não se sinta obrigado a nos presentear. Já estamos felizes com sua presença nesse dia tão importante. 🤵👰
      </p>
    </VSection>
    <Carrinho @updatedItem="showModal" />
    <Modal :visible="modalVisible" :item="activeItem" />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Carrinho from '@/components/Carrinho.vue'
import Modal from '@/components/Modal.vue'
import VSection from '@/components/VSection.vue'

export default {
  name: 'Festa',
  metaInfo () {
    return {
      title: 'Lista de Presentes | Giulia e Gabriel',
      meta: [
        {
          name: 'name',
          content: 'Lista de Presentes | Giulia e Gabriel'
        }
      ]
    }
  },
  components: {
    Hero,
    Carrinho,
    Modal,
    VSection
  },
  data: function () {
    return {
      activeItem: undefined,
      modalVisible: false
    }
  },
  methods: {
    showModal (item) {
      this.activeItem = item
      this.modalVisible = true
    }
  }
}
</script>
