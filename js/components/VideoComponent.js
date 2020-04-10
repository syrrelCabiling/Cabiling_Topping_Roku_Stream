import GenreNavComponent from "./GenreNavComponent.js";
import CommentComponent from "./CommentComponent.js";


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

                <!-- Dont delete this section -->
                <div class="socials">
                <img src="images/like.png alt="like">
                <img src="images/comment.png alt="comment">
                <img src="images/share.png alt="share">
                </div>
            </div>

            <div class="col-lg-8 order-1 order-md-2 col-md-9 media-container text-center">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
            </div>
        </div>
       <GenreNavComponent></GenreNavComponent>
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
        GenreNavComponent: GenreNavComponent,
        CommentComponent: CommentComponent
    }
}