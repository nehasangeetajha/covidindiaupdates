<template>
    <div class="row">
        <div class=" col-md-12 text-center" v-if="loading">
            <loader/>
        </div>
        <div class="col-md-12">
            <table class="table mt-3 table-sm">
                <thead id="heading">
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">Contact</th>
                        </tr>
                </thead>
                <tbody id="data" v-for="(item,index) in stats" :key="index">
                    <tr>
                        <th>{{item.loc}}</th>
                        <td>{{item.number}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import loader from "@/components/common/loader"
export default {
    name:"contactnumbers",
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
      
      fetch('https://api.rootnet.in/covid19-in/contacts').then(res=>res.json()).then(data=>{
        this.loading = false
        this.stats = data.data.contacts.regional
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>