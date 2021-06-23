<template>
  <q-page class="main-bg">
    <div class="catalog-wrapper">
      <div class="container">
        <div class="catalog-title flex items-center justify-between">
          <h1>ОПТОВЫЙ Каталог</h1>
          <router-link class="btn mainform__btn mainform__button" to="/">запросить оптовый прайс-лист </router-link>
        </div>
        <div class="catalog-brand" v-for="brand in brands" :key="brand.id">
          <h3>{{brand.name}}</h3>

          <div class="catalog-brand__wrapper" v-for="category in brand.category" :key="category.id">
            <p class="catalog-brand__title">{{category.name}}</p>
            <div class="catalog-brand__grid">
                <div class="catalog-brand__item" v-for="item in category.line_items" :key="item.id">
                  <q-img :ratio="1" :src="item.image" alt="" />
                  <p class="catalog-brand__item-name">{{item.name}}</p>
                  <p class="catalog-brand__item-price">{{item.price}} ₽</p>

                </div>
            </div>
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
    const response_brands = await this.$api.get('/api/brand/brands')
    this.brands = response_brands.data



  },
}
</script>
 <style lang="sass">
.catalog
  &-wrapper
    background: $bg
    padding-top: 50px
    padding-bottom: 150px
  &-title
    margin-bottom: 70px
    h1
      margin: 0
      font-size: 110px
      font-weight: 100
      color: #504C67
      text-transform: uppercase
  &-brand
    h3
      font-size: 50px
      font-weight: 400
      text-transform: uppercase

    &__wrapper
      margin-bottom: 25px
    &__title
      font-size: 24px
      font-weight: 400
      text-transform: uppercase
    &__grid
      display: grid
      grid-template-columns: repeat(5,1fr)
      grid-gap: 15px
      margin-bottom: 35px
    &__item
      img
        max-width: 100%
        height: auto
        object-fit: contain
      &-name
        font-size: 14px
        font-weight: 400
      &-price
        font-size: 16px
        font-weight: 400
        color: #8F8C9E

 </style>
