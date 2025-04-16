<script setup>
import Header from '../components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
#titoloIndice {
    background: var(--primary);
    font-weight: bold;
    color: var(--white);
    font-size: 20px;
    padding: 15px 0px 15px 45px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: 0px;
}
#indice {
    list-style: none;
    background-color: var(--secondary);
    margin-top: 0px;
    padding: 0px 0px 20px 30px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
#indice li {
  background: var(--white);
  margin-right: 30px;
  padding-top: 10px;
  padding-left: 15px;
}
#indice li>a{
  color: var(--primary)
}
#indice li:last-child{
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
</style>

<template>
  <main>
    <body>
      <Header/>
        <h1>Cosa è Cineva?</h1>
        <div>
          <div id="titoloIndice">Indice</div>
          <ul id="indice">
            <li><a href="">Informazioni sul sito</a></li>
            <li><a href="">A chi è rivolto il sito?</a></li>
            <li><a href="">Quanto costa?</a></li>
          </ul>
        </div>
        <h3>Informazioni sul sito</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <b>incididunt</b> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <b>exercitation</b> ullamco laboris nisi ut aliquip ex ea commodo consequat. <i>Duis aute irure</i> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <hr/>
        <h3>A chi è rivolto il sito?</h3>
        <p>A te, sì, proprio a te, che sei veramente giovane, che vuoi un sito di <b><i>nuova</i></b> generazione!</p>
    </body>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
