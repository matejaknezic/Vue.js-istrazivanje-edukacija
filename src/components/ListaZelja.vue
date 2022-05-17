<template>
  <ul>
    <ToDo v-for="item, itemIndex in myProp" :key="itemIndex" :toDo="item"/>
  </ul>
</template>

<script>
import ToDo from './ToDo.vue'
export default{
  components:{
    ToDo
  },
  props: {
    myProp: {
      type: Array,
      default: () => []
    }
  }
}

</script>