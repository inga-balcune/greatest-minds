<template>
  <div class='brains-section'>
    <header>
      <h1 class='brains-section__title'>Great Minds</h1>
    </header>
    <main>
      <AppMainTable :brains='brains' :loadingBrains='loadingBrainsSpinner' :minSpinnerRunTime='minSpinnerRunTime' />
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head () {
    return {
      title: 'Great Minds From Throughout History',
      meta: [
        { hid: 'description', name: 'description', content: 'Detailed information about some of the greatest minds of all time and their children.' }
      ]
    }
  },
  data() {
    return {
      loadingBrainsSpinner: false,
      brains: [],
      startBrainsLoadingTime: null,
      endBrainsLoadingTime: null,
      minSpinnerRunTime: 3000
    }
  },
  created() {
    // measure how long it takes to load brains
    this.startBrainsLoadingTime = new Date()
    axios.get('https://my-json-server.typicode.com/inga-balcune/api/persons')
          .then(res => {
                this.endBrainsLoadingTime = new Date()
                let brainsLoadingTime = this.endBrainsLoadingTime - this.startBrainsLoadingTime

                // show the spinner for total of 3sec if brainsLoadingTime is less than 3 sec
                if (brainsLoadingTime < this.minSpinnerRunTime) {
                  return setTimeout(() => {
                  this.brains = res.data
                  this.loadingBrainsSpinner = false
                  }, this.minSpinnerRunTime - brainsLoadingTime)
                } else {
                  this.brains = res.data
                  this.loadingBrainsSpinner = false
                }
              })
          .catch(e => {
            this.$router.replace('/error')
          })
    },
    mounted() {
      this.loadingBrainsSpinner = true
    }
}
  

</script>

<style lang="scss" scoped>

.brains-section__title {
  text-align: center;
}

</style>
