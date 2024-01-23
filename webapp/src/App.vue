<script>
import fetch from 'node-fetch'

const url = 'https://api.themoviedb.org/3/configuration';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "./.env.MOVIE_AUTH_CODE"
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
</script>

<template>
  <header class="text-red-700">
    <h1 class="text-red-700">Vue 3 + Vite + Tailwind CSS</h1>
  </header>

  <main>
  </main>
</template>
