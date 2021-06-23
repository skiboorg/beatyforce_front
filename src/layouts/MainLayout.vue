<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>


import Header from "components/common/Header";
import Footer from "components/common/Footer";
export default {
  components: {Footer, Header},
  data () {
    return {

    }
  }
}
</script>
