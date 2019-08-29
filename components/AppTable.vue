<template>
  <div>
    <table class='outer-table'>
      <thead>
        <tr>
          <th class='outer-table__heading'>Name</th>
          <th class='outer-table__heading'>Year of Birth</th> 
          <th class='outer-table__heading'>Children</th>
          <th class='outer-table__heading outer-table--profession'>Profession</th>
        </tr>
        <tr v-if='loadingBrains'>
          <td colspan="4" class='outer-table__spinner-container'>
            <AppSpinner v-if='loadingBrains' class='outer-table__spinner'/>
          </td>
        </tr>
      </thead>
      <tbody v-for='(brain, brainIndex) in brains' :key="'A' + brainIndex">
        <tr>
          <td class='outer-table__body-item'>{{brain.Name}}</td>
          <td class='outer-table__body-item'>{{brain.YearOfBirth}}</td> 
          <td class='outer-table__body-item' 
              @click='onShowInnerTable(brain.Id, brain.NumChildren)'
              :class="{'outer-table__body-item--children' : clickedElementId[brain.Id]}"
                >{{brain.NumChildren}}
            <md-icon v-if='brain.NumChildren > 0'>{{ typeof clickedElementId[brain.Id] === 'undefined' || !clickedElementId[brain.Id] ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</md-icon>
          </td>
            <td class='outer-table__body-item outer-table--profession'>{{brain.Profession}}</td>
          </tr>
          <tr>
            <td colspan="4">
              <AppSpinner v-if="activateInnerSpinner(brain.Id)" class='outer-table__childrenLoading'/>
              <AppInnerTable :children='children' :brainId='brain.Id' :class="{tableShowing: clickedElementId[brain.Id]}" />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    brains: {
     type: Array,
     required: true
   },
    loadingBrains: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      clickedElementId: [],
      innerSpinnerId: [],
      children: [],
      childrenLoadingTimeoutId: null,
      startLoadingDataTime: null,
      endLoadingDataTime: null
    }
  },
  methods: {
    onShowInnerTable(id, children) {
      // if brain doesn't have any children, stop following code execution
      if (children === 0) {
        return false
      }
      // if you click on the cell multiple times within given time it prevents other things happening several times
      clearTimeout(this.childrenLoadingTimeoutId)

      // set id of the clicked element
      let show = typeof this.clickedElementId[id] === 'undefined' ? true : !this.clickedElementId[id]

      // if cell is clicked before the data is loaded then prevent spinner and table loading
      if (this.innerSpinnerId[id] || !show) {
        this.$set(this.clickedElementId, id, false)
        this.$set(this.innerSpinnerId, id, false)
        return false
      }
      
      // set an id for the inner spinner and activate the one based on it's position in array
      this.$set(this.innerSpinnerId, id, show)

      this.getChildren(id)
      console.log('start is ' + this.startLoadingDataTime)
      console.log('end is ' + this.endLoadingDataTime)
      let loadingTime = (this.endLoadingDataTime - this.startLoadingDataTime) / 1000
    
      console.log(loadingTime)

      
      // show spinner for 3sec if loadingTime is less than 3 sec
      // if (loadingTime < -3) {
      //   this.childrenLoadingTimeoutId = setTimeout(() => {
      //     this.$set(this.innerSpinnerId, id, false)
      //     this.$set(this.clickedElementId, id, true)
      //     console.log('Children load in less than 3 sec')
      //   }, 3000)
      // // else show spinner until data loads
      // } else {
      //   this.$set(this.innerSpinnerId, id, false)
      //   this.$set(this.clickedElementId, id, true)
      //   console.log('Children load in more than 3 sec')
      // }

      // activate data fetching, then stop spinner and show the inner table
     this.childrenLoadingTimeoutId = setTimeout(() => {
        this.getChildren(id)
        this.$set(this.innerSpinnerId, id, false)
        this.$set(this.clickedElementId, id, true)
      }, 1000)

    },
    async getChildren(id) {
      if(id) {
        this.startLoadingDataTime = performance.now()
        const childrenData = await axios.get(`http://assignment.siteimprove.com/api/persondetails/${id}`)
        // create a nested array with children placing them in positions in array based on its parent's id
        this.$set(this.children, id, childrenData.data)
        this.endLoadingDataTime = performance.now()
      }
    },
    activateInnerSpinner(id) {
      return typeof this.innerSpinnerId[id] !== 'undefined' && this.innerSpinnerId[id]
    }
  },
  
  
}
</script>

<style lang='scss'>

.outer-table {
  background-color: $color-white;
  width: 90%;
  text-align: center;
  margin: 2rem auto;

  @include respond(phone) {
    width: 100%;
  }
   
  &__heading {
    color: $color-white;
    font-weight: 400;
    line-height: 1.8rem;
    text-transform: uppercase;
    background-color: $color-secondary;
    padding: 1.5rem 1rem;
  }

  &__body-item {
    background-color: $color-white;
    border: .1rem solid $color-secondary;
    padding: 1rem;

    &--children {
      border-style: none;
    }
  }

  &--profession {
    @include respond(tab-port) {
      display: none;
    }
  }

  &__childrenLoading {
    margin: 5rem;
  }

  &__spinner-container {
    width: 100%;
    text-align: center;
  }

  &__spinner {
    margin: 3rem auto;
  }
}


.md-icon.md-theme-default.md-icon-font {
  color: $color-yellow;
}




</style>
