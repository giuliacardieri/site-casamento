<template>
  <section class="map">
    <div class="container">
      <div v-if="heading || end" class="map__text">
        <h2 class="map__h2">{{ heading }}</h2>
        <p class="map__p">{{ end }}</p>
      </div>
    </div>
    <GmapMap class="map__content"
      :center="center"
      :zoom="zoom"
    >
      <GmapMarker title="Mapa"
        :key="index" v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
export default {
  props: {
    lat: String,
    lng: String,
    end: String,
    heading: String,
    zoom: Number
  },
  data () {
    return {
      map: undefined,
      center: {
        lat: undefined,
        lng: undefined
      },
      markers: []
    }
  },
  methods: {
    addMarker: function () {
      const marker = {
        lat: this.center.lat,
        lng: this.center.lng
      }
      this.markers.push({ position: marker })
    },
    initMap: function () {
      if (this.lat && this.lng) {
        this.center.lat = this.lat * 1
        this.center.lng = this.lng * 1
      }

      this.addMarker()
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped>
.map {
  background-color: var(--bordo);
}

.map__text {
  padding: 4rem;
}

.map__h2,
.map__p {
  color: var(--branco);
}

.map__content {
  min-height: 400px;
}

@media (max-width: 767px) {
  .map__text {
    padding: 3rem;
  }
}
</style>
