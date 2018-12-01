<template>
  <div>
    <div>
      <h1>{{part.title}}</h1>
      <p>{{part.description}}</p>
    </div>
  </div>
</template>


<script>
import getPartsMixin from './get-part-mixin';
export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props : ['partType' ,'id'],
  computed: {
    part () {
      const { partType, id } = this
      return this.parts[partType].find(part => part.id === +id);
    }
  }
}
</script>


