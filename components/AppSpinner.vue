<template>
  <div class='spinning'></div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

.spinning {
  display: inline-block;
  text-align: center;
  width: 5rem;
  height: 5rem;
  border: .3rem solid rgba($color-primary,.4);
  border-radius: 50%;
  border-top-color: $color-primary;
  animation: spin .8s ease-in-out infinite;
  -webkit-animation: spin .8s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

</style>
