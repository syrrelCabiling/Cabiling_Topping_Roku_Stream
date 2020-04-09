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
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
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

    }
  }
}