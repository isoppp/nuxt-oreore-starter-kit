<template>
  <section class="container">

    <h1 class="fz-20 fw-b mb-24">gridlex testing</h1>
    <h2>grid-6 > col * 3</h2>
    <div class="grid-6">
      <div class="col">col col col col col</div>
      <div class="col">col col col col col</div>
      <div class="col">col col col col col</div>
    </div>

    <h2>grid-12 > col-6_xs-12 * 2</h2>
    <div class="grid-12">
      <div class="col-6_xs-12">col col col col col</div>
      <div class="col-6_xs-12">col col col col col</div>
    </div>

    <h2>grid-3 > col * 3</h2>
    <div class="grid-3">
      <div class="col">col col col col col</div>
      <div class="col">col col col col col</div>
      <div class="col">col col col col col</div>
    </div>

    <h2>grid-3-noGutter > col * 3</h2>
    <div class="grid-3-noGutter">
      <div class="col">col col col col col</div>
      <div class="col">col col col col col</div>
      <div class="col">col col col col col</div>
    </div>

  </section>
</template>

<script>

  export default {
    components: {

    },
  }
</script>

<style lang="scss">

</style>
