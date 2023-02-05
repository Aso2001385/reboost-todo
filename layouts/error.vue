<template>
  <v-app dark>
    <v-main>
      {{ title }}
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {}
  },

  head() {
    const title = this.error.statusCode
    return {
      title,
    }
  },
}
</script>
