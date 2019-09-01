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
            <AppSpinner v-if='loadingBrains' class='outer-table__spinner-container__spinner'/>
          </td>
        </tr>
      </thead>
      <tbody v-for='(brain, brainIndex) in brains' :key="'A' + brainIndex">
        <tr>
          <td class='outer-table__body-item'>{{brain.Name}}</td>
          <td class='outer-table__body-item'>{{brain.YearOfBirth}}</td> 
          <td class='outer-table__body-item' 
              @click='onShowChildren(brain.Id, brain.NumChildren)'
              :class="{'outer-table__body-item--children' : clickedElementId[brain.Id]}"
                >{{brain.NumChildren}}
            <md-icon v-if='brain.NumChildren > 0'>{{ typeof clickedElementId[brain.Id] === 'undefined' || !clickedElementId[brain.Id] ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</md-icon>
          </td>
          <td class='outer-table__body-item outer-table--profession'>{{brain.Profession}}</td>
        </tr>
        <tr>
          <td colspan="4">
            <AppSpinner v-if="activateInnerSpinner(brain.Id)" class='outer-table__childrenLoading'/>
            <AppChildrenTable :children='children' :brainId='brain.Id' :class="{tableShowing: clickedElementId[brain.Id]}" />
          </td>
        </tr>
      </tbody>
    </table>
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
    },
    minSpinnerRunTime: {
      type: Number,
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
    onShowChildren(id, children) {
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

      // get children and calculate data loading time
      this.startLoadingDataTime = performance.now()
      this.getChildren(id)
      this.endLoadingDataTime = performance.now()
      let loadingTime = this.endLoadingDataTime - this.startLoadingDataTime
    
      // show the spinner for total of 3sec if loadingTime is less than 3 sec
      if (loadingTime < this.minSpinnerRunTime) {
        this.childrenLoadingTimeoutId = setTimeout(() => {
          this.$set(this.innerSpinnerId, id, false)
          this.$set(this.clickedElementId, id, true)
        }, this.minSpinnerRunTime - loadingTime)
      // else show spinner until data loads
      } else {
        this.$set(this.innerSpinnerId, id, false)
        this.$set(this.clickedElementId, id, true)
      }
    },
    async getChildren(id) {
      await axios.get(`https://my-json-server.typicode.com/inga-balcune/api/${id}`)
                  .then(res => {
                  // create a nested array with children placing them in positions in array based on its parent's id
                  this.$set(this.children, id, res.data)
                  })
                  .catch(e => {
                    this.$router.replace('/error')
                  })
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

}

.outer-table__heading {
  color: $color-white;
  font-weight: 400;
  line-height: 1.8rem;
  text-transform: uppercase;
  background-color: $color-secondary;
  padding: 1.5rem 1rem;
}

.outer-table__body-item {
  background-color: $color-white;
  border: .1rem solid $color-secondary;
  padding: 1rem;

  &--children {
    border-style: none;
  }
}

.outer-table--profession {
  @include respond(tab-port) {
      display: none;
  }
}

.outer-table__childrenLoading {
  margin: 5rem;
}

.outer-table__spinner-container {
  width: 100%;
  text-align: center;

  &__spinner {
    margin: 3rem auto;
  }
}

.md-icon.md-theme-default.md-icon-font {
  color: $color-yellow;
}




</style>
