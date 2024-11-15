<template>
  <v-btn
    class="back-button ms-10 mt-10"
    color="secondary"
    variant="outlined"
    @click="goBackToAdminPage"
  >
    <v-icon>mdi-arrow-left</v-icon>
    Voltar
  </v-btn>
</template>

<script>
export default {
  methods: {
    goBackToAdminPage() {
      this.$router.push("/pageAdministrador");
    },
  },
};
</script>
