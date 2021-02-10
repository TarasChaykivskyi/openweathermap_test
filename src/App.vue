<template>
  <div id="app">
    <Search/>
    <router-view/>
  </div>
</template>

<script>
import Search from "@/components/Search/Search";

export default {
  components: {Search}
}
</script>

