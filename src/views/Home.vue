<template>
  <div style="">
    <First/>
    <VideoPlayer/>
    <Second/>
  </div>
</template>

<script>
import First from "./First.vue"
import Second from "./Second.vue"
import Soon from "./Soon.vue"
import News from "./News.vue"
import VideoPlayer from "./Elements/VideoPlayer.vue"
export default {
  name: "Home",
  components: {
   First,
   Second,
   Soon,
   News,
   VideoPlayer
  },
  data: () => ({

  }),
};
</script>
