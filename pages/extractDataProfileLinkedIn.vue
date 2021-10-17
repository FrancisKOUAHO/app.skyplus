<template>
  <div class="clouds">
    <section id="my-cloud">
      <header>
        <div>
          LinkedIn Profile Scraper
        </div>
        <div class="wrapper">
          <div class="search-input">
            <a href="" target="_blank" hidden></a>
            <input type="text" placeholder="Type to search..">
            <div class="autocom-box">
            </div>
            <div class="icon"><i class="fas fa-search"></i></div>
          </div>
        </div>
      </header>
      <div class="bar">
        <div class="percentage has-tip" role="progressbar" :aria-valuenow="`${progress}`"
             :aria-valuemin="`${progress}%`"
             aria-valuemax="100" :style="{'width': `${progress}%`}" :data-perc="`${progress}%`">
        </div>
      </div>
      <center>
        <div class="hello">
          <h5 v-if="isActive">message de statut : {{ message }}</h5>
          <h5 v-if="!isActive" style="color:#cf2d59;">message de statut : Cliquer pour commencer le scrapping</h5>
          <button-spinner
            @click.native="scrappingDataLinkedin"
            v-bind="{isLoading}"
            :disabled="isLoading"
            class="button-spinner-data"
            style="padding:1.5rem;color:#cf2d59;border-radius: 5px;border: 1px solid #cf2d59;"
          >
            Commencer
          </button-spinner>
        </div>
      </center>

      <footer>
      </footer>
    </section>
    <section id="dropbox">
      <header>
        <div>
          <i class="fab fa-dropbox"></i>
        </div>
        <i class="las la-ellipsis-v"></i>
      </header>
      <h4>Dropbox</h4>
      <footer>
        <div class="stat">
          {{ DATA }}
        </div>
      </footer>
    </section>

  </div>
</template>

<script>
import axios from "axios"
import ButtonSpinner from 'vue-button-spinner'


export default {
  name: "extractDataProfileLinkedIn",
  components: {
    ButtonSpinner
  },
  data() {
    return {
      DATA: [],
      progress: 0,
      completed: false,
      tempo: 50,
      isLoading: false,
      isActive: false,
      message: ""
    };
  },
  methods: {
    async scrappingDataLinkedin() {
      this.isActive = true
      this.isLoading = true
      await axios.get('http://localhost:7000/extract/extract-data-profile-linkedin')
        .then((response) => {
          this.DATA = response.data
          this.message = response.data.message
          this.timer(this.tempo)
          this.isActive = false
          this.isLoading = false
        }).catch((e) => {
          return `Error ${e}`
        })
    },
    beforeCreate() {
      this.scrappingDataLinkedin()
    },
    timer: function (tempo) {
      let vm = this;
      let setIntervalRef = setInterval(function () {
        vm.progress++;
        if (vm.progress === 100) {
          clearInterval(setIntervalRef);
          vm.completed = true;
        }
      }, tempo);
    },
    restart: function () {
      this.completed = false;
      this.progress = 0;
      this.timer(this.tempo);
    }
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  width: 94%;
  height: 1em;
  border-radius: 0.5em;
  position: relative;
  background: #f2f2f2;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  margin: 1rem 1rem 1rem 4%;
}

.bar .percentage {
  position: relative;
  font-size: 1em;
  background: #cf2d59;
  height: 1em;
  border-radius: 0.5em
}

.has-tip:before,
.has-tip:after {
  content: "";
  position: absolute;
}

.has-tip:before {
  bottom: -10px;
  right: -5px;
  border: 5px solid;
  border-color: transparent transparent #cf2d59 transparent;
  transition: opacity 0.1s;
}

button-spinner.barre-loading {
  position: relative;
  padding: 1rem;
  background-color: #cf2d59;
  color: #ffffff;
  border-radius: 5px;
  height: 3rem;
  left: 21rem;
  top: 2rem;

}


.has-tip:after {
  content: attr(data-perc);
  bottom: 0;
  right: 0;
  white-space: nowrap;
  padding: 0.6em 1em;
  border-radius: 2em;
  line-height: 1;
  color: #fff;
  background: #cf2d59;
  transform: translateX(50%) translateY(100%);
  transition: transform 0.2s, opacity 0.1s;
}

.has-tip:hover:before,
.has-tip.active:before {
  opacity: 1;
}

.has-tip:hover:after,
.has-tip.active:after {
  opacity: 1;
  transform: translateX(50%) translateY(100%) translateY(10px);
}

::selection {
  color: #fff;
  background: #664AFF;
}

.wrapper .search-input {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
}

.search-input input {
  height: 43px;
  padding: 1px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

.search-input.active input {
  border-radius: 5px 5px 0 0;
}

.search-input .autocom-box {
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}

.search-input.active .autocom-box {
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
}

.autocom-box li {
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}

.search-input.active .autocom-box li {
  display: block;
}

.autocom-box li:hover {
  background: #efefef;
}

.search-input .icon {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  color: #644bff;
  cursor: pointer;
}

.vue-btn:hover {
  background: #cf2d59;
  color: #ffffff !important;
}


</style>


