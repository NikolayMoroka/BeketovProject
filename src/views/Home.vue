<template>
  <div style="">
    <First/>
    <Second/>
  </div>
</template>

<script>
import First from "./First.vue"
import Second from "./Second.vue"
import Soon from "./Soon.vue"
import News from "./News.vue"
export default {
  name: "Home",
  components: {
   First,
   Second,
   Soon,
   News
  },
  data: () => ({

  }),
};
</script>
