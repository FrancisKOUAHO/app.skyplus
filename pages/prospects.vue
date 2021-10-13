<template>
  <div class="clouds-propects clouds">
    <section id="my-cloud">
      <header>
        <div>
          <h1>Prospects</h1>
        </div>
        <div>
          <p class="listes">Toutes les listes (5)</p>
        </div>
      </header>
      <footer>
        <div class="form">
          <input id="new-player" placeholder="Player Name">
          <button type="submit" id="btn-player">Importer</button>
        </div>
        <table>
          <thead>
          <tr>
            <th>nom</th>
            <th>titre</th>
            <th>status</th>
            <th>actions</th>
            <th>tags</th>
          </tr>
          </thead>
          <tbody id="player-table">
          </tbody>
        </table>
        <div id="winner"></div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "prospects"
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;600&display=swap");
table {
  width: 100%;
  min-width: 400px;
  margin: 30px auto 0 auto;
}

h3 {
  margin: 5px;
}

img {
  border-radius: 50%;
  width: 50px;
  margin: 5px 0 0 0;
  border: 3px solid #ff9e00;
}

img:hover {
  border: 3px solid #ff6d00;
}

th {
  border: 1px solid #cf2d59;
  background-color: #ffffff;
  color: #cf2d59;
  text-transform: uppercase;
  padding: 10px;
}

tr,
td {
  border: none;
  background-color: #cf2d59;
}

#winner {
  color: #fff;
  padding: 15px;
  margin-top: 15px;
}

button {
  margin: 5px;
  padding: 12px;
  cursor: pointer;
  background-color: #cf2d59;
  color: #ffffff;
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  border-radius: 5px;
}

button:hover {
  background-color: #ffffff;
  color: #cf2d59;
  border: 1px solid #cf2d59;
}

input {
  background-color: #fff;
  padding: 12px;
  color: #cf2d59;
  border-radius: 5px;
  font-weigth: 500;
  font-size: 16px;
  border: 1px solid #cf2d59;
}

.form {
  display: flex;
  justify-content: center;
  align-content: center;
}

.clouds-propects section {
  width: 100%;
  background: white;
  height: 35rem !important;
}

.listes{
  font-size: 12px;
}
</style>
