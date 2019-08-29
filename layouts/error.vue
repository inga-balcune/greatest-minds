<template>
  <div class='error-section'>
    <md-empty-state
      v-if="error.statusCode === 404"
      md-icon="error_outline"
      md-label="Page not found!"
      md-description="Can't seem to find the page you are looking for."
      class='error-section__title'>
      <a href="/" class='page-button'>Back to safety</a>
    </md-empty-state>
    <md-empty-state
      v-else
      md-icon="error_outline"
      md-label="An error occurred!"
      md-description="Please try again later and go back to homepage."
      class='error-section__title'>
      <a href="/" class='page-button'>Back to homepage</a>
    </md-empty-state>
  </div>
</template>

<script>
  export default {
    name: 'EmptyStateBasic',
    props: ['error']
  }
</script>

<style lang="scss" scoped>
  .error-section {
    height: 100vh;
    background-color: $color-primary;
    

    &__title {
      color: $color-white;
      @include center-element;
    }

    .page-button {
      background-color: $color-white;
      color: $color-primary;
      padding: 1.3rem 2.9rem;
      font-size: 1.8rem;
      font-weight: 500;

      @include respond(tab-land) { 
      padding: .8rem 1.4rem;
      font-size: 1.6rem;
    }

      &:hover, :visited, :link, :active {
        text-decoration: none;
      } 
    }
  }
</style>