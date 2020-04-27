<template>
    <div class="container mt-5">
        <div class="row mt-2">
            <div class="col-md-12">
              <indiadata/>
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
import indiadata from "@/components/home/indiahome"
import stats from "@/components/stats/indiastats"
export default {
    name:'India',
    components:{
        indiadata,
        stats
    }

}
</script>