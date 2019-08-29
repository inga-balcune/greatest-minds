<template>
  <div class='app-intro'>
    <header class='app-intro__header'>
      <h1 class='app-intro__header--title'>Hello, Christian and the Team!</h1>
      <h4 class='app-intro__header--subtitle'>Thank you for the given opportunity and taking the time to review my solution.</h4>
      <div class='u-margin-top-medium app-intro__header--button-container'>
        <nuxt-link class='page-button' to='/brains'>Load Brains</nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Intro page of the assignment',
      meta: [
        { hid: 'description', name: 'description', content: 'An intro page of the Siteimprove front-end development assignment.' }
      ]
    }
  }
}
  

</script>

<style lang="scss" scoped>

  .app-intro {
    height: 100vh;
    background-color: $color-primary;
    
    &__header {
      @include center-element;
      padding: 3rem;
      width: 50%;
      color: $color-white;

      @include respond(tab-land) {
        width: 70%;
        // height: 50%;
      }

      @include respond(phone) {
        width: 90%;
        // height: 70%;
      }

      &--title {
        color: $color-white;
        text-transform: none;
        margin-top: 0;
        margin-bottom: .5rem;

        &::before {
          content: '';
          width: 5.5rem;
          height: .8rem;
          display: block;
          margin: 0 0 1rem .1rem;
          background: $color-yellow;

          @include respond(phone) {
            width: 4rem;
            height: .4rem;
            margin: 0 0 .1rem 0
          }
        }
      }

      &--subtitle {
        color: $color-white;
        margin-top: 1rem;
      }

      &--button-container {
        width: 100%;

        .page-button {
          &:hover, :visited, :link, :active {
            text-decoration: none;
          } 
        }
      }

      
      
    }
    
  }


 
</style>
