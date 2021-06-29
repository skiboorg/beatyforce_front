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

          <div class="catalog-brand__wrapper" v-for="category in brand.lines" :key="category.id">

            <p class="catalog-brand__title">{{category.name}}</p>
            <div class="catalog-brand__grid">
                <div class="catalog-brand__item" v-for="item in category.items" :key="item.id">
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


 </style>
