<template>
  <q-page class="main-bg">
    <div class="container ">
      <div v-if="cart.items.length>0" class="cart-wrapper">
        <div class="cart-items">
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
            <q-item-section top class="col-2">
              <q-item-label >
                <q-btn-group  class="catalog-brand__item-add">
                    <q-btn color="white" dense :disable="is_creating" :loading="loading" @click="itemAction(item.item.id,'remove_quantity')" text-color="indigo-10" icon="remove" />
                    <q-btn color="white" dense :ripple="false" disable :loading="loading" text-color="indigo-10" :label="`${item.quantity} шт`" />
                    <q-btn color="white" dense :disable="is_creating" :loading="loading" @click="itemAction(item.item.id,'add_quantity')" text-color="indigo-10" icon="add" />
                  </q-btn-group>

              </q-item-label>

            </q-item-section>

            <q-item-section top>
              <q-item-label >
               <p class="q-mb-none text-h5 text-weight-light">{{item.price}} ₽</p>

              </q-item-label>

            </q-item-section>

            <q-item-section top side>

              <q-btn class="gt-xs" @click="itemAction(item.id,'remove_item')" size="12px" flat dense round icon="close" />


            </q-item-section>
          </q-item>
        </div>
        <div class="cart-total">
          <div class="flex items-center justify-between q-mb-md">
            <p class="no-margin text-purple text-h6 text-weight-light">Cумма заказа</p>
            <p class="no-margin text-main text-h6  text-weight-light">{{cart.total_price}} ₽</p>
          </div>
            <div class="flex items-center justify-between q-mb-lg">
            <p class="no-margin text-purple text-h6 text-weight-light text-lh-100">Доставка<br>
(по юр. адресу)</p>
            <p class="no-margin text-main text-h6  text-weight-light">1 000 ₽</p>
          </div>
           <div class="flex items-center justify-between q-mb-lg">
            <p class="no-margin text-main text-h6 text-lh-100">ИТОГО</p>
            <p class="no-margin text-main text-h5  ">{{cart.total_price}} ₽</p>
          </div>
          <q-btn :loading="is_creating" @click="createOrder" label="отправить заявку" type="submit" size="lg" text-color="white" class="main-button full-width q-mb-sm"/>
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
      await this.$api.post(`/api/order/create/`)
      await this.getCart()
      await this.getUser()
      this.$router.push('/lk/orders')
    }

  }
}
</script>
<style lang="sass">
.cart
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
    background: #FFFFFF
    border-radius: 20px
    padding: 25px 20px
</style>
