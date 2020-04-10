export default {
    name: 'GenreNavComponent',
    template: `
    <div class="row filter-genre">
        <div class="col-12">
            <ul>
                <li><a href="admin/index.php?filter=Action">Action</a></li>
                <li><a href="admin/index.php?filter=Adventure">Adventure</a></li>
                <li><a href="admin/index.php?filter=Comedy">Comedy</a></li>
                <li><a href="admin/index.php?filter=Drama">Drama</a></li>
                <li><a href="admin/index.php?filter=Thriller">Thriller</a></li>
                <li><a href="admin/index.php?filter=Horror">Horror</a></li>
                <li><a href="admin/index.php?filter=Musical">Musical</a></li>
                <li><a href="admin/index.php?filter=Science Fiction">Science Fiction</a></li>
                <li><a href="admin/index.php?filter=Family">Family</a></li>
                <li><a href="admin/index.php?filter=Fantasy">Fantasy</a></li>
                <li><a href="admin/index.php?filter=Romance">Romance</a></li>
  
            </ul>
        </div>
    </div>
    
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedGenres: []
        }
    },

    created: function() {
        this.retrieveGenreContent();
    },

    methods: {
        retrieveGenreContent() {
            // fetch all the video content here
            // debugger;

            if (localStorage.getItem("cachedGenre")) {
                this.allRetrievedGenres = JSON.parse(localStorage.getItem("cachedGenre"));

                this.currentMediaDetails = this.allRetrievedGenres[0];

            } else {

                let url = `./admin/index.php?filter=genre`;
                //store a video
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedGenre", JSON.stringify(data));

                    this.allRetrievedGenres = data;
                    this.currentMediaDetails = data[0];
                })

            }
           


        },

        loadNewGenre(genre) {
            this.currentMediaDetails = genre;
        }
    }
}