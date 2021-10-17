<template>
  <div class="clouds">
    <div class="more-memory">
      <img src="/storage-dashboard-exploration-1.png" alt=""/>
      <h3>Comment ça marche ?</h3>
      <p>In addition to our automtic backup feature, you can experience integration with other well-known storage
        sites or application.<br/>Only that ? Oh no, there are many more.</p>
      <button>Mise à niveau immédiate</button>
    </div>

    <h4 class="title position">Les differents application proposé par Skyplus</h4>

    <div class="container">
      <nuxt-link v-for="(application, index) in applications" :to="{name: application.name}"  class="card1" href="#" :key="index">
        <h5 class="title">{{ application.title }}</h5>
        <p class="small description">{{ application.description }}</p>
        <div class="go-corner" href="#">
          <div class="go-arrow">
            →
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Accueil",
  data() {
    return {
      applications : [
        {
          "name": "extractDataProfileLinkedIn",
          "title": 'Données disponibles dans les profils LinkedIn',
          "description": "Récupérez toutes les données disponibles dans les profils LinkedIn, y compris les e-mails !"
        },
        {
          "name": "connectProfilMoreMessageLinkedin",
          "title": "Suivi automatique + message sur LinkedIn",
          "description": "Suivez automatiquement une liste de profils + message sur LinkedIn."
        },
      ]
    };
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

h5.title {
  color: black !important;
  font-size: 11px;
  line-height: 24px;
  margin-bottom: 4px;
}

h4.title {
  color: black !important;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
}

p.description{
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: black !important;
}

.position{
  margin-top: 3rem;
}

.small {
  font-size: 14px;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #CD3D73;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #CD3D73;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: ghostwhite !important;
}

.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: ghostwhite !important;
}

.card1:hover h5 {
  transition: all 0.3s ease-out;
  color: ghostwhite !important;
}

</style>
