<template>
    <div class="container">
            <div class="row">
            <div class="col-md-12 mt-5" style="text-align: center;">
                <h1 style="font-family: 'Girassol', cursive;"> COVID-19 India</h1>
                <hr>
                <h3 style="font-family: 'Acme', sans-serif;"> News Headlines</h3>
            </div>
            <div class="col-md-12 text-center" v-if="loading" >
                <loader/>
            </div>
            <div class="col-md-12" v-else v-for="(item,index) in stats" :key="index">
                <div class="card bg-light">
                    <div class="card-body">
                        <h5 class="card-header" style="font-size:1em">{{item.title}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <a :href="item.url" target="blank" class="btn btn-primary">Read Full Article</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import loader from "@/components/common/loader"
export default {
    name:"headlines",
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
      
      fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a7ead77a9d4d4005b87949ef73a8cb15').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data.articles
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>
