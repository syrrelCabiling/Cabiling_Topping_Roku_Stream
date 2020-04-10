import UserHomeComponent from "./UserHomeComponent.js";


export default {
    name: "Sidebar",
    template: `
    <section>
    <div class="container-fluid">
    <div class="row" id="sidebarComp">
    <header class="col-sm-12 fixed-top roku-logo  pt-3 pb-3">
      <img src="./images/white-lg.png" alt="Roku logo">

     
      <div id="sidebar">
      <nav class="d-inline">
      <ul>
        <!-- <li>Kids</li> -->
        <li v-if="authenticated"><i class="fas fa-user-circle"></i></li>
        <li v-if="administrator"><i class="fas fa-cog"></i></li>
        <li v-if="authenticated" v-on:click="logout()"><i class="fas fa-power-off"></i></li>
      </ul>
    </nav>
        <div class="burger-toggle" onclick="toggleSidebar()">
        
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="mt-5">
        <li>What Do You Want To See?</li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Music</a></li>
        <br><br>
        <br><br>
        <br><br>
        <br><br>
        <br><br>
        <br><br>
          <li><a href="#">Edit User</a></li>
        <li><a v-on:click='switchProfiles()'>Switch Profiles</a></li>
        </ul>
      
      <!-- Profile Nav outside -->
      <ul>
      
      </ul>
      </div>
   
    </header>
      </div>
    </div> <!-- end container fluid -->
    </section>
    `,
    data: function() {
      return {
      authenticated: true,
      administrator: true,
      user: [],
      }
      //currentUser: {},
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },
      logout() {
        // push user back to login page
        this.$router.push({ name: "login" });
        this.authenticated = false;
        this.administrator = false;

    },
    switchProfiles() {
      this.activeComponent = KidComponent;
    }
  }
}