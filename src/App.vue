<template>
  <div id="app">
      <div class="row mb-2">
        <div class="col-md-12">
          <navbar/> 
        </div>
      </div>

        <div class="row">
          <div class="col-md-12">
            <router-view>
            
            </router-view>
          </div>
        </div>

      <div class="row m-4">
        
      </div>

    
  </div>

</template>

<script>
import navbar from "@/components/common/navbar"




export default {
  name:"app",
  components:{
    navbar
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



</style>
