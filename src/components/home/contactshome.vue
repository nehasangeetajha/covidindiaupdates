<template>
    <div class="card text-center" id="info">
        <div class="card-header">
            <h5 class="card-title">Emergency contacts</h5>
        </div>
        <div class="card-body">
                <h5 class="card-title">Contact Number : 91-11-23978046</h5>
                <p class="card-text">Toll Free No. : 1075 </p>
                <p class="card-text">Email : ncov2019@gov.in</p>
                <p class="card-text">
                    <a href="https://wa.me/919013151515" target="blank">
                        <img style="width:3rem" src="https://tse1.mm.bing.net/th?id=OIP.XS_8JEUXwrElWkjbKf0QKQEsEs&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"/>
                    </a>
                    <a href="https://twitter.com/MoHFW_INDIA" target="blank">
                        <img style="width:3rem" src="https://tse1.mm.bing.net/th?id=OIP.4_FYWgEE8-mRJdW6DFZHRAHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119"/>
                    </a>
                    <a href="https://www.facebook.com/MoHFWIndia" target="blank">
                    <img style="width:3rem" src="https://tse1.mm.bing.net/th?id=OIP.wOPYZ0FBrg5cMj5uwD00nwHaHa&pid=Api&rs=1&c=1&qlt=95&w=108&h=108"/>
                    </a>
                    
                </p>
                <router-link to="/contacts">State/Regional Contacts</router-link>
                   
        </div>          
    </div>
</template>

<script>
export default {
    name:"indiahome",
    components:{

    },
    mounted () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
   },
    data:()=>({
        loading: false,
        // stats:{},
        // primaryContact :{}
    }),
    methods:{
        fetchData () {
        this.loading = true
      
      fetch('https://api.rootnet.in/covid19-in/contacts').then(res=>res.json()).then(data=>{
        this.loading = false
        // this.stats = data.data
        // this.primaryContact = this.stats.contact.primary
        
       }).catch(e=>{
            console.log(e)
        })
     }
    }
}
</script>