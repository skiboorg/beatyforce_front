<template>
  <q-page >
<div class="page-brands">
            <div class="page-brands__hero">

                <div class="container page-brands__container">
                    <h1 class="page-brands__title">Бренды</h1>

                    <ul class="page-brands__menu-list">
                        <li class="page-brands__menu-item" v-for="item in brands" :key="item.id">
                          <a class="page-brands__menu-link" href="brands.html#decorations">{{item.name}}</a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="page-brands__content">
                <div class="container">
                    <ul class="page-brands__list">
                        <li class="page-brands__category"
                            v-for="global_category in brands" :key="global_category.id"
                        >
                            <h2 class="page-brands__category-title">{{global_category.name}}</h2>
                            <div class="brand-category">
                                <ul class="brand-category__list">
                                    <li class="brand-category__item" v-for="brand in global_category.brands" :key="brand.id">
                                        <router-link class="brand-category__link" :to="`/brands/${brand.name_slug}`">
                                            <div class="brand-category__icon">
                                                <img :src="brand.logo" alt="">
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                    <div class="page-brands__more">
                        <h3 class="page-brands__more-title">Смотрите все товары в каталоге</h3>
                      <router-link class="btn page-brands__more-link" to="/catalog">Открыть каталог</router-link>

                    </div>
                </div>
            </div>
        </div>
  </q-page>
</template>

<script>


export default {

  data () {
    return {
      brands:[],
    }
  },
   async mounted() {
    const response_brands = await this.$api.get('/api/brand/brands_global')
    this.brands = response_brands.data



  },
}
</script>
<style lang="sass">
.brands
  & .section__subtitle
    max-width: 550px
.brands-grid
  position: relative
  margin-top: 4.688rem
  &__mobile
    display: none

.brands-grid__row
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-pack: center
  -ms-flex-pack: center
  justify-content: center

.brands-grid__list
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -ms-flex-wrap: nowrap
  flex-wrap: nowrap

.brands-grid__list_top
  -webkit-transform: translateX(-30%)
  -ms-transform: translateX(-30%)
  transform: translateX(-30%)

.brands-grid__list_bottom
  -webkit-transform: translateX(30%)
  -ms-transform: translateX(30%)
  transform: translateX(30%)

.brands-grid__item
  overflow: hidden
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-flex: 1
  -ms-flex: 1 0 auto
  flex: 1 0 auto
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center
  -webkit-box-pack: center
  -ms-flex-pack: center
  justify-content: center
  width: 355px
  height: 355px
  border: 0.063rem solid rgba(31, 26, 61, 0.25)
  border-radius: 50%
  -webkit-transform: scale(1.1)
  -ms-transform: scale(1.1)
  transform: scale(1.1)

.brands-grid__btn
  position: absolute
  top: 50%
  left: 50%
  -webkit-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)

.brands
  padding: 6.250rem 0 9.375rem 0
  overflow: hidden

.brands__content
  padding-top: 3.125rem
  border-top: 0.063rem solid #1f1a3d

@media (max-width: 1000px)
  .brands-grid__item
    width: 280px
    height: 280px

@media (max-width: 600px)
  .brands-grid
    &__desktop
      display: none
    &__mobile
      display: block
    &__row
      padding: 0 20px
    &__list
      display: grid
      grid-template-columns: repeat(4, 1fr)
    &__item
      width: 135px
      height: 135px

@media (max-width: 500px)
  .brands
    padding-bottom: 200px
  .brands-grid
    &__list
      display: grid
      grid-template-columns: repeat(2, 1fr)
    &__btn
      bottom: -200px
      top: unset

.brand-category__list
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -ms-flex-wrap: wrap
  flex-wrap: wrap

.brand-category__item
  position: relative
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center
  -webkit-box-pack: center
  -ms-flex-pack: center
  justify-content: center
  width: 20.000rem
  height: 20.000rem
  border: 0.063rem solid #b4b2bb
  border-radius: 50%
  -webkit-transition: all .1s ease-out
  -o-transition: all .1s ease-out
  transition: all .1s ease-out
  -webkit-transform: scale(1.09)
  -ms-transform: scale(1.09)
  transform: scale(1.09)

  &:hover
    z-index: 99

