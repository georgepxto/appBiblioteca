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
  <v-card class="mx-auto mb-15 mt-5" max-width="1000">
    <v-card-title>Catálogo de Livros</v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="searchTitle"
            label="Título"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="searchGenre"
            label="Gênero"
            :items="['', 'Fantasia', 'Drama', 'Ficção Científica', 'Romance']"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="searchAuthor"
            label="Autor"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Título</th>
            <th class="text-left">Gênero</th>
            <th class="text-left">Autor</th>
            <th class="text-center">Quantidade Total</th>
            <th class="text-center">Quantidade Emprestada</th>
            <th class="text-center">Data de Cadastro</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.genre }}</td>
            <td>{{ book.author }}</td>
            <td class="text-center">{{ book.totalQuantity }}</td>
            <td class="text-center">{{ book.rentedQuantity }}</td>
            <td class="text-center">{{ formatDate(book.createdAt) }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BookCatalogPage",
  data() {
    return {
      books: [
        {
          id: 1,
          title: "O Senhor dos Anéis",
          genre: "Fantasia",
          author: "J.R.R. Tolkien",
          totalQuantity: 50,
          rentedQuantity: 20,
          createdAt: "2022-03-15",
        },
        {
          id: 2,
          title: "To Kill a Mockingbird",
          genre: "Drama",
          author: "Harper Lee",
          totalQuantity: 30,
          rentedQuantity: 10,
          createdAt: "2021-07-20",
        },
        {
          id: 3,
          title: "1984",
          genre: "Ficção Científica",
          author: "George Orwell",
          totalQuantity: 40,
          rentedQuantity: 15,
          createdAt: "2020-11-05",
        },
        {
          id: 4,
          title: "Harry Potter e a Pedra Filosofal",
          genre: "Fantasia",
          author: "J.K. Rowling",
          totalQuantity: 60,
          rentedQuantity: 30,
          createdAt: "2019-02-12",
        },
        {
          id: 5,
          title: "Orgulho e Preconceito",
          genre: "Romance",
          author: "Jane Austen",
          totalQuantity: 25,
          rentedQuantity: 5,
          createdAt: "2018-09-01",
        },
      ],
      searchTitle: "",
      searchGenre: "",
      searchAuthor: "",
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        return (
          book.title.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
          book.genre.toLowerCase().includes(this.searchGenre.toLowerCase()) &&
          book.author.toLowerCase().includes(this.searchAuthor.toLowerCase())
        );
      });
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    goBackToAdminPage() {
      this.$router.push("/pageAdministrador");
    },
  },
};
</script>
