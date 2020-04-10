import VideoComponent from "./VideoComponent.js";
import TvComponent from "./TvComponent.js";
import AudioComponent from "./AudioComponent.js";



export default {
    name: "KidComponent",

 
    template: `
    <div class="container">

    <h1>{{ message  }}</h1>
        <!-- show media icons here -->
        <div class="row"> <!-- 2-up for nav and media info -->
            <nav class="col-lg-12 col-sm-3 side-nav">
                <ul class="media-type">
                    <li v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                        <span>
                            <i v-bind:class="[media.iconClass]"></i>
                        </span>
                        
                        <span class="d-none d-md-block">{{ media.description }}</span>
                    </li>
                </ul>
            </nav>
        </div>

        <component :is="this.KidComponent"></component>
    </div>
    `,

    data: function() {
        return {
            message: "HOLA KIDD!",
            KidComponent: VideoComponent,
            
            mediaTypes: [
                { iconClass: "fas fa-film", description: "Movies", component: VideoComponent },
                { iconClass: "fas fa-tv", description: "Television", component: TvComponent },
                { iconClass: "fas fa-headphones", description: "Audio", component: AudioComponent },
                    
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.KidComponent = theComponent;
        }
    }
}
