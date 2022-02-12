<template>
  <div class="input-group">
    <label class="input-group__label"
      :for="name"
    >
      {{ label }}
    </label>
    <input class="input-group__input"
      type="text"
      :id="name"
      :name="name"
      v-model="value"
      required
      @input="emitData"
    />
    <p :class="[this.value.length >= this.maxLength ? 'input-group__error--visible' : '', 'input-group__error']">
      O nome é muito grande. Pode diminuir um pouco?
    </p>
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    label: String,
    name: String,
    maxLength: Number,
    reset: Boolean
  },
  watch: {
    reset () {
      this.value = ''
    }
  },
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    emitData () {
      if (this.value.length && this.value.length >= this.maxLength) {
        this.$emit('updatedField', {
          name: this.name,
          value: ''
        })
      } else if (this.value.length) {
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

.input-group__error {
  color: var(--bordo);
  display: none;
}

.input-group__error--visible {
  display: block;
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
