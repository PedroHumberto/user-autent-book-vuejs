<template>
  <fieldset style="width: 20%; margin-left:40%">
    <legend>{{ title }}}</legend>
    <slot />
  </fieldset>
</template>

<script>
export default {

  name: 'my-input',
  props: ['title']

}
</script>

<style>

</style>