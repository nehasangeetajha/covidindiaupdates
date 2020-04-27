<template>
    <div class="container mt-5">
        <div class="row mt-2">
            <div class="col-md-12">
              <worlddata/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <stats/>
            </div>
        </div>
    </div>
</template>

<script>
import worlddata from "@/components/home/worldhome"
import stats from "@/components/stats/worldstats"
export default {
    name:'World',
    components:{
        worlddata,
        stats
    }

}
</script>