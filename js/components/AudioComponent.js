export default {
    name: "AudioComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.song_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.song_storyline"></p>
                <span class="media-time">{{currentMediaDetails.song_runtime}}</span>


                <span class="media-year">{{currentMediaDetails.song_year}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <audio autoplay controls :src="'audio/' + currentMediaDetails.song_file" class="fs-video"></audio>
            </div>
        </div>
        <div class="row">
         <div class="col-12 col-sm-9">
            <div class="thumb-wrapper clearfix">
                <img v-for="item in allRetrievedSongs" :src="'images/' + item.song_cover" alt="media
                thumb" @click="loadNewSong(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedSongs: []
        }
    },

    created: function() {
        this.retrieveSongContent();
    },

    methods: {
        retrieveSongContent() {
            // fetch all the video content here
            // debugger;

            if (localStorage.getItem("cachedSong")) {
                this.allRetrievedSongs = JSON.parse(localStorage.getItem("cachedSong"));

                this.currentMediaDetails = this.allRetrievedSongs[0];

            } else {

                let url = `./admin/index.php?media=songs`;
                //store a video
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedSong", JSON.stringify(data));

                    this.allRetrievedSongs = data;
                    this.currentMediaDetails = data[0];
                })

            }
           


        },

        loadNewSong(song) {
            this.currentMediaDetails = song;
        }
    }
}