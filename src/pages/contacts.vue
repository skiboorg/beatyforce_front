 <template>
  <q-page >
  <div class="page-contacts">
            <div class="container">
                <div class="branches">
                    <ul class="branches__list">
                        <li class="branches__item">
                            <h2 class="branches__title">Россия</h2>
                            <a class="branches__phone" href="tel:84994092180">+7 (499) 409-21-80</a>
                            <span class="branches__address">
                                115093 Россия, г. Москва, <br />
                                ул. Павловская, д. 27, стр. 4
                            </span>
                            <a class="branches__email" href="mailto:info@beforce.ru">info@beforce.ru</a>
                        </li>
                        <li class="branches__item">
                            <h2 class="branches__title">Италия</h2>
                            <a class="branches__phone" href="tel:390230462659">+39 02 3046-2659</a>
                            <span class="branches__address">
                                20126 Milano, Italy, Via Libero Temolo, <br />
                                4/Piano 4
                            </span>
                            <a class="branches__email" href="mailto:milan@beforce.ru">milan@beforce.ru</a>
                        </li>
                        <li class="branches__item">
                            <h2 class="branches__title">Республика Корея</h2>
                            <a class="branches__phone" href="tel:07046805682">+82 070 4680-5682</a>
                            <span class="branches__address">
                                06172, South Korea, Seoul, 4F,21, Bongeunsa-ro <br />
                                108-gil, Gangnam-gu
                            </span>
                            <a class="branches__email" href="mailto:seoul@beforce.ru">seoul@beforce.ru</a>
                        </li>
                    </ul>
                </div>
                <div class="departments">
                    <h2 class="departments__title">Отделы офиса в России</h2>
                    <ul class="departments__list">
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">Продаж</h3>
                            <a class="departments__link" href="mailto:sales@beforce.ru">sales@beforce.ru</a>
                        </li>
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">Маркетинг</h3>
                            <a class="departments__link" href="mailto:marketing@beforce.ru">marketing@beforce.ru</a>
                        </li>
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">Дизайн</h3>
                            <a class="departments__link" href="mailto:design@beforce.ru">design@beforce.ru</a>
                        </li>
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">Юридический</h3>
                            <a class="departments__link" href="mailto:legal@beforce.ru">legal@beforce.ru</a>
                        </li>
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">IT</h3>
                            <a class="departments__link" href="mailto:it@beforce.ru">it@beforce.ru</a>
                        </li>
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">Финансы</h3>
                            <a class="departments__link" href="mailto:fin@beforce.ru">fin@beforce.ru</a>
                        </li>
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">Логистика</h3>
                            <a class="departments__link" href="mailto:logistics@beforce.ru">logistics@beforce.ru</a>
                        </li>
                        <li class="departments__item">
                            <span class="departments__subtitle">Отдел</span>
                            <h3 class="departments__item-title">Склад</h3>
                            <a class="departments__link" href="mailto:stock@beforce.ru">stock@beforce.ru</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="map" id="map"></div>
          <section class="section-form">
    <div class="container">
        <div class="section-form__content">
            <div class="section-form__left">
                <h2 class="section__title">Контакты</h2>
                <h3 class="section__subtitle">
                    сделаем первый шаг к сотрудничеству
                </h3>
                <form class="mainform" id="mainform">
                    <div class="mainform__row"><input class="mainform__input" type="tel" id="phone" placeholder="Телефон" name="phone" required /><label class="mainform__label" for="phone">Телефон*</label></div>
                    <div class="mainform__row">
                        <input class="mainform__input" type="text" id="contface" placeholder="Контактное лицо" name="contface" required /><label class="mainform__label" for="contface">Контактное лицо*</label>
                    </div>
                    <div class="mainform__row"><input class="mainform__input" type="text" id="email" placeholder="Электронная почта" name="email" required /><label class="mainform__label" for="email">Электронная почта*</label></div>
                    <div class="mainform__row"><input class="mainform__input" type="text" id="company" placeholder="Компания" name="company" required /><label class="mainform__label" for="company">Компания*</label></div>
                    <div class="mainform__row mainform__row_flex">
                        <button class="btn mainform__btn mainform__button" type="submit">Отправить</button>
                        <span class="mainform__disclaimer">
                                    Нажимая кнопку, вы соглашаетесь
                                    с политикой конфиденциальности
                                </span>
                    </div>
                </form>
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
    </div>
</section>
        </div>
  </q-page>
</template>

<script>


export default {

  data () {
    return {

    }
  }
}
</script>
 <style lang="sass">

 </style>
