export default {
    template: `
    <div class="container-fluid login-bg">
    <div class="row text-center">
        <div class="col text-center">
            <img src="./images/white-lg.png" alt="Roku Logo" class="login-logo">
            <h2 class="display-4"><strong>Welcome.</strong> Please login to enjoy your 
            favourite shows and movies!</h2>
        </div>          
     </div>
     <div class="row">
        <form @submit.prevent="login" class="text-center col-lg-6 mx-auto px-4 py-3">
            <div class="form-row align-items-center">

                    <label class="form-control d-none" for="inlineFormInputName">Name</label>
                    <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="Username" required>
     

                    <label class="form-control d-none" for="inlineFormPassword">Name</label>
                    <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="Password" required>
    

                    <button type="submit" class="btn btn-purple">Sign In</button>
                
            </div>
        </form>  
    </div>
</div>
`,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {

            if (this.input.username != "" && this.input.password != "") {
                // fetch the user from the DB
                // generate the form data
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/admin_login.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (typeof data != "object") { // means that we're not getting a user object back
                            console.warn(data);
                            // just for testing - *do something better*
                            alert("authentication failed, please try again");
                        } else {
                            this.$emit("authenticated", true, data);
                            this.$router.replace({ name: "users" });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}