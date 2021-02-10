<template>
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
    <div class="w-100 border border-primary" style="height: 200px">
      <div class="row position-relative h-100">
        <div class="col-4 text-center">
          <img class="pt-3" :src="icon" alt="icon">
          <span class="d-block text-danger font-weight-bold fz-32">{{ CURRENT_WHETHER.temp }}&deg;C</span>
        </div>
        <div class="col-8 text-right">
          <h2 class="py-3 pr-3">Whether in {{ CURRENT_WHETHER.name }}</h2>
          <div class="pr-3">
            <span class="d-block">Min temperature: {{ CURRENT_WHETHER.temp_min }}&deg;</span>
            <span class="d-block">Max temperature: {{ CURRENT_WHETHER.temp_max }}&deg;</span>
            <span class="d-block">Current date: {{ currentDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "CurrentWhether",
  computed: {
    ...mapGetters(['CURRENT_WHETHER']),
    currentDate() {
      return new Date().toLocaleDateString()
    },
    icon() {
      return `http://openweathermap.org/img/wn/${this.CURRENT_WHETHER.icon}@2x.png`
    }
  }
}
</script>
