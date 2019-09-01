<template>
  <div class='spinning'></div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

// .spinning,
// .spinning:after {
//   box-sizing: border-box;
// }

.spinning {
  width: 5rem;
  height: 5rem;
  display: inline-block;
  box-sizing: border-box;
  
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: inline-block;
    border: .3rem solid rgba($color-primary,.4);
    border-radius: 50%;
    border-top-color: $color-primary;
    background: transparent;
    
    animation: ball-clip-rotate .8s ease-in-out infinite;
  }

  @include respond(phone) {
    width: 3.5rem;
    height: 3.5rem;
  }
}

@keyframes ball-clip-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
