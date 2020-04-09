export default {
    name: "TheVideoComponent",

    template: `
    <section class="videoComp">
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.movies_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
                <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
                <span class="media-time">{{currentMediaDetails.movies_rating}}</span>

                <span class="media-year">{{currentMediaDetails.movies_year}}</span>

                <div class="socials">
                <img src="images/like.png alt="like">
                <img src="images/comment.png alt="comment">
                <img src="images/share.png alt="share">
                </div>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
            </div>
        </div>
        <div class="row filter-genre">
        <div class="col-12">
        <ul>
        <li><a href="index.php?filter=Running Shoes">Action</a></li>
            <li><a href="index.php?filter=Shorts">Adventure</a></li>
            <li><a href="index.php?filter=Sports Bras">Comedy</a></li>
            <li><a href="index.php?filter=Jackets">Drama</a></li>
            <li><a href="index.php?filter=Swim">Thriller</a></li>
            <li><a href="index.php?filter=Shorts">Horror</a></li>
            <li><a href="index.php?filter=Sports Bras">Musical</a></li>
            <li><a href="index.php?filter=Jackets">Science Fiction</a></li>
            <li><a href="index.php?filter=Swim">Family</a></li>
            <li><a href="index.php?filter=Sports Bras">Fantasy</a></li>
            <li><a href="index.php?filter=Jackets">Romance</a></li>
        </ul>
        </div>
        </div>
        <div class="row">
         <div class="col-12 col-sm-9">
            <div class="thumb-wrapper clearfix">
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

            if (localStorage.getItem("cachedVideo")) {
                this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedVideo"));

                this.currentMediaDetails = this.allRetrievedVideos[0];

            } else {

                let url = `./admin/index.php?media=movies`;
                //store a video
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedVideo", JSON.stringify(data));

                    this.allRetrievedVideos = data;
                    this.currentMediaDetails = data[0];
                })

            }
           


        },

        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
        }
    }
}