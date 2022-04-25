<template>
  <aside class="main-nav__wrapper">
    <button class="main-nav__button main-nav__button--open" @click="openMenu()">
      abrir menu
    </button>
    <nav :class="[menuIsOpen ? 'main-nav--open' : '', 'main-nav']">
      <button class="main-nav__button" @click="closeMenu()">fechar menu</button>
      <h2 class="main-nav__h2">Menu</h2>
      <ul class="main-nav__list">
        <li class="main-nav__item">
          <router-link to="/" class="main-nav__link link-no-inherit">
            Home
          </router-link>
        </li>
        <li class="main-nav__item">
          <router-link to="a-festa" class="main-nav__link link-no-inherit">
            A Festa
          </router-link>
        </li>
        <li class="main-nav__item">
          <router-link
            to="guia-de-sorocaba"
            class="main-nav__link link-no-inherit"
          >
            Guia de Sorocaba
          </router-link>
        </li>
        <li class="main-nav__item">
          <router-link
            to="lista-de-presentes"
            class="main-nav__link link-no-inherit"
          >
            Lista de Presentes
          </router-link>
        </li>
        <li class="main-nav__item">
          <router-link
            to="mural-de-mensagens"
            class="main-nav__link link-no-inherit"
          >
            Mural de Mensagens
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "MainNav",
  watch: {
    $route() {
      this.menuIsOpen = false;
    },
  },
  data: function () {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.menuIsOpen = true;
    },
    closeMenu() {
      this.menuIsOpen = false;
    },
  },
};
</script>

<style scoped>
.main-nav {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.main-nav__h2 {
  font-size: 2rem;
}

.main-nav__button {
  background-color: transparent;
  border: none;
  border-bottom: 1px dotted var(--preto);
  font-size: 1rem;
  margin: 0 0 2rem auto;
  text-align: right;
  width: fit-content;
}

.main-nav__list {
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.main-nav__item {
  list-style: none;
}

.main-nav__link {
  color: var(--bordo);
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem;
  padding: 0.25rem 0.25rem 0;
  text-decoration: none;
  transition: background-color 0.5s ease-in-out;
}

.main-nav__link:active,
.main-nav__link:focus,
.main-nav__link:hover {
  background-color: var(--bordo);
  color: var(--branco);
}

@media (min-width: 768px) {
  .main-nav__h2 {
    display: none;
  }

  .main-nav__button {
    display: none;
  }
}

@media (max-width: 767px) {
  .main-nav__wrapper {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .main-nav {
    background-color: var(--rosa);
    display: none;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3rem;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .main-nav--open {
    display: flex;
  }

  .main-nav__list {
    flex-direction: column;
    width: 100%;
  }

  .main-nav__item {
    margin: 0.5rem 0;
  }

  .main-nav__link {
    border-bottom: 1px dotted var(--bordo);
    font-size: 1.5rem;
  }

  .main-nav__button--open {
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 2;
  }
}
</style>
