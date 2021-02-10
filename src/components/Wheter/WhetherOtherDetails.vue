<template>
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
    <div class="w-100 border border-primary p-3" style="height: 200px">
      <h2 class="pb-3 pr-2">Additional information</h2>
      <div class="row">
        <div class="col-6">
          <span class="d-block">Pressure: {{ OTHER_OPTIONS_CURRENT_WHETHER.pressure }}</span>
          <span class="d-block">Humidity: {{ OTHER_OPTIONS_CURRENT_WHETHER.humidity }}</span>
          <span class="d-block">Wind speed: {{ OTHER_OPTIONS_CURRENT_WHETHER.speed }}</span>
        </div>
        <div class="col-6">
          <span class="d-block">Sunrise: {{ OTHER_OPTIONS_CURRENT_WHETHER.sunrise }}</span>
          <span class="d-block">Sunset: {{ OTHER_OPTIONS_CURRENT_WHETHER.sunset }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "WhetherOtherDetails",
  computed: {
    ...mapGetters(['OTHER_OPTIONS_CURRENT_WHETHER'])
  }
}
</script>
