<template>
  <q-page class="main-bg">
    <q-page-sticky v-if="cart.items.length>0" position="bottom-right" :offset="[18, 18]">
            <q-btn @click="$router.push('/lk/cart')" fab class="btn" icon="shopping_cart" color="white" text-color="indigo-10" label="Ваш заказ" />
          </q-page-sticky>
    <div class="catalog-wrapper">
      <div class="container">
        <div class="catalog-top">
          <div class="catalog-top__left">
            <p class="catalog-top__left-name">
              добрый день,<span>{{$user.user.fio}}</span>
            </p>
            <div class="flex items-center q-mb-lg">
              <p class="q-mb-none q-mr-lg text-purple">{{$user.user.phone}}</p>
              <p  class="no-margin text-purple">{{$user.user.email}}</p>
            </div>
            <div class="catalog-top__left-menu">
              <div class="flex items-center q-mb-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5002 12C19.5002 11.77 19.4902 11.55 19.4702 11.32L21.3302 9.91C21.7302 9.61 21.8402 9.05 21.5902 8.61L19.7202 5.38C19.4702 4.94 18.9302 4.76 18.4702 4.96L16.3202 5.87C15.9502 5.61 15.5602 5.38 15.1502 5.19L14.8602 2.88C14.8002 2.38 14.3702 2 13.8702 2H10.1402C9.63015 2 9.20015 2.38 9.14015 2.88L8.85015 5.19C8.44015 5.38 8.05015 5.61 7.68015 5.87L5.53015 4.96C5.07015 4.76 4.53015 4.94 4.28015 5.38L2.41015 8.62C2.16015 9.06 2.27015 9.61 2.67015 9.92L4.53015 11.33C4.51015 11.55 4.50015 11.77 4.50015 12C4.50015 12.23 4.51015 12.45 4.53015 12.68L2.67015 14.09C2.27015 14.39 2.16015 14.95 2.41015 15.39L4.28015 18.62C4.53015 19.06 5.07015 19.24 5.53015 19.04L7.68015 18.13C8.05015 18.39 8.44015 18.62 8.85015 18.81L9.14015 21.12C9.20015 21.62 9.63015 22 10.1302 22H13.8602C14.3602 22 14.7902 21.62 14.8502 21.12L15.1402 18.81C15.5502 18.62 15.9402 18.39 16.3102 18.13L18.4602 19.04C18.9202 19.24 19.4602 19.06 19.7102 18.62L21.5802 15.39C21.8302 14.95 21.7202 14.4 21.3202 14.09L19.4602 12.68C19.4902 12.45 19.5002 12.23 19.5002 12ZM12.0402 15.5C10.1102 15.5 8.54015 13.93 8.54015 12C8.54015 10.07 10.1102 8.5 12.0402 8.5C13.9702 8.5 15.5402 10.07 15.5402 12C15.5402 13.93 13.9702 15.5 12.0402 15.5Z" fill="white"/>
</svg>
                <router-link class="text-white text-underline text-uppercase inline-block q-ml-sm" :to="{ name: 'lk_orders', hash: '#settings' }" >настройки</router-link>

              </div>
              <div class="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM8 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19ZM8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13ZM7 6C7 6.55 7.45 7 8 7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H8C7.45 5 7 5.45 7 6Z" fill="white"/>
</svg>
                <router-link class="text-white text-underline text-uppercase inline-block q-ml-sm" to="/lk/orders">ваши заказы</router-link>

              </div>
            </div>
          </div>
          <div class="catalog-top__right">
            <div class="catalog-top__right-info">
              <div class="catalog-top__right-info--circle">
                <p>{{$user.user.discount}}%</p>
                <p>Ваша текущая постоянная скидка</p>
              </div>
              <div class="catalog-top__right-info--text">
                <p class="text-purple q-mb-sm">Закажите<br> еще на</p>
                <p class="text-h5">{{$user.user.need_to_next_level}} ₽</p>
                <p class="text-purple q-mb-sm">Для постоянной <br>скидки в</p>
                <p class="text-h5">{{$user.user.discount+1}}%</p>
              </div>
            </div>
            <div class="catalog-top__right-progress">
              <div class="catalog-top__right-progress--wrapper">

                <div :style="{'width': ($user.user.total_summ / 250000 *100).toFixed(2) + '%'}" class="catalog-top__right-progress--wrapper--inner">
                  <p>{{$user.user.total_summ}} ₽</p>
                </div>
              </div>
              <div class="catalog-top__right-progress--marks">

                <p>1% <span>50,000 ₽</span> </p>
                <p>2% <span>100,000 ₽</span></p>
                <p>3% <span>150,000 ₽</span></p>
                <p>4% <span>200,000 ₽</span></p>
                <p>5% <span>250,000 ₽</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="catalog-title flex items-center justify-between">
          <h1>ОПТОВЫЙ Каталог</h1>

        </div>
        <div class="catalog-brand" v-for="brand in brands" :key="brand.id">
          <h3>{{brand.name}}</h3>

          <div class="catalog-brand__wrapper" v-for="category in brand.category" :key="category.id">
            <p class="catalog-brand__title">{{category.name}}</p>
            <div class="catalog-brand__grid">
                <div class="catalog-brand__item" v-for="item in category.line_items" :key="item.id">

                  <q-img :ratio="1" :src="item.image" alt="" />
                  <p class="catalog-brand__item-name">{{item.name}}</p>
                   <q-btn  v-if="cart.items.filter(x=>x.item===item.id).length===0"
                          class="catalog-brand__item-add"
                          icon="add"
                           :loading="loading"
                          @click="itemAction(item.id,'add_to_cart')"
                          :label="`${item.price} ₽`" />
                    <q-btn-group v-else  class="catalog-brand__item-add">
                    <q-btn color="white" :loading="loading" @click="itemAction(item.id,'remove_quantity')" text-color="indigo-10" icon="remove" />
                    <q-btn color="white" :ripple="false" disable :loading="loading" text-color="indigo-10" :label="cart.items.find(x=>x.item===item.id).quantity" />
                    <q-btn color="white" :loading="loading" @click="itemAction(item.id,'add_quantity')" text-color="indigo-10" icon="add" />
                  </q-btn-group>

                </div>
            </div>

