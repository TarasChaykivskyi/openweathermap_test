<template>
  <div class="container">
    <template v-if="CURRENT_WHETHER">
      <div class="row pt-5">
        <CurrentWhether/>
        <WhetherOtherDetails/>
      </div>
      <WhetherForWeek/>
    </template>
    <template v-else>
      <h1 class="text-center text-primary pt-4">Data not found!</h1>
    </template>
  </div>
</template>

<script>
import CurrentWhether from "@/components/Wheter/CurrentWhether";
import WhetherForWeek from "@/components/Wheter/WhetherForWeek";
import WhetherOtherDetails from "@/components/Wheter/WhetherOtherDetails";
import {mapGetters} from 'vuex';

export default {
  name: "Whether",
  computed: {
    ...mapGetters(['CURRENT_WHETHER'])
  },
  components: {
    WhetherOtherDetails,
    WhetherForWeek,
    CurrentWhether
  },
  created() {
    setTimeout(() => {
      if (!this.CURRENT_WHETHER) this.$router.replace({name: 'Home'})
    }, 200)
  }
}
</script>
