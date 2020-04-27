<template>
    <div class="row">
        <div class="col-md-12" v-if="loading">
            <div class="text-center card-title">
                <loader/>
            </div>
        </div>
        <div class="col-md-3" v-else v-for="(item,index) in stats" :key="index">
            <div class="card m-2" style="border : 2px solid grey">
                <h5 class="card-header">{{item.state}}</h5>
                <div class="card-body">
                    
                    <p class="card-title">Confirmed: {{item.confirmed}}</p>
                    <p class="card-text">Active: {{item.active}}</p>
                    <p class="card-text">Deaths: {{item.deaths}}</p>
                    <p class="card-text">Recovered: {{item.recovered}}</p>
                </div>
            </div>
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
      
      fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data.data.statewise
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>