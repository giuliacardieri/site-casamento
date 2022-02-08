<template>
  <div class="input-group">
    <label class="input-group__label"
      :for="name"
    >
      {{ label }}
    </label>
    <textarea class="input-group__input"
      type="text"
      :id="name"
      :name="name"
      v-model="value"
      required
      @input="emitData"
    />
  </div>
</template>

<script>
export default {
  name: 'VTextarea',
  props: {
    label: String,
    name: String,
    maxLength: Number
  },
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    emitData (data) {
      if (this.value.length && this.value.length < this.maxLength) {
        this.$emit('updatedField', {
          name: this.name,
          value: this.value
        })
      }
    }
  }
}
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
}

.input-group__label {
  font-size: 1rem;
}

.input-group__input {
  background-color: transparent;
  border: 1px solid var(--preto);
  border-radius: .25rem;
  font-size: 1rem;
}

@media (max-width: 991px) {
  .mural {
    padding: 3rem;
  }

  .mural__board {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .mural__board {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
