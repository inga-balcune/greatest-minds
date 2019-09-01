<template>
  <div class='error-section'>
    <md-empty-state
      md-icon="error_outline"
      md-label="An error occurred!"
      md-description="Please try again later and go back to homepage."
      class='error-section__title'>
      <nuxt-link to="/" class='page-button'>Back to homepage</nuxt-link>
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
  }

  .error-section__title {
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
</style>