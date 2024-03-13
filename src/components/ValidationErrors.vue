<template>
  <div>
    Here are sharable validation errors
  </div>
</template>

<script>
export default {
    name: 'McvValidationErrors', 
    props: {
        validationErrors: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>