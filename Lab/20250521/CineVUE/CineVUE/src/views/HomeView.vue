<script setup>
import Header from '../components/Header.vue'
import ReviewCard from '../components/ReviewCard.vue'
</script>

<script>
import ReviewCard from '../components/ReviewCard.vue'
export default {
    components: {
        ReviewCard
    },
    data(){
        return {
            titolo: "MommyDemi - \"Anora\"? No grazie",
            commento: "Ma davvero? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            voto: 1,
            num_like: 1200,
            num_dislike: 392
        }
    }
}
</script>

<style>
    table {
        width: 100%;
        background: transparent;
        
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        border-collapse: collapse;
    }

    th {
        background: var(--primary);
        color: var(--white);
        padding: 10px;
    }

    th:first-child {
        border-top-left-radius: 10px;
    }
    th:last-child {
        border-top-right-radius: 10px;
    }
    td {
        padding: 10px;
        text-align: center;
    }
    td.firstChild{
        background-color: var(--primary);
        color: var(--white);
        font-weight: bold;
    }
    td.rightCorner{
        border-bottom-right-radius: 10px;
    }
    td.leftCorner{
        border-bottom-left-radius: 10px;
    }
    tr:nth-child(even){
        background: var(--primary);
    }
    tr:nth-child(odd){
        background: var(--white);
    }
</style>

<template>
  <article>
    <Header/>
    <div>
      <h2>Benvenuti su questo sito!</h2>
      <p id="intro">Su <b><a href="about">Cineva</a></b> potete scrivere recensioni su serie TV e condividere i vostri pensieri con la <u>community</u>.</p>
      <hr>
    </div>

    <br>
    <h2>Recensioni in evidenza</h2>
    <ReviewCard :titolo="titolo" :commento="commento" :voto="voto" :num_like="num_like" :num_dislike="num_dislike" />
    <ReviewCard :titolo="titolo" :commento="commento" :voto="voto" :num_like="num_like" :num_dislike="num_dislike" />
  </article>
</template>
