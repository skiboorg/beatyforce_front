<template>
  <q-page class="main-bg flex items-center column justify-center">

    <div class="login-block text-center">
    <p class="login-block__title">Вход <span>в b2b-портал</span></p>
      <div class="flex items-center justify-center">
        <svg class="q-mr-sm" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<circle cx="9" cy="9" r="9" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0)">
<circle cx="9" cy="9" r="9" fill="#8F8C9E"/>
<path d="M3 8.2L7.5 13L15 5" stroke="#E9E8EC" stroke-width="1.5"/>
</g>
</svg>
<p class="no-margin">Доступ к оптовым ценам</p>
      </div>
        <div class="flex items-center justify-center">
        <svg class="q-mr-sm" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<circle cx="9" cy="9" r="9" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0)">
<circle cx="9" cy="9" r="9" fill="#8F8C9E"/>
<path d="M3 8.2L7.5 13L15 5" stroke="#E9E8EC" stroke-width="1.5"/>
</g>
</svg>
<p class="no-margin">Быстрый выбор популярных товаров</p>
      </div>
        <div class="flex items-center justify-center ">
        <svg class="q-mr-sm" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<circle cx="9" cy="9" r="9" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0)">
<circle cx="9" cy="9" r="9" fill="#8F8C9E"/>
<path d="M3 8.2L7.5 13L15 5" stroke="#E9E8EC" stroke-width="1.5"/>
</g>
</svg>
<p class="no-margin">Имиджевые презентации брендов</p>
      </div>
       <q-form
      @submit="userLoginAction"
      class="q-gutter-md q-mt-lg q-mb-lg"
    >
      <q-input
        filled
        v-model="userLogin.email"
        label="Введите Ваш E-Mail *"
        dark
        color="white"


        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Введите Ваш E-Mail']"
      />
      <q-input
        filled
        dark
        color="white"
        v-model="userLogin.password"
        label="Ваш Пароль *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Введите Ваш пароль'
        ]"
      />
      <div>
        <q-btn label="войти" type="submit" size="lg" text-color="black" class="login-button full-width"/>
      </div>
    </q-form>
      <div class="flex items-center justify-center">
        <router-link class="text-purple text-underline text-uppercase inline-block q-mr-lg"  to="/lk/register">регистрация</router-link>
              <router-link class="text-purple text-underline text-uppercase inline-block"  to="/">забыли пароль?</router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      userLogin:{
        email:null,
        password:null,
      },


    }
  },
  methods: {
    ... mapActions('auth',['loginUser']),
    userLoginAction() {
      this.loginUser(this.userLogin)

    },

  }
}
</script>
 <style lang="sass">
.login-block
  background: #504C67
  border-radius: 20px
  padding: 50px 85px
  &__title
    font-weight: 400
    font-size: 50px
    line-height: 100%
    text-transform: uppercase
    span
      display: block
.login-button
  background: #E9E8EC
  border-radius: 10px
.login-control
  background: linear-gradient(0deg, rgba(143, 140, 158, 0.3), rgba(143, 140, 158, 0.3)), #504C67
  border-radius: 10px
 </style>
