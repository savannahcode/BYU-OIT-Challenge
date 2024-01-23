<script>

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
  <div id="movieDisplay">

  </div>
  </main>
  </div>
</template>
