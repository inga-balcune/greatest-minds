<template>
  <div class='spinning'></div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

// .spinning {
//   display: inline-block;
//   text-align: center;
//   width: 5rem;
//   height: 5rem;
//   border: .3rem solid rgba($color-primary,.4);
//   border-radius: 50%;
//   border-top-color: $color-primary;
//   animation: spin .8s ease-in-out infinite;
//   -webkit-animation: spin .8s ease-in-out infinite;
// }

// @keyframes spin {
//   to { -webkit-transform: rotate(360deg); }
// }
// @-webkit-keyframes spin {
//   to { -webkit-transform: rotate(360deg); }
// }



// $spinning-size: 20px;
// $spinning-color: #dc1928;
// $spinning-border-size: 2px;



// spinning

.spinning,
.spinning:after {
  // position: relative;
  box-sizing: border-box;
}

.spinning {
  width: 5rem;
  height: 5rem;
  display: inline-block;
  // color: $spinning-color;
  
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