.brand-category__link
  position: relative
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center
  -webkit-box-pack: center
  -ms-flex-pack: center
  justify-content: center
  width: 100%
  height: 100%
  overflow: hidden
  border-radius: 50%

.brand-category__icon
  max-width: 12.500rem

.brand-category__img
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  max-width: 100%
  max-height: 100%
  border-radius: 50%
  -webkit-transition: all .2s ease-out
  -o-transition: all .2s ease-out
  transition: all .2s ease-out
  -webkit-transform: translateX(-200%)
  -ms-transform: translateX(-200%)
  transform: translateX(-200%)

.brand-category__link:hover
  position: relative
  background-color: #1f1a3d

  &::before
    top: 50%
    left: 50%
    font-size: 1.500rem
    font-weight: 200
    line-height: 1.938rem
    text-align: center
    text-transform: uppercase
    content: 'Перейти в бренд'

  .brand-category__icon
    display: none


@media (max-width: 500px)
  .brand-category
    &__list
      display: grid
      grid-template-columns: 1fr 1fr
    &__item
      width: 165px
      height: 165px

.page-brands__hero
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center
  min-height: 31.875rem
  background-color: #1f1a3d

.page-brands__container
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  width: 100%

.page-brands__title
  -ms-flex-preferred-size: 50%
  flex-basis: 50%
  margin-bottom: 0
  font-size: 6.875rem
  font-weight: 100
  text-transform: uppercase

.page-brands__list
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -ms-flex-preferred-size: 50%
  flex-basis: 50%
  -ms-flex-wrap: wrap
  flex-wrap: wrap
  margin-bottom: 12.500rem

.page-brands__menu-list
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -ms-flex-preferred-size: 50%
  flex-basis: 50%
  -ms-flex-wrap: wrap
  flex-wrap: wrap

.page-brands__menu-item
  -ms-flex-preferred-size: 50%
  flex-basis: 50%
  margin-bottom: 0.938rem
  font-size: 1.125rem
  line-height: 1.938rem
  text-transform: uppercase

.page-brands__menu-link
  position: relative

  &::after
    position: absolute
    bottom: -0.438rem
    left: 0
    display: block
    width: 0%
    height: 0.063rem
    content: ''
    background-color: #fff
    -webkit-transition: all .2s ease-out
    -o-transition: all .2s ease-out
    transition: all .2s ease-out

  &:hover::after
    width: 100%

.page-brands__content
  margin-top: 6.250rem

.page-brands__category
  width: 100%
  padding-top: 3.125rem
  margin-bottom: 6.250rem
  border-top: 0.063rem solid #1f1a3d

  &:last-child
    margin-bottom: 0

.page-brands__category-title
  margin-bottom: 3.750rem
  font-size: 2.500rem
  line-height: 4.000rem
  color: #1f1a3d
  text-transform: uppercase

.page-brands__more
  padding: 3.125rem 0 9.375rem 0
  border-top: 0.063rem solid #1f1a3d

.page-brands__more-title
  margin-bottom: 3.125rem
  font-size: 3.125rem
  line-height: 4.000rem
  color: #1f1a3d
  text-align: center
  text-transform: uppercase

.page-brands__more-link
  padding: 0
  margin: 0 auto
  color: #fff
  background-color: #1f1a3d

  &:hover
    color: #1f1a3d
    background-color: #fff
    border: 0.063rem solid #1f1a3d

@media (max-width: 600px)
  .page-brands
    &__container
      flex-wrap: wrap
    &__title
      width: 100%
      flex-basis: 100%
      font-size: 60px
      line-height: 60px
      margin-bottom: 25px
    &__menu
      &-list
        flex-basis: 100%
    &__category-title
      font-size: 24px
      line-height: 31px
    &__more-title
      font-size: 24px
      line-height: 31px
      margin-bottom: 15px
</style>
