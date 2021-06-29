<template>
 <section class="section-form">

        <div class="section-form__content">
          <div class="section-form__left">
            <h2 class="section__title">{{subtitle}}</h2>
            <h3 class="section__subtitle">
              {{title}}
            </h3>
            <q-form class="mainform" >
              <div class="mainform__row">
                <q-input dark label-color="white" v-model="text" label="Телефон" />
              </div>
              <div class="mainform__row">
                <q-input dark label-color="white" v-model="text" label="Контактное лицо" />
              </div>
              <div class="mainform__row">
                <q-input dark label-color="white" v-model="text" label="Электронная почта" />
              </div>
              <div class="mainform__row">
                <q-input dark label-color="white" v-model="text" label="Компания" />
              </div>

           <div class="mainform__row mainform__row_flex">
             <q-btn label="Отправить" class="btn mainform__btn mainform__button" type="submit" text-color="indigo-10" color="white"/>

                <span class="mainform__disclaimer">
                                    Нажимая кнопку, вы соглашаетесь
                                    с политикой конфиденциальности
                                </span>
              </div>
            </q-form>
          </div>
          <div class="section-form__right">
            <div class="section-form__contacts">
              <div class="section-form__row"><a class="section-form__title section-form__title_size-xl" href="index.html#">+7 (499) 409-21-80</a><a class="section-form__subtitle" href="index.html#">info@beforce.ru</a></div>
              <div class="section-form__row"><span class="section-form__subtitle">Москва, ул. Павловская, д. 27, стр. 4</span></div>
              <div class="section-form__row"><span class="section-form__title">Офис</span><span class="section-form__subtitle">Пн - Пт 10:00 - 18:00</span></div>
              <div class="section-form__row"><span class="section-form__title">Склад</span><span class="section-form__subtitle">Пн - Пт 10:00 - 20:00</span></div>
            </div>
          </div>
        </div>

    </section>
</template>

<script>


export default {
props:['title','subtitle'],
  data () {
    return {

    }
  }
}
</script>
 <style lang="sass">

 </style>
