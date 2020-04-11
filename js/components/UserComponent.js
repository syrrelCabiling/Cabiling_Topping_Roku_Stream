export default {
    props: ['liveuser'],

    template: `
    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div class="card rounded" @click="navToUserHome()">
            <div class="card-body text-center">
                <img :src="'images/user/' + liveuser.avatar + '.png'" class="rounded-circle img-fluid">
                <p>{{ liveuser.username }}</p>
            </div>
        </div>
    </div>`,

    created: function() {
        if (this.liveuser.avatar === null || this.liveuser.avatar === "null") {
            this.liveuser.avatar = "temp_avatar";
        }
    },

    methods: {
        navToUserHome() {
            // debugger;
            //push through to home page (when a user logs in)
            //they will be stored and can go right to home
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));

            // send this user to its home page, and pass the user object to the home page
            if(this.liveuser.admin == 1){
                // send this user to its home page, and pass the user object to the home page

                //DIDNT WORK
                this.$router.push({ name: "home", params: { currentuser: this.liveuser }})
                } else {
                    this.$router.push({ name: "kidhome", params: { currentuser: this.liveuser }})
                }
           // this.$router.push({ name: "home", params: { currentuser: this.liveuser }})
            }
        }
    }

