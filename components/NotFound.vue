<template>
  <div id="error">
    <div class="content h-100">
      <div class="title">
        <h1><span class="hashtag">#</span><span>notfound</span></h1>
      </div>
      <div class="mt-5">
        <h2>{{ from }}</h2>
      </div>
      <div class="mt-5">
        <nuxt-link to="/">back home</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notfound",
  props: ["from"],
};
</script>

<style scoped>
h1 {
  font-size: 4em;
}
#error {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 50rem;
  text-align: center;
}
#error .btn {
  padding: 0.8rem 4rem;
}
</style>
