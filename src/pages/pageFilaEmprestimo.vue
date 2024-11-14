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
  <v-card class="mx-auto mb-15 mt-5" max-width="800">
    <v-card-title>Fila de Empréstimo de Livros</v-card-title>
    <v-card-text>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Aluno</th>
            <th class="text-left">Livro</th>
            <th class="text-left">Data da Solicitação</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in loanQueue" :key="item.id">
            <td>{{ item.student.name }}</td>
            <td>{{ item.book.title }}</td>
            <td>{{ formatDate(item.requestedAt) }}</td>
            <td class="text-center">
              <v-btn
                color="success"
                variant="text"
                @click="markAsCheckedOut(item)"
              >
                Emprestado
              </v-btn>
              <v-btn
                color="error"
                variant="text"
                @click="removeFromQueue(item)"
              >
                Remover
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
      <div v-if="loanQueue.length === 0">
        <p class="text-center mt-15 mb-10">
          Não há ninguém na fila de empréstimo.
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BookLoanQueuePage",
  data() {
    return {
      loanQueue: [
        {
          id: 1,
          student: { name: "João" },
          book: { title: "O Senhor dos Anéis" },
          requestedAt: "2023-05-10",
          checkedOut: false,
        },
        {
          id: 2,
          student: { name: "Maria" },
          book: { title: "To Kill a Mockingbird" },
          requestedAt: "2023-06-01",
          checkedOut: false,
        },
        {
          id: 3,
          student: { name: "Pedro" },
          book: { title: "1984" },
          requestedAt: "2023-08-15",
          checkedOut: false,
        },
        {
          id: 4,
          student: { name: "Ana" },
          book: { title: "Harry Potter e a Pedra Filosofal" },
          requestedAt: "2023-09-05",
          checkedOut: false,
        },
        {
          id: 5,
          student: { name: "Júlia" },
          book: { title: "Orgulho e Preconceito" },
          requestedAt: "2023-10-01",
          checkedOut: false,
        },
      ],
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    markAsCheckedOut(item) {
      item.checkedOut = true;
      // atualizar o livro pelo backend aqui
    },
    removeFromQueue(item) {
      this.loanQueue = this.loanQueue.filter((q) => q.id !== item.id);
      // remover da fila pelo backend aqui
    },
    goBackToAdminPage() {
      this.$router.push("/pageAdministrador");
    },
  },
};
</script>
