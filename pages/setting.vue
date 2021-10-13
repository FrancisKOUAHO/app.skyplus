<template>
  <div class="clouds">
    <section id="my-cloud">
      <header>
        <div>
          Mon compte
        </div>
      </header>
      <form class="form">
        <label>
          <input type="text" name="fname" value="Email">
        </label>

        <label>
          <input type="text" name="lname" value="mot de passe">
        </label>

      </form>

      <footer>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "setting",
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #cf2d59;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=text]:focus {
  border: 3px solid #cf2d59;
}

</style>