<!--            <q-expansion-item-->
<!--        expand-separator-->
<!--        v-ripple="false"-->
<!--        label="СМОТРЕТЬ ВСЕ ТОВАРЫ"-->

<!--      >-->
<!--         <div class="catalog-brand__grid">-->
<!--                <div class="catalog-brand__item" v-for="i in 7">-->
<!--                  <img src="http://placehold.it/400" alt="">-->
<!--                  <p class="catalog-brand__item-name">Dr.Gloderm TabRX Liftup Cream Крем для лица подтягивающий, 45 гр</p>-->
<!--                   <q-btn class="catalog-brand__item-add"  icon="add" label="1500 ₽" />-->
<!--                    <q-btn-group class="catalog-brand__item-add">-->
<!--                    <q-btn color="white" dense text-color="indigo-10" icon="remove" />-->
<!--                    <q-btn color="white" dense text-color="indigo-10" label="1" />-->
<!--                    <q-btn color="white" dense text-color="indigo-10" icon="add" />-->
<!--                  </q-btn-group>-->


<!--                </div>-->
<!--            </div>-->
<!--      </q-expansion-item>-->

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
      visible:false,
      loading:false,
      brands:[],
      cart:{
        items:[]
      }


    }
  },
  async mounted() {
    const response_brands = await this.$api.get('/api/brand/brands')
    this.brands = response_brands.data
    await this.getCart()


  },
  methods:{
    async getCart(){
      const response_cart = await this.$api.get('/api/cart/simple')
      this.cart = response_cart.data
      console.log('cart',this.cart)
    },
    async itemAction(id,action){
      this.loading=true
      await this.$api.get(`/api/cart/${action}?id=${id}`)
      await this.getCart()
      this.loading=false
    }
  }
}
</script>
 <style lang="sass">
.catalog-top
  display: grid
  grid-template-columns: 1fr 4fr
  grid-gap: 80px
  margin-bottom: 100px
  &__left
    &-name
      font-weight: 400
      font-size: 24px
      line-height: 30px
      text-transform: uppercase
      span
        display: block
  &__right
    background: #504C67
    border-radius: 10px
    padding: 25px
    display: grid
    grid-template-columns: 1fr 2fr
    &-info
      border-right: 1px solid #8F8C9E
      display: flex
      align-items: center
      justify-content: space-between
      padding-right: 30px
      &--circle
        background: #ffffff
        border-radius: 100%
        color: #1F1A3D
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        width: 125px
        height: 125px
        p
          &:first-child
            font-size: 24px
            font-weight: 400
            margin-bottom: 0
          &:last-child
            max-width: 80px
            font-size: 14px
            font-weight: 100
            text-align: center
            line-height: 100%
      &--text
        p
          line-height: 100%

    &-progress
      padding-left: 30px
      margin: auto 0
      &--marks
        display: grid
        grid-template-columns: repeat(5,1fr)
        p
          position: relative
          text-align: right
          display: inline-block
          color: #E9E8EC
          font-weight: 400
          font-size: 12px
          margin-bottom: 0
          span
            display: block
            font-weight: 100
            color: #8F8C9E
          &::before
            position: absolute
            content: ''
            width: 1px
            height: 10px
            background: #8F8C9E
            top: -20px
            left: 107px
      &--wrapper
        position: relative
        background: #8F8C9E
        border-radius: 20px
        width: 100%
        height: 25px
        overflow: hidden
        margin-bottom: 20px
        &--inner
          position: absolute
          background: #FFFFFF
          left: 0
          top: 0
          bottom: 0

          p
            position: absolute
            color: #1F1A3D
            right: 5px
            margin: 0
            top: 50%
            transform: translateY(-50%)
            font-weight: 400
            font-size: 16px





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
      &-add
        background: #8F8C9E
        border-radius: 10px

 </style>
