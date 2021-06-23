<template>
  <q-page class="main-bg">
    <div class="catalog-wrapper">
      <div class="container">

        <div class="catalog-title flex items-center justify-between">
          <h1>заказы</h1>

        </div>
        <div class="order-items">
          <div class="order-item" v-for="order in orders" :key="order.id">
            <div class="order-item__left">
              <div class="flex column justify-between full-height">
                <div class="">
                  <p :style="{'color':order.status.color}" class="order-item__left-status">{{order.status.name}}</p>

                  <p class="no-margin">Старая Басманная ул., 10, кв 124, Москва, 105064</p>
                  <p class="no-margin">Онлайн-оплата Mastercard **0024</p>
                  <p class="no-margin text-green ">{{new Date(order.created_at).toLocaleDateString()}}</p>
                </div>

                <div class="q-mt-lg flex items-center justify-between">
                  <div class="">
                    <p class="no-margin text-h6">Cумма заказа: {{order.total_price}} ₽</p>
                    <p class="no-margin">Доставка: 300 ₽</p>
                  </div>
                  <div class="flex items-center">
                    <svg class="q-mr-sm" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="white"/>
                    </svg>
                    <p class="text-purple no-margin text-uppercase text-underline inline-block cursor-pointer">Задать вопрос менеджеру</p>
                  </div>
                </div>
              </div>

            </div>
            <div class="order-item__right">
              <div class="catalog-brand__grid">
                <div class="catalog-brand__item" v-for="order_item in order.items" :key="order_item.id">
                  <q-img :ratio="1" :src="order_item.item.image" alt=""/>
                  <p class="catalog-brand__item-name">{{order_item.item.name}}</p>
                   <p class="catalog-brand__item-price">{{order_item.quantity}}шт {{order_item.total_price}} ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="settings" class="catalog-title flex items-center justify-between">
          <h1>настройки</h1>

        </div>
        <div class="order-settings">
          <div class="order-settings-item">
            <p>сменить<br>имя</p>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md q-mt-lg q-mb-lg"
            >
              <q-input
                filled
                v-model="name"
                label="Your name *"
                dark


                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <div>
                <q-btn label="Изменить" type="submit" size="lg" text-color="black" class="login-button full-width"/>
              </div>
            </q-form>
          </div>
            <div class="order-settings-item">
            <p>сменить<br>пароль</p>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md q-mt-lg q-mb-lg"
            >
              <q-input
                filled
                v-model="name"
                label="Your name *"
                dark


                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <div>
                <q-btn label="отправить письмо" type="submit" size="lg" text-color="black" class="login-button full-width"/>
              </div>
            </q-form>
          </div>
            <div class="order-settings-item">
            <p>Адрес<br>доставки</p>

                <q-btn label="добавить адрес" outline icon="add"  size="lg" text-color="white" class="login-button full-width"/>

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
      orders:[]
    }
  },
  async mounted() {
    const response = await this.$api.get('/api/order/all')
    this.orders = response.data



  },
}
</script>
<style lang="sass">

.order
  &-settings
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 25px
    padding-bottom: 150px
    &-item
      background: #504C67
      border-radius: 10px
      padding: 25px
      p
        font-size: 50px
        font-weight: 200
        line-height: 100%
        text-transform: uppercase
  &-items
    margin-bottom: 150px
  &-item
    background: #504C67
    border-radius: 10px
    padding: 25px
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 50px
    margin-bottom: 20px
    &__left-status
      font-weight: 400
      font-size: 24px
      color: #D19630
      &.done
        color: #27AE60


.catalog
  &-wrapper
    background: $bg
    padding-top: 50px
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
