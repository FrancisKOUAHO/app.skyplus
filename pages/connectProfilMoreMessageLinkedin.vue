<template>
  <main>
    <div class="card-container">
      <div class="card-child child-1">
        <h1>nom: Francis</h1>
        <h1>Prénom: KOUAHO</h1>
        <h1>métier: CEO Skyplus</h1>
        <h1>métier: CEO Skyplus</h1>
        <h1>métier: CEO Skyplus</h1>
        <h1>métier: CEO Skyplus</h1>
      </div>
      <div class="card-child child-3">
        <div class="col-md-4 col-12">
          <div class="billing__main__content__step row">
            <ul id="step-list">
              <li class="option active" for="participant-info" data-step="1">
                <a href="#participant-info">
                  <span class="default"><i class="fa fa-user" aria-hidden="true"></i></span>
                  <span class="done-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <p>Connectez-vous à LinkedIn</p>
                </a>
              </li>
              <li class="option" for="contact-info" data-step="2">
                <a href="#contact-info">
                  <span class="default"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  <span class="done-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <p>Lancement</p>
                </a>
              </li>
              <li class="option" for="payment-info" data-step="4">
                <a href="#payment-info">
                  <span class="default"><i class="fa fa-credit-card" aria-hidden="true"></i></span>
                  <span class="done-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <p>Suivre profil</p>
                </a>
              </li>
              <li class="option" for="congratulations" data-step="5">
                <a href="#congratulations">
                  <span class="default"><i class="fa fa-hand-peace-o" aria-hidden="true"></i></span>
                  <span class="done-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                  <p>Terminer</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-child child-2">
        <h1 class="color-white-h-p">Connectez-vous à LinkedIn</h1>
        <p class="color-white-h-p">Pour agir en votre nom, Phantombuster doit s'authentifier en tant que vous, ce qui
          nécessite votre cookie de
          session LinkedIn.</p>

        <div>
          <h1 class="color-white-h-p">Votre cookie de session LinkedIn*</h1>
          <p class="color-white-h-p">Si l'extension Phantombuster est installée, il suffit de cliquer sur le bouton
            "Connecter à LinkedIn". Le
            nom du cookie LinkedIn est "li_at".</p>
        </div>
        <div class="form-connect">
          <input v-model="text" @focus="magic_flag = true" @blur="magic_flag = false" type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
          <label for="email" class="form__label"> Collez votre cookie de session LinkedIn ici </label>
          <button v-if="magic_flag">Valider</button>
          <button v-else>Install Firefox extension</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "connectProfilMoreMessageLinkedin",
  data(){
    return{
      text : "",
      magic_flag: false
    }
  }
}
</script>

<style scoped>


.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #ffffff;
  width: 99%;
  padding: 3rem;
}

.child-1 {
  width: 65%;
}

.child-3{
  width: 16rem;
}

.card-child {
  border: 1px solid #cf2d59;
  padding: 2rem;
  background: #ffffff;
  height: auto;
}



.child-2 {
  margin-top: 2rem;
}


button {
  border: 1px solid #ffffff;
  margin-left: 21rem;
  width: 12rem;
  padding: 0.5rem;
  height: 3rem;
  background: #cf2d59;
  color: #fff;
  border-radius: 6px;
}


button:hover {
  border: 1px solid #cf2d59;
  margin-left: 21rem;
  width: 12rem;
  padding: 0.5rem;
  height: 3rem;
  background: #ffffff;
  color: #cf2d59;
  border-radius: 6px;
}


/* Styling the form*/
.form-connect {
  position: relative;
  width: 20rem;
  height: 3rem;
  margin-left: 5rem;
}

.form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #cf2d59;
  border-radius: 0.5rem;
  font-family: inherit;
  color: #cf2d59;
  outline: none;
  padding: 1.25rem;
  background: whitesmoke;
}

.form__input:hover {
  border-color: #cf2d59;
}


.form__label {
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  padding: 0 0.5rem;
  color: #cf2d59;
  cursor: text;
  font-size: 10px;
}

.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
}




/* step by step */
.billing__main__content__step ul {
  padding: 0;
  margin: 0;
}
.billing__main__content__step ul li {
  list-style-type: none;
}
.billing__main__content__step ul li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.billing__main__content__step ul li a span {
  margin-right: 12px;
  position: relative;
  width: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.billing__main__content__step ul li a span i {
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  background-color: #d8e0ea;
  color: white;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
}
.billing__main__content__step ul li a span:before {
  content: "";
  width: 2px;
  height: 16px;
  background-color: #d8e0ea;
  position: absolute;
  top: -12px;
  left: 19px;
}
.billing__main__content__step ul li a span:after {
  content: "";
  width: 2px;
  height: 16px;
  background-color: #d8e0ea;
  position: absolute;
  bottom: -12px;
  left: 19px;
}
.billing__main__content__step ul li a p {
  color: black;
  text-decoration: none;
}
.billing__main__content__step ul li a label {
  max-width: calc(100% - 52px);
}
.billing__main__content__step ul li a .sub {
  display: none;
}
.billing__main__content__step ul li a.selected p {
  font-weight: bold;
}
.billing__main__content__step ul li a.selected .sub {
  display: block;
  font-weight: normal;
  float: left;
  width: 100%;
  font-style: normal;
}
.billing__main__content__step ul li:first-child span:before {
  content: "";
  display: none;
}
.billing__main__content__step ul li:last-child span:after {
  content: "";
  display: none;
}
.billing__main__content__step ul li.active {
  color: #435064;
  font-weight: bold;
}
.billing__main__content__step ul li.active span {
  border: 1px solid #cf2d59;
  background-color: white;
}
.billing__main__content__step ul li.active span i {
  background-color: #cf2d59;
}
.billing__main__content__step ul li.active span:before {
  background-color: #cf2d59;
  bottom: -17px;
  top: -17px;
  left: 18px;
}
.billing__main__content__step ul li.active span:after {
  background-color: #cf2d59;
  bottom: -17px;
  left: 18px;
}
.billing__main__content__step ul li .done-icon {
  display: none;
}
.billing__main__content__step ul li.done span {
  border-color: white;
}
.billing__main__content__step ul li.done span:after {
  bottom: -13px;
}
.billing__main__content__step ul li.done span:before {
  top: -13px;
}
.billing__main__content__step ul li.done span.default {
  display: none;
}
.billing__main__content__step ul li.done span.done-icon {
  display: flex;
}


</style>
