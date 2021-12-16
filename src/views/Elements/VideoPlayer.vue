<template>
    <div class="video">
        <v-container>
            <div class="text-center mt-3">
                <span class="style_for_main_title">Дізнайся про нас детальніше</span>
            </div>
            <div class="video_block mt-9">
                <video @click.stop="goPause()" @ended="endVideo()"  ref="video" width="100%" src="../../assets/video/Електричний транспорт.mp4" poster="../../assets/for_video.jpg"></video>
                <div @click.stop="goPlay()" v-if="play" class="video_options d-flex align-center justify-center">
                    <v-btn fab color="#252775">
                        <v-icon x-large color="#fff">
                            mdi-play
                        </v-icon>
                    </v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        play: true,
    }),

    methods: {
        goPlay() {
            this.play = false
            this.$refs.video.play()
            this.$refs.video.controls = true
        
        },
        goPause() {
            this.play = true
            this.$refs.video.pause()
            this.$refs.video.controls = false
        },
        endVideo() {
            this.$refs.video.load()
            this.play = true
            this.$refs.video.controls = false
        },
        
    },
    mounted() {
        console.log(this.$refs.video)
    }
}
</script>

<style scoped>
    .video_block {
        position: relative;
    }
   .video_options {
       position: absolute;
       z-index: 5;
        top: 0;
       width: 100%;
       height: 100%;
       background-color: #ffffff4d;
   }

     .style_for_main_title {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #252775;
        border-bottom: 1px double;
    }
</style>
    