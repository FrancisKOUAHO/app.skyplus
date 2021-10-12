<template>
  <nav id="nav">
    <div style="position: absolute; margin-top: 3rem">
      <img src="/logo.png" alt="logo" width="50" class="logo">
    </div>
    <div style="position: absolute; margin-top: 24rem">
      <div>
        <nuxt-link to="">
          <i class="las la-home icon"></i>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="">
          <i class="las la-users icon"></i>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="">
          <i class="las la-rocket icon"></i>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="">
          <i class="las la-comment-alt icon"></i>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link :to="{name: 'setting'}">
          <i class="las la-cog icon"></i>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="">
          <i class="las la-sign-out-alt icon"></i>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigations"
}
</script>

<style>
.logo {
  font-size: 30px;
  font-weight: 400;
  font-family: "Poppins";
  margin: 40px 0 30px 0;
}

.icon:hover {
  color: #cf2d59;
}

</style>
