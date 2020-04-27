<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5" style="text-align: center;">
                    <h1 style="font-family: 'Girassol', cursive;"> COVID-19 India</h1>
                    <hr>
                    <h3 style="font-family: 'Acme', sans-serif;"> Contact Details </h3>
                </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <home/>
            </div>
        </div>
        <stats/>
        
    </div>
    
</template>

<script>
import stats from "@/components/stats/contactnumbers"
import home from "@/components/home/contactshome"
export default {
    name:'Contacts',
    components:{
        stats,
        home
    }

}
</script>