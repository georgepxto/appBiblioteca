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
  <v-card class="mx-auto mb-15 mt-5" max-width="600">
    <v-card-title>Empréstimo de Livros</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="checkoutBook">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="studentId"
              label="ID do Aluno"
              type="number"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="checkoutDate"
              label="Data de Empréstimo"
              type="date"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="returnDate"
              label="Data de Devolução"
              type="date"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="selectedBook"
              label="Livro"
              :items="books"
              item-title="title"
              item-value="id"
              variant="outlined"
              required
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-btn type="submit" color="primary" block> Emprestar Livro </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BookCheckoutPage",
  data() {
    return {
      studentId: null,
      checkoutDate: null,
      returnDate: null,
      selectedBook: null,
      books: [
        { id: 1, title: "O Senhor dos Anéis" },
        { id: 2, title: "To Kill a Mockingbird" },
        { id: 3, title: "1984" },
        { id: 4, title: "Harry Potter e a Pedra Filosofal" },
        { id: 5, title: "Orgulho e Preconceito" },
      ],
    };
  },
  methods: {
    checkoutBook() {
      console.log({
        studentId: this.studentId,
        bookId: this.selectedBook,
        checkoutDate: this.checkoutDate,
        returnDate: this.returnDate,
      });

      // Limpar os campos após o empréstimo
      this.studentId = null;
      this.checkoutDate = null;
      this.returnDate = null;
      this.selectedBook = null;
    },
    goBackToAdminPage() {
      this.$router.push("/pageAdministrador");
    },
  },
};
</script>
