<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5" style="text-align: center;">
                    <h1 style="font-family: 'Girassol', cursive;"> COVID-19 India</h1>
                    <hr>
                    <h3 style="font-family: 'Acme', sans-serif;"> Notifications and Advisories by Govt of India </h3>
            </div>
        </div>
        <stats/>
        
    </div>
    
</template>

<script>
import stats from "@/components/stats/notifications"

export default {
    name:'Contacts',
    components:{
        stats
    }

}
</script>