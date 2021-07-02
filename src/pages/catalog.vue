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
                <div class="catalog-brand__item cursor-pointer" @click="openModal(item)" v-for="item in category.items" :key="item.id">

                  <q-img :ratio="1" :src="item.image" alt="" />
                  <p class="catalog-brand__item-name">{{item.name}}</p>
                  <p class="catalog-brand__item-price">{{item.price_text}}</p>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <q-dialog  v-model="itemModal" >
      <q-card  class="itemModal" style="width: 900px; max-width: 80vw;">

        <q-card-section  class="q-pa-sm ">
          <div class="row">
             <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 itemModal-img">
           <q-img  :ratio="1" :src="cur_item.image" alt=""/>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 itemModal-info">
            <h3 class="itemModal-title">{{cur_item.name}}</h3>
            <p>{{cur_item.article}}</p>
            <div class="" v-html="cur_item.description">

            </div>
          </div>
          </div>

        </q-card-section>


      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>


export default {

  data () {
    return {
      brands:[],
      itemModal:false,
      cur_item:{},
    }
  },
   async mounted() {
    const response_brands = await this.$api.get('/api/brand/brands')
    this.brands = response_brands.data

  },
  methods:{
    openModal(item){
      this.cur_item=item
      this.itemModal = true
    }
  }
}
</script>
 <style lang="sass">

 </style>
