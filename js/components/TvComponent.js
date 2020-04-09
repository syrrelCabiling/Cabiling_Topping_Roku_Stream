export default {
    name: "TheTvComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.tv_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.tv_storyline"></p>
                <span class="media-time">{{currentMediaDetails.tv_runtime}}</span>
                <span class="media-time">{{currentMediaDetails.tv_rating}}</span>

                <span class="media-year">{{currentMediaDetails.tv_year}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.tv_trailer" class="fs-video"></video>
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
                <img v-for="item in allRetrievedShows" :src="'images/' + item.tv_cover" alt="media
                thumb" @click="loadNewShow(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedShows: []
        }
    },

    created: function() {
        this.retrieveShowContent();
    },

    methods: {
        retrieveShowContent() {
            // fetch all the video content here
            // debugger;

            if (localStorage.getItem("cachedShow")) {
                this.allRetrievedShows = JSON.parse(localStorage.getItem("cachedShow"));

                this.currentMediaDetails = this.allRetrievedShows[0];

            } else {

                let url = `./admin/index.php?media=shows`;
                //store a video
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedShow", JSON.stringify(data));

                    this.allRetrievedShows = data;
                    this.currentMediaDetails = data[0];
                })

            }
           


        },

        loadNewShow(show) {
            this.currentMediaDetails = show;
        }
    }
}