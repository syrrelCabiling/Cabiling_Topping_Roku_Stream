import VideoComponent from "./VideoComponent.js";
import TvComponent from "./TvComponent.js";
import AudioComponent from "./AudioComponent.js";
import Sidebar from "./Sidebar.js";
// import CommentComponent from "./CommentComponent.js";


export default {
    name: "TheUserHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
    <Sidebar></Sidebar>
    
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

        <component :is="this.activeComponent"></component>
        <!-- <CommentComponent></CommentComponent> -->
    </div>
    `,

    data: function() {
        return {
            activeComponent: VideoComponent,
            
            mediaTypes: [
                { iconClass: "fas fa-film", description: "Movies", component: VideoComponent },
                { iconClass: "fas fa-tv", description: "Television", component: TvComponent },
                { iconClass: "fas fa-headphones", description: "Audio", component: AudioComponent },
                    
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    },

    components: {
        Sidebar: Sidebar,
        // CommentComponent: CommentComponent
    }

}