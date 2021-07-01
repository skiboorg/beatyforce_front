<template>
  <q-page >
 <div class="page-press">
            <div class="container">
                <h1 class="page-press__title">Пресса</h1>
                <ul class="page-press__months months__list">
                    <li class="months__item" v-for="cat in press_categories" :key="cat.id" v-html="cat.name"></li>

                </ul>
                <div class="press-grid" v-for="cat in press_categories" :key="cat.id">
                    <h2 class="press-grid__title" v-html="cat.name"></h2>
                    <ul class="press-grid__list">
                        <li class="press-grid__item "  v-for="item in cat.items" :key="item.id">
                            <div class="press-grid__pic"><img :src="item.logo" alt=""></div>
                            <div class="press-grid__item-header">
                                <h3 class="press-grid__item-title">{{item.text}}</h3>
                                <div class="press-grid__item-desc"><p>{{item.descr}}</p></div>
                            </div>
                          <a :href="item.url" target="_blank">
                            <img class="press-grid__item-img" :src="item.image" alt="" />
                          </a>

                        </li>

                    </ul>
                </div>

            </div>
        </div>
  </q-page>
</template>

<script>


export default {

  data () {
    return {
      press_categories:[],
    }
  },
   async mounted() {
    const response = await this.$api.get('/api/brand/press')
    this.press_categories = response.data



  },
}
</script>
 <style lang="sass">
.page-press
  padding: 4.688rem 0
  background-color: #1f1a3d

.page-press__title
  margin-bottom: 1.563rem
  font-size: 6.875rem
  font-weight: 100
  line-height: 100%
  text-transform: uppercase
  letter-spacing: -0.05em

.page-press__months
  margin-bottom: 4.688rem



.press-grid
  margin-bottom: 1.563rem

.press-grid__list
  display: -ms-grid
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr))
  grid-gap: 50px

.press-grid__item
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-orient: vertical
  -webkit-box-direction: normal
  -ms-flex-direction: column
  flex-direction: column
  padding-top: 1.563rem
  border-top: 0.063rem solid #fff

.press-grid__item-header
  -webkit-box-flex: 1
  -ms-flex-positive: 1
  flex-grow: 1

.press-grid__item-title
  -webkit-box-flex: 1
  -ms-flex-positive: 1
  flex-grow: 1
  margin-bottom: 0.938rem
  font-size: 1.500rem
  font-weight: 200
  line-height: 1.938rem
  text-transform: uppercase

.press-grid__item-desc
  margin-bottom: 1.563rem
  font-size: 1.000rem
  line-height: 150%
  color: #8f8c9e

.press-grid__pic
  margin-bottom: 1.563rem
  img
    width: 90px
    height: 20px
    object-fit: contain

.press-grid__title
  margin-bottom: 1.563rem
  font-size: 3.125rem
  line-height: 4.000rem
  color: #8f8c9e
  text-transform: uppercase

.months__list
  display: -webkit-box
  display: -ms-flexbox
  display: flex

.months__item
  margin-right: 1.563rem
  font-size: 1.500rem
  line-height: 1.938rem
  text-transform: uppercase

  &:last-child
    margin-right: 0

  span
    color: #8f8c9e
@media (max-width: 500px)
  .page-press
    padding: 50px 0
  .page-press__title
    font-size: 60px
    margin-top: 0
    margin-bottom: 15px
  .press-grid__title
    font-size: 24px
    margin-bottom: 25px
  .page-press__months
    margin-bottom: 50px


 </style>
