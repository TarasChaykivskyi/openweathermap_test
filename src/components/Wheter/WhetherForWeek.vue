<template>
  <div class="w-100 border border-primary mb-4 list-whether-week">
    <ul class="d-flex justify-content-around align-items-center p-0 h-100">
      <li class="text-center list-unstyled h-100" v-for="item in WEEK_WHETHER" :key="item.id">
        <img :src="'http://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png'" alt="icon">
        <span class="d-block text-warning font-weight-bold fz-15">{{ setDayOfWeek(item.dt) }}</span>
        <span class="d-block text-danger font-weight-bold fz-24">{{Math.round(item.main.temp - 273)}}&deg;C</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "WhetherForWeek",
  computed: {
    ...mapGetters(['WEEK_WHETHER']),
  },
  methods: {
    setDayOfWeek(dt) {
      dt = new Date(dt * 1000).getDay();
      switch (dt) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
      }
    }
  }
}
</script>
