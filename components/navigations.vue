<template>
  <nav id="nav">
    <div style="position: absolute; margin-top: 3rem">
        <img src="/logo.png" alt="logo" width="50" class="logo">
    </div>
    <div style="position: absolute; margin-top: 24rem">
      <div>
        <i class="las la-home"></i>
      </div>
      <div>
        <i class="las la-users"></i>
      </div>
      <div>
        <i class="las la-rocket"></i>
      </div>
      <div>
        <i class="las la-comment-alt"></i>
      </div>
      <div>
        <i class="las la-cog"></i>
      </div>
      <div>
        <i class="las la-sign-out-alt"></i>
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
.logo{
  font-size: 30px;
  font-weight: 400;
  font-family: "Poppins";
  margin: 40px 0 30px 0;
}

.las:hover{
  color: #cf2d59;
}

</style>
