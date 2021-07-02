<template>
  <q-page class="main-bg">
    <div class="container ">
      <div v-if="cart.items.length>0" class="cart-wrapper">
        <div class="cart-items">
          <div class="cart-delivery">
            <h3 class="text-purple">выберите способ <span>доставки:</span></h3>
            <div class="q-gutter-sm q-mb-lg">
              <div ></div>
              <q-radio color="indigo-10" v-model="delivery" val="Самовывоз" class="text-indigo-10" label="Самовывоз" />
              <q-radio color="indigo-10" v-model="delivery" val="Доставка" class="text-indigo-10" label="Доставка" />
            </div>
            <div v-if="delivery==='Самовывоз'" class="text-indigo-10">
              <div class="flex items-center">
                <q-icon name="location_on" color="indigo-10" size="30px"></q-icon>
                <p style="line-height: 100%" class="no-margin">Вывезти товар со склада можно по адресу:
                  <span class="block text-weight-bold">Варшавское ш., 25А строение 1, Москва, 117105</span></p>
              </div>
            </div>
            <div v-else class="flex items-start">
              <q-input style="flex-basis: 380px" bottom-slots filled  v-model="delivery_address" label="Введите адрес доставки"   dense>
                <template v-slot:before>
                  <q-icon name="local_shipping" />
                </template>
              </q-input>

              <p class="no-margin full-width text-indigo-10">Менеджер расчитает стоимость доставки
и свяжется с вами </p>
            </div>
          </div>
          <q-item class="cart-item" v-for="item in cart.items" :key="item.id">
            <q-item-section top avatar >
              <q-avatar square size="75px">
                <img :src="item.item.image">
              </q-avatar>
            </q-item-section>
            <q-item-section top class="col-6">
              <q-item-label >
                <p class="q-mb-none text-h5 text-weight-light">{{item.item.name}}</p>
              </q-item-label>
            </q-item-section>
            <q-item-section  top class="col-lg-2 col-md-2 col-sm-2  col-xs-12 cart-buttons">
              <q-item-label >
                <q-btn-group  class="catalog-brand__item-add">
                  <q-btn color="white" dense :disable="is_creating" :loading="loading" @click="itemAction(item.item.id,'remove_quantity')" text-color="indigo-10" icon="remove" />
                  <q-btn color="white" dense :ripple="false" disable :loading="loading" text-color="indigo-10" :label="`${item.quantity} шт`" />
                  <q-btn color="white" dense :disable="is_creating" :loading="loading" @click="itemAction(item.item.id,'add_quantity')" text-color="indigo-10" icon="add" />
                </q-btn-group>
              </q-item-label>
            </q-item-section>
            <q-item-section top class="cart-summ">
              <q-item-label >
                <p class="q-mb-none text-h5 text-weight-light">{{item.price}} ₽</p>
              </q-item-label>
            </q-item-section>
            <q-item-section class="cart-delete" top side>
              <q-btn  @click="itemAction(item.id,'remove_item')" size="12px" flat dense round icon="close" />
            </q-item-section>
          </q-item>
        </div>
        <div class="cart-total">
          <div class="flex items-center justify-between q-mb-md">
            <p class="no-margin text-white text-h6 text-weight-light">Cумма заказа</p>
            <p class="no-margin text-white text-h6  text-weight-light">{{cart.total_price}} ₽</p>
          </div>
          <div class="flex items-center justify-between q-mb-lg">
            <p class="no-margin text-white text-h6 text-weight-light text-lh-100">Доставка<br>
              (по юр. адресу)</p>
            <p class="no-margin text-white text-h6  text-weight-light">1 000 ₽</p>
          </div>
          <div class="flex items-center justify-between q-mb-lg">
            <p class="no-margin text-white text-h6 text-lh-100">ИТОГО</p>
            <p class="no-margin text-white text-h5  ">{{cart.total_price}} ₽</p>
          </div>
          <q-btn :loading="is_creating" @click="createOrder" label="отправить заявку" color="white" type="submit" size="lg" text-color="indigo-10" class="main-button full-width q-mb-sm"/>
          <p class="no-margin text-purple text-caption text-weight-light">Нажимая на кнопку «оплатить заказ», я принимаю условия
            <router-link class="text-underline" to="\">публичной оферты</router-link> и <router-link class="text-underline" to="\">политики конфиденциальности</router-link>
          </p>
        </div>
      </div>
      <div v-else style="height: 100vh" class="flex column items-center justify-center text-h5 ">
        <p>Корзина пуста</p>
        <p class="cursor-pointer" @click="$router.push('/lk/catalog')">В каталог</p>

      </div>
    </div>
  </q-page>
</template>

<script>

import { mapActions, mapGetters} from 'vuex'
export default {

  data () {
    return {
      loading:false,
      is_creating:false,
      delivery:'Самовывоз',
      delivery_address:null,
      cart:{
        items:[]
      }
    }
  },
  async mounted() {
    await this.getCart()

  },
  methods:{
    ...mapActions('auth',['getUser']),
    async getCart(){
      const response_cart = await this.$api.get('/api/cart/full')
      this.cart = response_cart.data
      console.log('cart',this.cart)
    },
    async itemAction(id,action){
      this.loading=true
      await this.$api.get(`/api/cart/${action}?id=${id}`)
      await this.getCart()
      this.loading=false
    },
    async createOrder(){
      await this.$api.post(`/api/order/create/`,{
        delivery:this.delivery,
        delivery_address:this.delivery_address
      })
      await this.getCart()
      await this.getUser()
      this.$router.push('/lk/orders')
    }

  }
}
</script>
<style lang="sass">
.cart
  &-delivery
    background: #FFFFFF
    border-radius: 20px
    padding: 25px
    margin-bottom: 25px
    h3
      margin-top: 0
      margin-bottom: 30px
      text-transform: uppercase
      font-size: 50px
      line-height: 64px
      font-weight: 200
      span
        display: block
  &-wrapper
    display: grid
    grid-template-columns: 3fr 1fr
    grid-gap: 25px
  &-items
  &-item
    align-items: center
    padding: 25px
    border: 1px solid #504C67
    box-sizing: border-box
    border-radius: 20px
    margin-bottom: 15px
    &:last-child
      margin-bottom: 0
  &-total
    height: fit-content
    background: #504C67
    border: 1px solid #FFFFFF
    box-sizing: border-box
    border-radius: 20px
    padding: 25px 20px
@media (max-width: 600px)
  .cart
    &-wrapper
      grid-template-columns: 1fr
    &-item
      position: relative
      display: grid
      grid-template-columns: 1fr 1fr
      grid-row-gap: 10px
      & .cart-delete
        position: absolute
        right: 20px
        top: 20px
    &-buttons
      order: 2
      width: 100%
    &-summ
      order: 1


  .q-item__section--main + .q-item__section--main
    margin: 0
</style>
