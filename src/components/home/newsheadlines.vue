<template>
    <div class="col-md-12 mt-2" >
        <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action active">
                News Headlines
            </button>
            <button type="button" v-for="(item,index) in stats.slice(0,5)" :key="index" class="list-group-item list-group-item-action" >
                <a :href="item.url">{{item.title}}</a>
            </button>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"headlines",
    components:{

    },
    mounted () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
   },
    data:()=>({
        loading: false,
        stats:[]
    }),
    methods:{
        fetchData () {
        this.loading = true
      
      fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a7ead77a9d4d4005b87949ef73a8cb15').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data.articles
        console.log(this.stats)
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>