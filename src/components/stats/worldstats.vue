<template>
    <div class="row">
        <div class=" col-md-12 text-center" v-if="loading">
            <loader/>
        </div>
        <div class="col-md-12" v-else>
            <table class="table mt-3 table-sm">
                <thead id="heading">
                    <tr>
                        <th scope="col">Flag</th>
                        <th scope="col">Country</th>
                        <th scope="col">Confirmed (Today)</th>
                        <th scope="col">Confirmed (Total)</th>
                        <th scope="col">Deaths (Today)</th>
                        <th scope="col">Deaths (Total)</th>
                        <th scope="col">Total Recovered</th>
                        </tr>
                </thead>
                
                <tbody id="data" v-for="(item, index) in stats" :key="index">
                    <tr>
                        <td><img :src="item.countryInfo.flag" style="max-width:40%"></td>
                        <th>{{item.country}}</th>
                        <td>{{item.todayCases}}</td>
                        <td>{{item.cases}}</td>
                        <td>{{item.todayDeaths}}</td>
                        <td>{{item.deaths}}</td>
                        <td>{{item.recovered}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import loader from "@/components/common/loader"
export default {
    name:"worldstats",
    components:{
        loader
    },
    mounted () {
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
      
      fetch('https://corona.lmao.ninja/v2/countries?sort=country').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data.reverse()
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>