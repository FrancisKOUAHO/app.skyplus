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
          <h5>Rapport</h5>
          <p>17h</p>
        </header>
        <footer>
          <p>271 files</p>
          <div>
            <span>
              <img src="/user-logo-2.png">
            </span>
            <span>
              <img src="/user-logo-2.png">
            </span>
            <span>
              <img src="/user-logo-2.png">
            </span>
            <span>9</span>
          </div>
        </footer>
      </div>
    </section>
    <section id="smart-view">
      <img src="/folder-open-solid.svg">
      <h2>Essayez Smart Backup maintenant !</h2>
      <p>Ne vous inquiétez plus de perdre des fichiers</p>
      <button>Commencez</button>
    </section>
  </nav>
</template>

<script>
export default {
  name: "navigationsFolders"
}
</script>

<style scoped>

</style>
