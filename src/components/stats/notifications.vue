<template>
    <div class="row mt-4">
        <div class="col-md-12" v-if="loading">
            <div class="text-center card-title">
                <loader/>
            </div>
        </div>
        <div class="col-md-3" v-else v-for="(item,index) in stats" :key="index">
            <div class="card m-1" style="border : 1px solid grey; border-radius:10%;">
                <div class="card-body">
                    <h5 class="card-title" style="font-size:1rem">{{item.title}}</h5>
                    <a :href="item.link" target="blank">Click Here for Full Advisory</a>
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
      
      fetch('https://api.rootnet.in/covid19-in/notifications').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data.data.notifications
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>