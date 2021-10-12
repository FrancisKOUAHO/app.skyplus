<template>
  <section id="my-cloud">
    <header>
      <div>
        Mon compte
      </div>
    </header>
    <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="fname" value="John">
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lname" value="Doe">
    </form>

    <footer>
    </footer>
  </section>
</template>

<script>
export default {
  name: "setting",
}
</script>

<style scoped>
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=text]:focus {
  border: 3px solid #555;
}

</style>
