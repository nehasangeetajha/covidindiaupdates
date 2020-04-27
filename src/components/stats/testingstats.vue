<template>
    <div class="row">
        <div class=" col-md-12 text-center" v-if="loading">
            <loader/>
        </div>
        <div class="col-md-12" v-else>
            <table class="table mt-2 table-sm">
                <thead id="heading">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Total samples tested till date</th>
                        <th scope="col">Positive cases</th>
                    </tr>
                </thead>
                <tbody id="data" v-for="(item,index) in stats" :key="index">
                    <tr>
                        <th>{{item.day}}</th>
                        <td>{{item.totalSamplesTested}}</td>
                        <td>{{item.totalPositiveCases}}</td>
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
      
      fetch('https://api.rootnet.in/covid19-in/stats/testing/history').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data.data.reverse()
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>