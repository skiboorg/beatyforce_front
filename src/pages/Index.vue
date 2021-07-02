<template>
  <q-page >
    <section class="hero">
      <div class="container hero__container">
        <div class="hero__text">
          <div class="hero__subtitle"><span>Официальный дистрибьютор и импортер концептуальных косметических брендов</span></div>
          <h1 class="hero__title">Культура идельного ухода</h1>
          <a class="btn" href="index.html#">Перейти в интернет-магазин</a>
        </div>
        <div class="hero__pic"><img src="~assets/hero.png" alt="" /></div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__content">
          <h2 class="section__title">О нас</h2>
          <div class="about__wrapper">
            <div class="about__left">
              <h3 class="section__subtitle">
                Надежный бизнес-партнер
              </h3>
              <a class="btn about__btn" href="index.html#">Подробнее</a>
            </div>
            <div class="about__right">
              <div class="about__right-desc">
                <p>
                  Компания Beauty Force представляет косметические бренды из разных сегментов: масс-маркет, миддл, премиум и фармацевтический. Мы следим за трендами индустрии и выбираем только исключительные марки с
                  безопасными составами, инновационными разработками и уникальной концепцией. Представительства компании Beauty Force открыты в Корее и Италии, а наши партнеры находятся по всей России.
                </p>
              </div>
              <div class="about__features">
                <div class="features">
                  <ul class="features__list">
                    <li class="features__item">
                      <div class="features__item-title">10</div>
                      <div class="features__item-subtitle">лет опыта</div>
                    </li>
                    <li class="features__item">
                      <div class="features__item-title">30+</div>
                      <div class="features__item-subtitle">популярных брендов</div>
                    </li>
                    <li class="features__item">
                      <div class="features__item-title">25+</div>
                      <div class="features__item-subtitle">интернет-магазинов</div>
                    </li>
                    <li class="features__item">
                      <div class="features__item-title">50 000 000+</div>
                      <div class="features__item-subtitle">покупателей</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="excellence">
      <div class="container">
        <div class="slider-excellence">
          <h2 class="section__title section__title_excellence">Преимущества</h2>

          <VueSlickCarousel :arrows="true" >


            <div
              class="slider-excellence__item"
              v-for="(banner,index) in banners" :key="banner.id">
              <img class="slider-excellence__img" :src="banner.image" alt="" />
              <div class="slider-excellence__text">
                <div class="slider-excellence__text-container">
                  <h3 class="slider-excellence__title">{{banner.title}}</h3>
                  <div class="slider-excellence__desc">
                    <p>
                      {{banner.text}}
                    </p>
                  </div>
                  <span class="slider-excellence__number">0{{index+1}} — 0{{banners.length}}</span>
                </div>
              </div>
            </div>


            <template #prevArrow="arrowOption">
              <div class="custom-arrow">
                <button class="slider-excellence__btn slider-excellence__btn_prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>
              </div>
            </template>
            <template #nextArrow="arrowOption">
              <div class="custom-arrow">
                <button class="slider-excellence__btn slider-excellence__btn_next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>
              </div>
            </template>
          </VueSlickCarousel>


        </div>
      </div>
    </section>
    <section class="section_color-white brands">
      <div class="container">
        <div class="brands__content">
          <h2 class="section__title section__title_color-dark">Бренды</h2>
          <div class="section__subtitle section__subtitle_color-dark">
            сотрудничаем c мировыми брендами
          </div>
        </div>
      </div>
      <div class="brands-grid brands-grid__desktop ">
        <div class="brands-grid__row">
          <ul class="brands-grid__list brands-grid__list_top">
            <li class="brands-grid__item"><img src="~assets/logos/1.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/2.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/3.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/4.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/5.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/6.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/7.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/8.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/9.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/10.png" alt=""></li>
          </ul>
        </div>
        <div class="brands-grid__row">
          <ul class="brands-grid__list brands-grid__list_bottom">
            <li class="brands-grid__item"><img src="~assets/logos/1.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/2.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/3.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/4.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/5.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/6.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/7.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/8.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/9.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/10.png" alt=""></li>
          </ul>
        </div>
        <a class="btn btn_color-dark brands-grid__btn" href="index.html#">Смотреть все бренды</a>
      </div>
      <div class="brands-grid brands-grid__mobile ">
        <div class="brands-grid__row">
          <ul class="brands-grid__list ">
            <li class="brands-grid__item"><img src="~assets/logos/1.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/2.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/3.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/4.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/5.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/6.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/7.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/8.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/9.png" alt=""></li>
            <li class="brands-grid__item"><img src="~assets/logos/10.png" alt=""></li>
          </ul>
        </div>

        <router-link class="btn btn_color-dark brands-grid__btn" to="/brands">Смотреть все бренды</router-link>
      </div>
    </section>
    <section class="partners">
      <div class="container">
        <div class="partners__content">
          <h2 class="section__title">Партнеры</h2>
          <h3 class="section__subtitle">
            развиваем бренды с надежными партнерами
          </h3>
          <div class="partners__grid">
            <li class="partners__item"><img src="~assets/L1.png" alt="">  </li>
            <li class="partners__item"><img src="~assets/L2.png" alt="">  </li>
            <li class="partners__item"><img src="~assets/L3.png" alt="">  </li>
            <li class="partners__item"><img src="~assets/L4.png" alt="">  </li>
            <li class="partners__item"><img src="~assets/L5.png" alt="">  </li>
            <li class="partners__item"><img src="~assets/L6.png" alt="">  </li>
            <li class="partners__item"><img src="~assets/L7.png" alt="">  </li>
            <li class="partners__item"><img src="~assets/L8.png" alt="">  </li>


            <router-link class="btn partners__grid-link" to="/partnership">Смотреть всех партнеров</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="marketing">
      <div class="container">
        <div class="marketing__content">
          <h2 class="section__title">Маркетинг</h2>
          <h3 class="section__subtitle">Digital-маркетинг</h3>
          <div class="marketing-features">
            <ul class="marketing-features__list">
              <li class="marketing-features__item">
                <svg class="marketing-features__icon" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="47.5" cy="22.5" r="22" stroke="#B4B2BB"/>
                  <circle cx="22.5" cy="47.5" r="22.5" fill="#B4B2BB"/>
                </svg>

                <h3 class="marketing-features__title">SMM</h3>
                <div class="marketing-features__desc"><p>Работаем со всеми основными соцсетями, создаем концепции, контент (визуальный и текстовый), настраиваем рекламу и привлекаем новых пользователей. </p></div>
              </li>
              <li class="marketing-features__item">
                <svg class="marketing-features__icon" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="34.5" stroke="#B4B2BB"/>
                </svg>
                <h3 class="marketing-features__title">Сайты</h3>
                <div class="marketing-features__desc"><p>Создаем стильные и эффективные сайты, лендинги и интернет-магазины, наполняем их контентом и настраиваем рекламу. </p></div>
              </li>
              <li class="marketing-features__item">
                <svg class="marketing-features__icon" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="50" r="19.5" stroke="#B4B2BB"/>
                  <circle cx="50" cy="20" r="20" fill="#B4B2BB"/>
                  <circle cx="20" cy="20" r="19.5" stroke="#8F8C9E"/>
                  <circle cx="50" cy="50" r="19.5" stroke="#8F8C9E"/>
                </svg>

                <h3 class="marketing-features__title">PR</h3>
                <div class="marketing-features__desc"><p>Берем на себя весь спектр PR-поддержек: от разработки стратегии, создания контента, продвижения в СМИ, до работы с блогерами и селебрити.</p></div>
              </li>
              <li class="marketing-features__item">
                <svg class="marketing-features__icon" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="34.5" stroke="#B4B2BB"/>
                  <circle cx="35" cy="35" r="15" fill="#B4B2BB"/>
                </svg>

                <h3 class="marketing-features__title">Event</h3>
                <div class="marketing-features__desc"><p>Организовываем мероприятия и различные активности с креативной концепцией, оформлением, приглашением гостей. </p></div>
              </li>
              <li class="marketing-features__item">
                <svg class="marketing-features__icon" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1" fill="white">
                    <path d="M0.000485221 35C0.000484616 41.9223 2.0532 48.6892 5.89905 54.445C9.74489 60.2007 15.2111 64.6867 21.6066 67.3358C28.002 69.9848 35.0393 70.678 41.8286 69.3275C48.618 67.977 54.8544 64.6436 59.7492 59.7487C64.6441 54.8539 67.9775 48.6175 69.328 41.8282C70.6785 35.0388 69.9853 28.0015 67.3363 21.6061C64.6872 15.2107 60.2012 9.74441 54.4454 5.89856C48.6897 2.05271 41.9228 -2.53717e-06 35.0005 -3.0598e-06L35.0005 35L0.000485221 35Z"/>
                  </mask>
                  <path d="M0.000485221 35C0.000484616 41.9223 2.0532 48.6892 5.89905 54.445C9.74489 60.2007 15.2111 64.6867 21.6066 67.3358C28.002 69.9848 35.0393 70.678 41.8286 69.3275C48.618 67.977 54.8544 64.6436 59.7492 59.7487C64.6441 54.8539 67.9775 48.6175 69.328 41.8282C70.6785 35.0388 69.9853 28.0015 67.3363 21.6061C64.6872 15.2107 60.2012 9.74441 54.4454 5.89856C48.6897 2.05271 41.9228 -2.53717e-06 35.0005 -3.0598e-06L35.0005 35L0.000485221 35Z" stroke="#B4B2BB" stroke-width="2" mask="url(#path-1-inside-1)"/>
                  <path d="M35 1.5299e-06C30.4037 1.73081e-06 25.8525 0.905306 21.6061 2.66422C17.3597 4.42314 13.5013 7.00122 10.2513 10.2513C7.00121 13.5013 4.42313 17.3597 2.66421 21.6061C0.905302 25.8525 -1.73081e-06 30.4037 -1.5299e-06 35L35 35L35 1.5299e-06Z" fill="#B4B2BB"/>
                </svg>

                <h3 class="marketing-features__title">Анализ</h3>
                <div class="marketing-features__desc"><p>Проводим маркетинговые исследования рынка, чтобы понять потребности покупателя, поведение конкурентов и выстроить эффективную стратегию.</p></div>
              </li>
              <li class="marketing-features__item">
                <svg class="marketing-features__icon" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="47.5" cy="47.5" r="22" stroke="#8F8C9E"/>
                  <circle cx="47.5" cy="22.5" r="22.5" fill="#B4B2BB"/>
                  <circle cx="22.5" cy="22.5" r="22" stroke="#8F8C9E"/>
                </svg>

                <h3 class="marketing-features__title">SERM</h3>
                <div class="marketing-features__desc"><p>Создаем положительный образ компаний и управляем репутацией в онлайн. Обрабатываем и решаем проблемы негативных отзывов. </p></div>
              </li>
              <li class="">
                <a class="btn marketing__btn" href="index.html#">Подробнее</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="video">
      <div class="container">
        <div class="video__content">
          <h2 class="section__title">Видео</h2>
          <h3 class="section__subtitle">Смотрите наши обзоры</h3>
          <div class="video__slider slider-video">

            <VueSlickCarousel :arrows="true" v-bind="videoBannersSettings" >
              <div class="slider-video__item" v-for="video in videos" :key="video.id">
                <a target="_blank" class="slider-video__slide" :href="`https://www.youtube.com/watch?v=${video.url}`">
                  <img class="slider-video__img" :src="video.image" alt="" />
                  <h3 class="slider-video__title">{{video.text}}</h3>
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
        </div>
      </div>
    </section>
    <section class="instagram">
      <div class="container">
        <div class="instagram__content">
          <div class="instagram__left">
            <div class="instagram__pic"><img class="instagram__img" src="~assets/insta-01.jpg" alt="" /></div>
            <div class="instagram__pic"><img class="instagram__img" src="~assets/insta-02.jpg" alt="" /></div>
            <div class="instagram__pic"><img class="instagram__img" src="~assets/insta-03.jpg" alt="" /></div>
            <div class="instagram__pic"><img class="instagram__img" src="~assets/insta-04.jpg" alt="" /></div>
          </div>
          <div class="instagram__right">
            <h2 class="section__title">Instagram</h2>
            <h3 class="section__subtitle">
              Больше полезного <br />
              контента в instagram
            </h3>
            <a class="btn instagram__btn" href="index.html#">
              Перейти в <br />
              instagram
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <ContactForm title="сделаем первый шаг к сотрудничеству" subtitle="контакты"/>
      </div>

    </section>



  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import ContactForm from "components/common/ContactForm";

export default {
  components: {ContactForm,VueSlickCarousel },
  // async preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
  //   // return store.dispatch('unit/fetchItem', currentRoute.params.unit_slug)
  //   return {(await store.dispatch('data/fetchBanners')),  await store.dispatch('data/fetchVideos')}
  //
  // },
  async serverPrefetch () {
    await this.$store.dispatch('data/fetchBanners')
    await this.$store.dispatch('data/fetchVideos')

  },
  data () {
    return {
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
      }


    }
  },

  computed:{
    ...mapGetters('data',['banners','videos'])
  }

}
</script>
