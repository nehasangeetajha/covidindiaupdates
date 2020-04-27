<template>
    <div>
        <div class="row">

            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title" style="font-family: 'Girassol', cursive;" >India</h4>
                        <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                        <div class="row">
                            <div class="col-md-6 my-2">
                                <div class="text-center" v-if="loading" >
                                    <loader/>
                                </div>
                                <div class="card" v-else>
                                    Today Cases : {{stats.todayCases}}
                                </div>
                            </div>
                            <div class="col-md-6 my-2">
                                <div class="text-center card-title" v-if="loading" >
                                    <loader/>
                                </div>
                                <div class="card" v-else>
                                    Today Deaths : {{stats.todayDeaths}}
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                        <div class="col-sm-3">
                            <div class="card" style="background: linear-gradient(to bottom, #a5c9fd 0%,#bde5fc 100%);">
                            <div class="card-body">
                            <i class="fas fa-viruses"></i>
                                <div class="text-center" v-if="loading" >
                                    <loader/>
                                </div>
                                <h5 class="card-title" v-else>{{stats.cases}}</h5>
                                <p class="card-text">
                                    <router-link to="/india" > Total Cases</router-link>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card" style="background: linear-gradient(to bottom, #9be89c 0%,#cdf97d 100%);">
                            <div class="card-body">
                            <i class="fas fa-viruses"></i>
                                <div class="text-center card-title" v-if="loading" >
                                    <loader/>
                                </div>
                                <h5 class="card-title" v-else>{{stats.active}}</h5>
                                <p class="card-text">Active Cases</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card" style="background: linear-gradient(to bottom, #f6ce68 0%,#fda682 100%);">
                            <div class="card-body">
                            <i class="fas fa-viruses"></i>
                                <div class="text-center card-title" v-if="loading" >
                                    <loader/>
                                </div>
                                <h5 class="card-title" v-else>{{stats.recovered}}</h5>
                                <p class="card-text">Recovered</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card" style="background: linear-gradient(to bottom, #fe8683 0%,#ff9d9b 100%);">
                            <div class="card-body">
                            <i class="fas fa-viruses"></i>
                                <div class="text-center card-title" v-if="loading" >
                                    <loader/>
                                </div>
                                <h5 class="card-title" v-else>{{stats.deaths}}</h5>
                                <p class="card-text">Deaths</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loader from "@/components/common/loader"
export default {
    name:"indiahome",
    components:{
        loader
    },
    created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
   },
    data:()=>({
        loading: false,
        stats:{}
    }),
    methods:{
        fetchData () {
        this.loading = true
      
      fetch('https://corona.lmao.ninja/v2/countries/India').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>