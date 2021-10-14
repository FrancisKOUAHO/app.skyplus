<template>
  <div class="clouds-propects clouds">
    <section id="my-cloud">
      <header>
        <div>
          <h1>Prospects</h1>
        </div>
        <div>
          <p class="listes">Toutes les listes (0)</p>
        </div>
      </header>
      <footer>
        <div class="form">
          <input type="file" value="Importer" id="actual-btn" hidden>
          <label for="actual-btn" class="button">Importer</label>
        </div>
        <table>
          <thead>
          <tr>
            <th>Photo</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Titre</th>
            <th>Status</th>
            <th>Tags</th>
            <th width="33%">actions</th>
          </tr>
          </thead>
          <tbody id="player-table">
          <tr>
            <td class="profile">Photo<img src=""></td>
            <td>Nom</td>
            <td>Prénom</td>
            <td>Titre</td>
            <td>Status</td>
            <td>Tags</td>
            <td>
              <i v-for="icon in icons" :key="icon.id" :class="[{ active : active_el == icon.id}, [icon.classStyle]]" @click="activate(icon.id)"></i>
            </td>
          </tr>
          </tbody>
        </table>
        <div id="winner"></div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "prospects",
  data() {
    return {
      active_el:0,
      icons: [
        {"id": "1", "classStyle": "las la-home icon"},
        {"id": "2", "classStyle": "las la-users icon"},
        {"id": "3", "classStyle": "las la-rocket icon"},
        {"id": "4", "classStyle": "las la-comment-alt icon"},
        {"id": "5", "classStyle": "las la-cog icon"},
        {"id": "6", "classStyle": "las la-sign-out-alt icon"}
      ],
    }
  },
  methods: {
    activate: function (el) {
      this.active_el = el;
    }
  },
  mounted() {
    this.activate()
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;600&display=swap");

.icon {
  width: 20%;
  color: #ffffff;
}

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
  background-color: #cf2d59;
  color: #ffffff;
  text-transform: uppercase;
  padding: 10px;
}

tr,
td {
  border: 1px solid #cf2d59;
  background-color: #ffffff;
}

#winner {
  color: #fff;
  padding: 15px;
  margin-top: 15px;
}

.button {
  margin: 5px;
  padding: 12px;
  cursor: pointer;
  background-color: #cf2d59;
  color: #ffffff;
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  border-radius: 5px;
}

.button:hover {
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

.listes {
  font-size: 12px;
}

.active {
  color: #34a853;
}

.icon:hover {
  color: #34a853;
}
</style>
