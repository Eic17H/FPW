<script setup>
import Header from '../components/Header.vue'
import ReviewCard from '../components/ReviewCard.vue'
</script>

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
    <ReviewCard/>
    <ReviewCard/>
  </article>
</template>
