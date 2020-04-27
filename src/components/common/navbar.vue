<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 fixed-top">
            <router-link to="/" class="nav-link"> Covid-19</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link"> 
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/world" class="nav-link">World Stats</router-link>
                      </li>
                    <li class="nav-item">
                      <router-link to="/india" class="nav-link">India Stats</router-link>
                    </li>

                    <li class="nav-item">
                     <router-link to="/news" class="nav-link">News headlines</router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to="/testing" class="nav-link">Testing Stats(India)</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/hospitals" class="nav-link">Hospitals and Beds(India)</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contacts" class="nav-link">Contacts</router-link>
                      </li>
                    <li class="nav-item">
                     <router-link to="/notifications" class="nav-link">Notifications and Advisories</router-link>
                    </li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/" class="nav-link">
                        <span style="margin-right:250px"></span> #
                      <font style="color:orangered">India</font>
                      <font style="color:silver">Fights</font>
                      <font style="color:green">Corona</font>
                    </router-link>
                    </li>
                    
                  </ul>
                </div>
              </nav>
    </div>
</template>

<script>
export default {
    name:"navbar",
}
</script>