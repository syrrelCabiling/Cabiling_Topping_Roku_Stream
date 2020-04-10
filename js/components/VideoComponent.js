import CommentComponent from "./CommentComponent.js";
//import GenreNavComponent from "./GenreNavComponent.js";


export default {
    name: "TheVideoComponent",

    template: `
    <section class="videoComp">
        <div class="row">
            <div class="col-lg-4 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.movies_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
                <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
                <span class="media-time">{{currentMediaDetails.movies_rating}}</span>

                <span class="media-year">{{currentMediaDetails.movies_year}}</span>
                <br>

                <!-- Facebook plugin -->
                <CommentComponent></CommentComponent>

           
               
            </div>

            <div class="col-lg-8 order-1 order-md-2 col-md-9 media-container text-center">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
            </div>
        </div>
        <div class="row filter-genre">
    <div class="col-12">
        <ul>
            <li>
                <a href="all" @click.prevent="retrieveVideoContent">All</a>
            </li>
            <li>
                <a href="Action" @click.prevent="filterMedia('Action')">Action</a>
            </li>
            <li>
                <a href="Adventure" @click.prevent="filterMedia('Adventure')">Adventure</a>
            </li>
            <li>
                <a href="Comedy" @click.prevent="filterMedia('Comedy')">Comedy</a>
            </li>
            <li>
                <a href="Thriller" @click.prevent="filterMedia('Thriller')">Thriller</a>
            </li>
    
            <li>
                <a href="Musical" @click.prevent="filterMedia('Musical')">Musical</a>
            </li>
            <li>
                <a href="Science Fiction" @click.prevent="filterMedia('Science Fiction')">Science Fiction</a>
            </li>
            <li>
                <a href="Family" @click.prevent="filterMedia('Family')">Family</a>
            </li>
            <li>
                <a href="Fantasy" @click.prevent="filterMedia('Fantasy')">Fantasy</a>
            </li>
            <li>
                <a href="Romance" @click.prevent="filterMedia('Romance')">Romance</a>
            </li>
           

        </ul>
    </div>
</div>

        <div class="row">
         <div class="col-12 col-sm-9">
            <div class="thumb-wrapper">
                <img v-for="item in allRetrievedVideos" :src="'images/' + item.movies_cover" alt="media
                thumb" @click="loadNewMovie(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedVideos: []
        }
    },

    created: function() {
        this.retrieveVideoContent();
    },

    

    methods: {
        filterMedia(filter){
            let url = `./admin/index.php?media=movies&filter=${filter}`;


            fetch(url)
            .then(res => res.json())
            .then(data => {
               //localStorage.setItem("cachedFilter", JSON.stringify(data));

                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];
            })

        },
        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            if (localStorage.getItem("cachedVideos")) {
                this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedVideos"));

                this.currentMediaDetails = this.allRetrievedVideos[0];

            } else {

                let url = `./admin/index.php?media=movies`;
                //store a video
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedVideos", JSON.stringify(data));

                    this.allRetrievedVideos = data;
                    this.currentMediaDetails = data[0];
                })

            }
           


        },

        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
        }
    },
    components: {
       // GenreNavComponent: GenreNavComponent,
        CommentComponent: CommentComponent
    }
}