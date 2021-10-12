<template>
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
            <!-- here list are inserted from javascript -->
          </div>
          <div class="icon"><i class="fas fa-search"></i></div>
        </div>
      </div>


    </header>
    <div class="bar">
        <div class="percentage has-tip"  style="width: 50%" data-perc="0%">
        </div>
    </div>
    <div>
      <button class="barre-loading">Commencer</button>
    </div>
    <footer>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Accueil"
}
</script>

<style scoped>
.bar {
  display: flex;
  margin: 1rem;
  width: 97%;
  height: 1em;
  border-radius: 0.5em;
  position: relative;
  background: #f2f2f2;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1)
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
  opacity: 0;
}

.has-tip:before {
  bottom: -10px;
  right: -5px;
  border: 5px solid;
  border-color: transparent transparent #cf2d59 transparent;
  transition: opacity 0.1s;
}

button.barre-loading{
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

::selection{
  color: #fff;
  background: #664AFF;
}

.wrapper .search-input{
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);
}

.search-input input{
  height: 43px;
 padding: 1px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
}

.search-input.active input{
  border-radius: 5px 5px 0 0;
}

.search-input .autocom-box{
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}

.search-input.active .autocom-box{
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
}

.autocom-box li{
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}

.search-input.active .autocom-box li{
  display: block;
}
.autocom-box li:hover{
  background: #efefef;
}

.search-input .icon{
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



</style>
