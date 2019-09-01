<template>
    <table class='inner-table'>
      <thead>
        <tr>
          <th class='inner-table__heading'>Name</th>
          <th class='inner-table__heading'>Year of Birth</th>
          <th class='inner-table__heading'>Mother</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(child, childIndex) in children[brainId]' :key="'B' + childIndex">
          <td class='inner-table__body-item'>{{child.Name}}</td>
          <td class='inner-table__body-item'>{{child.YearOfBirth}}</td>
          <td class='inner-table__body-item'>{{child.Mother}}</td>
        </tr>
      </tbody> 
    </table>
</template>

<script>
export default {
  props: {
    children: {
     type: Array,
     required: true
   },
   brainId: {
     type: Number,
     required: true
   }
  }
}
</script>

<style lang='scss'>

.inner-table {
  display: none;
  background-color: $color-white;
  width: 90%;
  text-align: center;
  margin: 2rem auto;

  @include respond(phone) {
    width: 100%;
  }
}

.inner-table__heading {
    color: $color-white;
    font-weight: 400;
    line-height: 1.8rem;
    text-transform: uppercase;
    background-color: $color-red;
    padding: 1.5rem 1rem;
}

.inner-table__body-item {
    background-color: $color-white;
    border: .1rem solid $color-secondary;
    padding: 1rem;
  }

.tableShowing {
  display: table;
}



</style>
