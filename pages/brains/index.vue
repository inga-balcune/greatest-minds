<template>
  <div class='brains-section'>
    <header>
      <h1 class='brains-section__title'>Brains</h1>
    </header>
    <main>
      <AppTable :brains='brains' :loadingBrains='loadingBrainsData'/>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head () {
    return {
      title: 'Brains - Assignment solution',
      meta: [
        { hid: 'description', name: 'description', content: 'The assignment solution that includes a table of some of the greatest brains of all time.' }
      ]
    }
  },
  data() {
    return {
      loadingBrainsData: false,
      brains: [],
      startBrainsLoadingTime: null,
      endBrainsLoadingTime: null
    }
  },
  created() {
    this.loadingBrainsData = true
    this.startBrainsLoadingTime = new Date()
    axios.get('https://assignment.siteimprove.com/api/persons')
          .then(res => {
                this.endBrainsLoadingTime = new Date()
                let brainsLoadingTime = (this.startBrainsLoadingTime - this.endBrainsLoadingTime) / 1000
                console.log(brainsLoadingTime)
                if (brainsLoadingTime < 3) {
                  return setTimeout(() => {
                  this.brains = res.data
                  this.loadingBrainsData = false
                  console.log('Brains load less than 3 sec')
                  }, 3000)
                } else {
                  this.brains = res.data
                  this.loadingBrainsData = false
                  console.log('Brains load more than 3 sec')
                }
              })
          .catch((e) => {
            error({ statusCode: 404, message: 'Post not found' })
          })
    }
}
  

</script>

<style lang="scss" scoped>

.brains-section {
  
  &__title {
    text-align: center;
  }
}

</style>
