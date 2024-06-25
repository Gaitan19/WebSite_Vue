<script>
import letsBuildData from '~/data/letsBuild.json'
import letsBuildSteps from '~/data/letsBuildSteps.json'

export default {
  data () {
    return {
      letsBuildData,
      letsBuildSteps
    }
  }
}
</script>

<template>
  <letsBuild v-bind="letsBuildData">
    <CardLetsbuildSteps v-for="letsbuildStep in letsBuildSteps" v-bind="letsbuildStep" :key="letsbuildStep.title" />
  </letsBuild>
</template>
