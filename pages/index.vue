<template>
  <section class="container">

    <div class="block">
      <div class="blockTitle">Reset Styles Eric Meyer’s CSS Reset + Custom</div>
      <div class="link">go to <a href="/css">/css</a></div>
    </div>

    <div class="block">
      <div class="blockTitle">heading</div>
      <div class="blockContent">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
      </div>
    </div>

    <div class="block">
      <div class="blockTitle">forms</div>
      <div class="blockContent">
        <input type="text">
        <input type="checkbox">
        <input type="radio">
        <textarea name="" cols="30" rows="10"></textarea>
      </div>
    </div>

    <div class="block">
      <div class="blockTitle">list</div>
      <div class="blockContent">
        <ul>
          <li>ul li</li>
          <li>ul li</li>
        </ul>

        <ol>
          <li>ol li</li>
          <li>ol li</li>
        </ol>

        <dl>
          <dt>dl dt</dt>
          <dd>dl dd</dd>
        </dl>
      </div>
    </div>

    <div class="block">
      <div class="blockTitle">link</div>
      <div class="blockContent">
        <a href="/">Link</a>
      </div>
    </div>

    <div class="block">
      <div class="blockTitle">template</div>
      <div class="blockContent">
        <div>template</div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo,
    },
  }
</script>


<style lang="scss">
  .block {
    margin: 16px auto;
    max-width: 980px;
    padding: 24px;
  }

  .blockTitle {
    font-size: 2rem;
    font-weight: bold;
    margin: 8px 0;
  }

  .blockContent {
    border: 1px solid #aaa;
    padding: 16px;
  }

  .content {
    margin: 16px 0;
  }

  .link {
    a {
      text-decoration: underline;
    }
  }
</style>
