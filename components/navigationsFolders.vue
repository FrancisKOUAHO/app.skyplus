<template>
  <nav id="sidebar">
    <header>
      <div class="user-status">6 jours d'essai restant</div>
      <button>
        <i class="las la-bell"></i>
        <span>5</span>
      </button>
      <div class="user-logo">
        <img src="/user-logo-2.png" alt="">
      </div>
    </header>
    <section class="folders">
      <header>
        <h3>Dossiers</h3>
      </header>
      <div class="folder">
        <header>
          <i class="fas fa-folder"></i>
          <h5 v-if="completed">à télécharger</h5>
          <h5 v-else>En cours...</h5>
          <p>17h</p>
        </header>
        <footer>
          <button class="button" v-if="completed" @click="downloadExport">
            <div class="icon">
              <svg viewBox="0 0 14 15">
                <line x1="5" y1="13" x2="5" y2="1"></line>
                <polyline id="tick" points="1 9.5 5 13.5 13 5.5"></polyline>
                <polyline id="normal" points="1 9.5 5 13.5 9 9.5"></polyline>
              </svg>
              <div>
                <svg viewBox="0 0 24 24"></svg>
              </div>
            </div>
            <ul>
              <li>&#68;ownload</li>
              <li>Waiting</li>
              <li>Open file</li>
            </ul>
          </button>
        </footer>
      </div>
    </section>
    <section id="smart-view">
      <img src="/folder-open-solid.svg" alt="">
      <h2>Essayez Smart Backup maintenant !</h2>
      <p>Ne vous inquiétez plus de perdre des fichiers</p>
      <button>Commencez</button>
    </section>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "navigationsFolders",
  data() {
    return {
      completed: true,
    };
  },
  methods: {
    downloadExport() {
      console.log('downloadExport')
    }
  },

  mounted() {
    this.downloadExport()
  }
}
</script>

<style scoped>
.button {
  --background: #cf2d59;
  --text: #fff;
  --icon: #fff;
  --icon-success: #16BF78;
  display: flex;
  outline: none;
  border: 0;
  padding: 0 22px 0 16px;
  min-width: 147px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 9px;
  background: var(--background);
  transition: transform 0.2s;
  margin-left: 3rem;
}

.button:active {
  transform: scale(0.95);
}

.button ul {
  margin: 0;
  padding: 13px 0;
  list-style: none;
  text-align: center;
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  color: var(--text);
}

.button ul li:not(:first-child) {
  top: var(--t, 13px);
  left: 0;
  position: absolute;
}

.button ul li:nth-child(2) {
  --t: 64px;
}

.button ul li:nth-child(3) {
  --t: 115px;
}

.button .icon {
  width: 24px;
  height: 24px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin: 14px 10px 0 0;
}

.button .icon svg {
  width: var(--w, 14px);
  height: var(--h, 15px);
  display: block;
  fill: none;
  stroke: var(--s, var(--icon));
  stroke-width: var(--sw, 2);
  stroke-linejoin: round;
  stroke-linecap: round;
}

.button .icon > svg,
.button .icon div {
  left: var(--l, 7px);
  top: var(--t, 2px);
  position: absolute;
}

.button .icon > svg polyline,
.button .icon > svg line {
  stroke-dasharray: var(--a, 12px);
  stroke-dashoffset: var(--o, 0);
  stroke: var(--s, var(--icon));
  transition: stroke-dashoffset var(--d, 0.15s), stroke 0.4s;
}

.button .icon > svg polyline {
  --d: .25s;
  --a: 17px;
  --o: 5.5px;
}

.button .icon div {
  --w: 24px;
  --h: 24px;
  --l: 0;
  --t: 8px;
  --sw: 1.5;
}

.button.loading ul {
  -webkit-animation: text 1750ms linear forwards 100ms;
  animation: text 1750ms linear forwards 100ms;
}

.button.loading.complete .icon svg line {
  --o: 12px;
}

.button.loading.complete .icon svg polyline {
  --o: 0;
  --s: #16BF78;
}

@-webkit-keyframes text {
  18%, 82% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(-200%);
  }
}

@keyframes text {
  18%, 82% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(-200%);
  }
}

</style>
