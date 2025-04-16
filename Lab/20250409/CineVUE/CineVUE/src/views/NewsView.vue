<script setup>
import Header from '../components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
    .newsCard {
        background: var(--white);
        padding: 15px;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 40px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    }
</style>

<template>
    <body>
        <Header/>

        <div class="newsCard">
            <h2>The Substance: Mikey Madison è la vera Elizabeth di Demi Moore</h2>
            <h4>4 marzo 2025</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <hr/>

        <div class="newsCard">
            <h2>Wicked: migliori costumi per l'Academy</h2>
            <h4>2 marzo 2025</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <hr/><hr/>

        <h1>News meno recenti</h1>

        <div class="newsCard">
            <h2>Addio Shannen Doherty</h2>
            <h4>15 Luglio 2024</h4>
            <p>Un elefante si dondolava sopra il filo di una ragnatela e ritenendo la cosa interessante fece salire un altro elefante.</p>
        </div>

    </body>
</template>