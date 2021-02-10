<template>
  <div class="border-bottom border-success">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-6 py-4 px-0 m-auto position-relative">
          <input class="form-control border-success shadow-none"
                 type="search"
                 placeholder="Whether in your city"
                 @input="searchPlace($event.target.value)"
          >
          <ul class="position-absolute container-search-result list-unstyled" :class="{show: showList}">
            <li class="p-2"
                v-for="(place, index) in FOUND_PLACES"
                :key="index"
                @click="getPlace(place.name)"
            >{{ place.name }} ({{ place.country }})
            </li>
          </ul>
          <ul class="container-search-saved d-flex flex-wrap list-unstyled">
            <li class="mr-2 text-muted fz-10 item-search-saved"
                v-for="(place, index) in SAVED_PLACES"
                :key="index"
                @click="getPlace($event.target.innerText)"
            >{{ place }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Search",
  data() {
    return {
      showList: false
    }
  },
  computed: {
    ...mapGetters([
      'FOUND_PLACES',
      'SAVED_PLACES'
    ])
  },
  methods: {
    ...mapActions([
      'SEARCH_PLACE',
      'GET_CURRENT_WHETHER',
      'GET_WEEK_WHETHER'
    ]),
    async getPlace(value) {
      this.showList = false;
      this.showList = false
      if(this.$route.params.id !== 'whether-' + value.toLowerCase()) {
        this.$router.push({name: 'Whether', params: {id: 'whether-' + value.toLowerCase()}});
      }
      await this.GET_CURRENT_WHETHER(value);
      await this.GET_WEEK_WHETHER();
    },
    searchPlace(value) {
      this.showList = true;
      this.SEARCH_PLACE(value)
    }
  }
}
</script>

<style scoped>

</style>
