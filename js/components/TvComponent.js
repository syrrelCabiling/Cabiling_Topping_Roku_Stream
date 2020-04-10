import CommentComponent from "./CommentComponent.js";


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

                <!-- Facebook plugin -->
                <CommentComponent></CommentComponent>

            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.tv_trailer" class="fs-video"></video>
            </div>
        </div>
        
            <div class="row filter-genre">
                <div class="col-12">
                    <ul>
                        <li>
                            <a href="all" @click.prevent="retrieveVideoContent">All</a>
                        </li>
                        <li>
                            <a href="Action" @click.prevent="filterMediaShows('Action')">Action</a>
                        </li>
                        <li>
                            <a href="Adventure" @click.prevent="filterMediaShows('Adventure')">Adventure</a>
                        </li>
                        <li>
                            <a href="Comedy" @click.prevent="filterMediaShows('Comedy')">Comedy</a>
                        </li>
                        <li>
                            <a href="Thriller" @click.prevent="filterMediaShows('Thriller')">Thriller</a>
                        </li>
                
                        <li>
                            <a href="Musical" @click.prevent="filterMediaShows('Musical')">Musical</a>
                        </li>
                        <li>
                            <a href="Science Fiction" @click.prevent="filterMediaShows('Science Fiction')">Science Fiction</a>
                        </li>
                        <li>
                            <a href="Family" @click.prevent="filterMediaShows('Family')">Family</a>
                        </li>
                        <li>
                            <a href="Fantasy" @click.prevent="filterMediaShows('Fantasy')">Fantasy</a>
                        </li>
                        <li>
                            <a href="Romance" @click.prevent="filterMediaShows('Romance')">Romance</a>
                        </li>
                    

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
        filterMediaShows(filterShows){
            let url = `./admin/index.php?media=shows&filter=${filterShows}`;


            fetch(url)
            .then(res => res.json())
            .then(data => {
               //localStorage.setItem("cachedFilter", JSON.stringify(data));

                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];
            })

        },
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
    },
    components: {
        CommentComponent: CommentComponent

    }
}