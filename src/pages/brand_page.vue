<template>
  <q-page class="main-bg">
    <div class="container" >
      <div class="brand-top">
        <div class="brand-top__left">
          <h1 class="brand-top__title">{{brand.name}}</h1>
          <p class="brand-top__slogan">{{brand.slogan}}</p>
          <div class="brand-top__items">
            <div class="brand-top__item">
              <p>Страна</p>
              <p>{{brand.country.name}}</p>
            </div>
            <div class="brand-top__item">
              <p>категория</p>
              <p>{{brand.cat}}</p>
            </div>
            <div class="brand-top__item">
              <p>Ассортимент</p>
              <p>{{brand.assortiment}}</p>
            </div>
            <div class="brand-top__item">
              <p>Ценовой сегмент</p>
              <p>{{brand.prices}}</p>
            </div>
          </div>
        </div>
        <div class="brand-top__right">
          <q-img :ratio="1" :src="brand.image"/>
        </div>
      </div>
      <div class="brand-description">
        <div class="brand-description__left">
          <q-img :ratio="1" :src="brand.description_image"/>
        </div>
        <div class="brand-description__right">
          <p class="brand-subtitle">миссия</p>
          <h3 class="brand-title">ОПИСАНИЕ</h3>
          <div class="brand-description__right-text" v-html="brand.description"></div>
        </div>
      </div>
      <div class="brand-cat">
        <p class="brand-subtitle">Категории товаров</p>
        <h3 class="brand-title">линейка товаров по категориям</h3>
        <div class="brand-cat__grid">
          <div class="brand-cat__item" v-for="cat in brand.category" :key="cat.id">
            <p>{{cat.name}}</p>
            <p>{{cat.product_line}}</p>
          </div>
        </div>
      </div>
      <div class="brand-features">
        <p class="brand-subtitle">преимущества</p>
        <h3 class="brand-title">преимущества</h3>
        <div class="brand-features__grid">
          <div class="">
            <div class="brand-features__item" v-for="feature in brand.features" :key="feature.id">
              <p>{{feature.name}}</p>
              <p>{{feature.text}}</p>
            </div>
          </div>

          <div class="">
            <q-img  :src="brand.features_image"/>
          </div>
        </div>
      </div>
      <div class="brand-cat">
        <p class="brand-subtitle">Состав и ингредиенты</p>
        <h3 class="brand-title">Состав и ингредиенты</h3>
        <div class="brand-cat__grid">
          <div class="brand-cat__item w-img" v-for="item in brand.ingredients" :key="item.id">

            <img  :src="item.image">
            <div class="">
              <p>{{item.name}}</p>
              <p>{{item.text}}</p>

            </div>
          </div>
        </div>
      </div>
      <div class="brand-feedback">
        <p class="brand-subtitle">отзывы</p>
        <h3 class="brand-title">отзывы покупателей</h3>
        <div class="brand-feedback__grid">
          <div class="brand-feedback__item" v-for="feedback in brand.feedbacks" :key="feedback.id">
            <div class="brand-feedback__item-top">
              <q-avatar size="50px">
                <img :src="feedback.avatar" alt="">
              </q-avatar>
              <div class="">
                <p class="no-margin">{{feedback.name}}</p>
                <q-rating
                  v-model="feedback.rating"
                  size="20px"
                  color="white"
                  readonly
                />
              </div>
            </div>
            <div class="brand-feedback__item-text">
              <p>{{feedback.text}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-video video__slider slider-video">

        <p class="brand-subtitle">Видео</p>
        <h3 class="brand-title">видео-блок с обзорами</h3>
        <VueSlickCarousel :arrows="true" v-bind="videoBannersSettings" >
          <div class="slider-video__item" v-for="video in brand.videos" :key="video.id">
            <a target="_blank" class="slider-video__slide" :href="`https://www.youtube.com/watch?v=${video.link}`">
              <img class="slider-video__img" :src="video.image" alt="" />
              <h3 class="slider-video__title">{{video.name}}</h3>
              <div class="btn slider-video__btn">
                Смотреть <br />
                на Youtube
              </div>
            </a>
          </div>
          <template #prevArrow="arrowOption">
            <div class="custom-arrow">
              <button class="slider-video__arrow slider-video__arrow_prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="custom-arrow">
              <button class="slider-video__arrow slider-video__arrow_next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>
            </div>
          </template>
        </VueSlickCarousel>


      </div>
      <div class="brand-press">
        <p class="brand-subtitle">пресса</p>
        <h3 class="brand-title">блок прессы</h3>
        <div class="press-grid">


          <div class="press-grid__item" v-for="item in brand.press" :key="item.id">
            <div class="press-grid__pic"><img :src="item.logo" alt=""></div>
            <div class="press-grid__item-header">
              <h3 class="press-grid__item-title">{{item.name}}</h3>

            </div>
            <img style="max-width: 100%;height: auto" class="press-grid__item-img" :src="item.image" alt="" />
          </div>


        </div>
      </div>
      <div class="brand-contact">

        <ContactForm title="сделаем первый шаг
к сотрудничеству" subtitle="контакты"/>
      </div>
    </div>

  </q-page>
</template>

<script>

import {mapGetters} from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import ContactForm from "components/common/ContactForm";
export default {
  components: {ContactForm,VueSlickCarousel },
  data () {
    return {
      brand:{
        "country": {
          "name": "",
        },
        "category": [
        {}
        ],
        "features": [
        {}
        ],
        "ingredients": [ {}],
    "feedbacks": [ {}],
    "videos": [ {}],
    "press": [ {}],
      },
      videoBannersSettings:{
        "dots": false,
        "focusOnSelect": true,

        "infinite": true,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 2,
        "touchThreshold": 5,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 900,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
            }
          },

        ]
      },
      ratingModel:4
    }
  },
  async beforeMount() {
    const response = await this.$api.get(`/api/brand/brand/?slug=${this.$route.params.slug}`)
    this.brand = response.data
  }
}
</script>
<style lang="sass" >
.brand-subtitle
  position: relative
  font-size: 14px
  text-transform: uppercase
  margin-bottom: 25px
  &::before
    position: absolute
    content: ''
    background: #ffffff
    width: 100%
    height: 1px
    top: -50px
    left: 0
