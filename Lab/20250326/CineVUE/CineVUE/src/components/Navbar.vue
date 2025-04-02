<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
nav li {
  list-style-type: none;
}

nav li > a {
  color: var(--black);
}

a:link {
  text-decoration: none;
  font-size: 20px;
}

a:hover {
  font-weight: bold;
  color: var(--primary);
}
</style>

<template>
        <nav>
            <ul>
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/about">Informazioni</RouterLink></li>
              <li><RouterLink to="/contacts">Contatti</RouterLink></li>
              <li><RouterLink to="/news">Novità</RouterLink></li>
              <li><RouterLink to="/who">Chi siamo</RouterLink></li>
            </ul>
        </nav>
</template>