<template>
  <nav id="nav">
    <div style="position: absolute; margin-top: 3rem">
      <nuxt-link :to="{name: 'accueil'}">
        <img src="/logo.png" alt="logo" width="50" class="logo">
      </nuxt-link>
    </div>
    <div style="position: absolute; margin-top: 24rem">
      <div v-for="item in items">
        <nuxt-link :to="{name: item.name}">
          <i :key="item.id" :class="[{ active : active_el === item.id}, [item.classStyle]]"
             @click="activate(item.id)"></i>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigations",
  data() {
    return {
      active_el: 0,
      items: [
        {"id": "1", "classStyle": "las la-home icon", "name": "accueil"},
        {"id": "2", "classStyle": "las la-users icon", "name": "prospects"},
        {"id": "3", "classStyle": "las la-rocket icon", "name": "compaigns"},
        {"id": "4", "classStyle": "las la-comment-alt icon", "name": "messages"},
        {"id": "5", "classStyle": "las la-cog icon", "name": "setting"},
        {"id": "6", "classStyle": "las la-sign-out-alt icon", "name": ""}
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

<style>
.logo {
  font-size: 30px;
  font-weight: 400;
  font-family: "Poppins",serif;
  margin: 40px 0 30px 0;
}

.active {
  color: #cf2d59;
}

.icon:hover {
  color: #cf2d59;
}

</style>
