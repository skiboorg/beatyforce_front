<template>
 <header class="header">
    <div class="container header__container">
        <div class="header__logo">
             <router-link  class="header__logo-link" to="/">
                <img src="~assets/logo.svg" alt="">
            </router-link>
        </div>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/brands">Бренды</router-link>
                </li>
              <li class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/catalog">Каталог</router-link>
                </li>

              <li class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/partnership">Партнерство</router-link>
                </li>

              <li class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/about">О компании</router-link>
                </li>

              <li class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/press">Пресса</router-link>
                </li>
              <li class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/contacts">Контакты</router-link>
                </li>


                <li class="nav__item"><a class="nav__link" href="https://beautyforce.store/" target="_blank">Интернет-магазин</a></li>
               <li v-if="$user.loggedIn" class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/lk/catalog">ЛК</router-link>
                </li>
              <li v-else class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/lk/login">Вход</router-link>
                </li>

            </ul>
        </nav>
        <div class="header__lang">
           <q-select borderless v-model="lang" class="text-white" :options="langOptions"  />
        </div>
        <div class="header__toggle cursor-pointer" @click="mobileMenuOpen=!mobileMenuOpen">
            <p class="q-mb-none q-mr-sm">Меню</p>
            <svg width="25" height="6" viewBox="0 0 25 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="25" y2="0.5" stroke="white"/>
                <line y1="5.5" x2="25" y2="5.5" stroke="white"/>
            </svg>
        </div>
    </div>
    <div class="header-menu" :class="{'header-menu__active':mobileMenuOpen}">
        <div class="header-menu__top " >
            <q-select borderless v-model="lang" :options="langOptions"  />
            <div class="header__toggle cursor-pointer" @click="mobileMenuOpen=!mobileMenuOpen">
                <p class="q-mb-none q-mr-sm">закрыть</p>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16L16 1" stroke="white"/>
                    <path d="M16 16L1 1" stroke="white"/>
                </svg>

            </div>
        </div>
        <div class="header-menu__inner">
            <ul>

                <li @click="mobileMenuOpen=false" class="nav__item">
                   <router-link  class="" exact-active-class="nav__link_accent" to="/brands">Бренды</router-link>
                </li>
              <li @click="mobileMenuOpen=false" class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/catalog">Каталог</router-link>
                </li>

              <li @click="mobileMenuOpen=false" class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/partnership">Партнерство</router-link>
                </li>

              <li @click="mobileMenuOpen=false" class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/about">О компании</router-link>
                </li>

              <li @click="mobileMenuOpen=false" class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/press">Пресса</router-link>
                </li>
              <li @click="mobileMenuOpen=false" class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/contacts">Контакты</router-link>
                </li>


                <li @click="mobileMenuOpen=false" class="nav__item"><a class="nav__link" href="https://beautyforce.store/" target="_blank">Интернет-магазин</a></li>
              <li @click="mobileMenuOpen=false" v-if="$user.loggedIn" class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/lk/catalog">ЛК</router-link>
                </li>
              <li @click="mobileMenuOpen=false" v-else class="nav__item">
                   <router-link class="nav__link" exact-active-class="nav__link_accent" to="/lk/login">Вход</router-link>
                </li>


            </ul>
        </div>
    </div>
</header>
</template>

<script>


export default {

  data () {
    return {
      lang: 'RU',
      langOptions: [
        'RU', 'EN', 'KR'
      ],
      mobileMenuOpen: false

    }
  }
}
</script>
<style lang="sass">
.header
  height: 5.625rem
  background-color: #1f1a3d
  color: #ffffff
  &__container
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    -webkit-box-align: center
    -ms-flex-align: center
    align-items: center
    -webkit-box-pack: justify
    -ms-flex-pack: justify
    justify-content: space-between
    height: 100%
  &__logo-icon
    max-width: 12.625rem
    max-height: 2.375rem
  &__lang
    & .q-field__control-container
      span
        color: #ffffff
    & .q-field__append
      i
        color: #ffffff


.nav__list
  display: flex

.nav__item
  margin-right: 50px
  &:last-child
    margin-right: 0

.nav__link
  position: relative
  &::after
    position: absolute
    bottom: -0.438rem
    display: none
    width: 100%
    height: 0.063rem
    content: ''
    background-color: #fff
  &:hover::after
    display: block

.nav__link_accent
  font-size: 0.875rem
  font-weight: 500
.header__toggle
  align-items: center
  display: none
  p
    text-transform: uppercase
    font-size: 14px
    letter-spacing: 0.05em
    margin-right: 5px
    cursor: pointer
.header-menu
  position: fixed
  left: 0
  right: 0
  top: 10px
  opacity: 0
  pointer-events: none
  height: 100vh
  background: #8F8C9E
  z-index: 100
  padding: 26px 20px
  transition: all 0.2s linear
  &.header-menu__active
    top: 0
    opacity: 1
    pointer-events: all
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 75px
    & .q-field__control-container
      span
        color: #ffffff
    & .q-field__append
      i
        color: #ffffff
  &__inner
    text-align: center
    ul
      li
        margin-bottom: 25px
        &:last-child
          margin-bottom: 0
        a
          font-size: 24px
          line-height: 31px

@media (max-width: 1000px)
  .nav__item
    margin-right: 30px

@media (max-width: 900px)
  .nav
    display: none
  .header__lang
    display: none
  .header__toggle
    display: flex

</style>
