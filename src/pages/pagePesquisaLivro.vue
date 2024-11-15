<template>
  <botao></botao>
  <v-card class="mx-auto mb-15 mt-5" max-width="800">
    <v-card-title>Pesquisar Livros</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="searchTitle"
            label="Título"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="searchGenre"
            label="Gênero"
            :items="['Fantasia', 'Drama', 'Ficção Científica', 'Romance']"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="searchAuthor"
            label="Autor"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="searchYear"
            label="Ano"
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
            <th class="text-left">Ano</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.genre }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BookSearchPage",
  data() {
    return {
      books: [
        {
          id: 1,
          title: "O Senhor dos Anéis",
          genre: "Fantasia",
          author: "J.R.R. Tolkien",
          year: 1954,
        },
        {
          id: 2,
          title: "To Kill a Mockingbird",
          genre: "Drama",
          author: "Harper Lee",
          year: 1960,
        },
        {
          id: 3,
          title: "1984",
          genre: "Ficção Científica",
          author: "George Orwell",
          year: 1949,
        },
        {
          id: 4,
          title: "Harry Potter e a Pedra Filosofal",
          genre: "Fantasia",
          author: "J.K. Rowling",
          year: 1997,
        },
        {
          id: 5,
          title: "Orgulho e Preconceito",
          genre: "Romance",
          author: "Jane Austen",
          year: 1813,
        },
      ],
      searchTitle: "",
      searchGenre: "",
      searchAuthor: "",
      searchYear: "",
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        return (
          book.title.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
          book.genre.toLowerCase().includes(this.searchGenre.toLowerCase()) &&
          book.author.toLowerCase().includes(this.searchAuthor.toLowerCase()) &&
          book.year.toString().includes(this.searchYear)
        );
      });
    },
  },
  methods: {
    goBackToAdminPage() {
      this.$router.push("/pageAdministrador");
    },
  },
};
</script>
