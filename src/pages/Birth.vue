<template >
  <div class="birth">
    <router-view></router-view>
  </div>
</template>


<script>
import {defineComponent} from 'vue'
import Login from '../components/birthday'

export default defineComponent({
  name: 'birthday'
})
</script>

<style scoped>

</style>
