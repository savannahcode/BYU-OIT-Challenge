<script>
import axios from 'axios';

export default {
  data() {
    return {
      cleanMovies: [],
    };
  },
  methods: {
    async getCleanMovieList() {
      try {
        const response = await axios.get("http://localhost:7700/movies");
        this.cleanMovies = response.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.getCleanMovieList();
  },
};
</script>

<template>
  <div id="wrapper" class="flex flex-col">
    <header class="flex flex-row m-5 gap-5">
    <a href="https://www.savcode.co/"><img src="/images/SAVWhiteLogo.png" alt="sav logo" class="md:h-8 w-auto h-4"></a>
    <h1 class="text-xl font-light">Your Movie Search</h1>
    </header>

  <main class="flex flex-col items-center gap-5">
    <h1 class="text-4xl uppercase font-light">Find Your Movie.</h1>
    <div class="flex flex-row gap-3">
    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-sm" />
    <button class="btn btn-primary">Search</button>
  </div>
  <!--Movie Display below-->
  <div id="movieDisplay" class="flex flex-wrap gap-4 md:gap-12 m-3 md:m-10 justify-center">
      <div v-for="movie in cleanMovies" :key="movie.id" class="w-32 md:w-64">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" class="rounded-md w-fit mb-2">
        <p class="text-center text-md md:text-2xl uppercase">{{ movie.title }}</p>
        <p class="text-xs p-2">{{ movie.overview}}</p>
      </div>
  </div>
  </main>
  </div>
</template>