.brand-title
  font-size: 50px
  line-height: 60px
  margin-bottom: 50px
  font-weight: 200
  text-transform: uppercase
  max-width: 550px

@media (max-width: 600px)
  .brand-subtitle
    margin-bottom: 15px
  .brand-title
    font-size: 24px
    line-height: 28px
    margin-bottom: 25px
.brand-top
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  margin-bottom: 150px
  padding-top: 75px
  &__title
    font-size: 110px
    line-height: 100%
    font-weight: 200
    text-transform: uppercase
    margin-bottom: 25px
  &__slogan
    font-size: 24px
    font-weight: 200
    text-transform: uppercase
    margin-bottom: 35px
  &__items
    display: grid
    grid-template-columns: 1fr 1fr
  &__item
    p
      &:first-child
        text-transform: uppercase
        font-size: 14px
        color: #8F8C9E
        margin-bottom: 5px

      &:last-child
        font-size: 16px
@media (max-width: 600px)
  .brand-top
    margin-bottom: 75px
    grid-template-columns: 1fr
    &__title
      font-size: 60px
      line-height: 60px

.brand-description
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  grid-gap: 60px
  margin-bottom: 150px
  &__right

    &-text
      font-size: 16px
@media (max-width: 600px)
  .brand-description
    grid-template-columns: 1fr
    grid-gap: 0
    margin-bottom: 75px
    &__left
      order: 2
    &__right
      order: 1

.brand-cat
  margin-bottom: 150px
  &__grid
    display: grid
    grid-template-columns: 1fr 1fr
    grid-row-gap: 50px
    grid-column-gap: 200px
  &__item
    p
      &:first-child
        font-size: 24px
        line-height: 30px
        margin-bottom: 15px
        text-transform: uppercase

      &:last-child
        font-size: 16px
        color: #8F8C9E
    &.w-img
      display: grid
      grid-template-columns: 1fr 4fr

      img
        width: 75px
        height: 75px
        object-fit: contain

@media (max-width: 600px)
  .brand-cat
    margin-bottom: 75px
    &__grid
      grid-template-columns: 1fr
      grid-gap: 25px

.brand-features
  margin-bottom: 150px
  &__grid
    display: grid
    grid-template-columns: 1fr 1fr
    grid-column-gap: 200px
    align-items: center
  &__item
    margin-bottom: 50px
    &:last-child
      margin-bottom: 0
    p
      &:first-child
        font-size: 24px
        line-height: 30px
        margin-bottom: 15px
        text-transform: uppercase
      &:last-child
        font-size: 16px
        color: #8F8C9E
@media (max-width: 600px)
  .brand-features
    margin-bottom: 75px
    &__grid
      grid-template-columns: 1fr
      grid-gap: 25px
.brand-video
  margin-bottom: 150px
.brand-press

  & .press-grid
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 50px
    &__item
      border-top: 1px solid #ffffff
      padding-top: 25px
      &-title
        font-size: 24px
        line-height: 30px
        text-transform: uppercase
    &__pic
      margin-bottom: 25px
      img
        width: 95px
        height: 20px
        object-fit: contain
.brand-feedback
  margin-bottom: 150px
  &__grid
    display: grid
    grid-template-columns: 1fr 1fr
    grid-column-gap: 200px
    grid-row-gap: 50px
  &__item

    &-top
      display: grid
      grid-template-columns: 1fr 7fr
      margin-bottom: 15px
      p
        font-size: 16px
    &-text
      font-size: 24px
      line-height: 30px
@media (max-width: 600px)
  .brand-feedback
    margin-bottom: 75px
    &__grid
      grid-template-columns: 1fr
      grid-gap: 25px
  .brand-video
    margin-bottom: 75px
  .brand-press
    &-grid
      grid-template-columns: 1fr
      grid-gap: 25px
    & .press-grid
      grid-template-columns: 1fr

</style>
