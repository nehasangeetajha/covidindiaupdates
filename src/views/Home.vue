<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="container col-md-8">
          <div class="row">
            <div class="col-md-12 py-1 mt-5" style="text-align: center;">
              <h1 style="font-family: 'Girassol', cursive;"> COVID-19 Tracker</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <indiadata/>
            </div>
          </div>


          <div class="row mt-2">
            <div class="col-md-12">
              <worlddata/>
            </div>
          </div>

          <news/>

          <carousel/>

        </div>
        <div class="col-md-3 mt-5">
          <contacts/>
          <resources/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appservice from "@/services/appservice"
import indiadata from "@/components/home/indiahome"
import worlddata from "@/components/home/worldhome"
import carousel from "@/components/home/carousel"
import resources from "@/components/common/resources"
import contacts from "@/components/home/contactshome"
import news from "@/components/home/newsheadlines"

export default {
  name: 'Home',
  components: {
    indiadata,
    worlddata,
    carousel,
    resources,
    contacts,
    news
  },
  mounted(){
    appservice.test()
  }
}
</script>
