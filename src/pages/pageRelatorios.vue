<template>
  <div class="library-reports-page">
    <botao></botao>
    <v-card class="mx-auto mb-15 mt-15" max-width="800">
      <v-card-title>Relatórios da Biblioteca</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              v-model="selectedStudent"
              label="Aluno"
              :items="students"
              item-title="name"
              item-value="id"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn color="primary" @click="generateReport">
              Gerar Relatório
            </v-btn>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <v-table v-if="reportData.length > 0">
          <thead>
            <tr>
              <th class="text-left">Livro</th>
              <th class="text-left">Data de Retirada</th>
              <th class="text-left">Data de Devolução</th>
              <th class="text-left">Dias em Posse</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in reportData" :key="item.id">
              <td>{{ item.book.title }}</td>
              <td>{{ formatDate(item.checkoutDate) }}</td>
              <td>{{ formatDate(item.returnDate) }}</td>
              <td>
                {{ calculateDaysDiff(item.checkoutDate, item.returnDate) }}
              </td>
            </tr>
          </tbody>
        </v-table>
        <p v-else>Nenhum relatório disponível.</p>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "LibraryReportsPage",
  data() {
    return {
      students: [
        { id: 1, name: "João" },
        { id: 2, name: "Maria" },
        { id: 3, name: "Pedro" },
        { id: 4, name: "Ana" },
      ],
      selectedStudent: null,
      reportData: [],
    };
  },
  methods: {
    generateReport() {
      // Simula um relatorio feito pelo back
      this.reportData = [
        {
          id: 1,
          book: { title: "O Senhor dos Anéis" },
          checkoutDate: "2023-05-01",
          returnDate: "2023-05-15",
        },
        {
          id: 2,
          book: { title: "To Kill a Mockingbird" },
          checkoutDate: "2023-06-10",
          returnDate: "2023-06-30",
        },
        {
          id: 3,
          book: { title: "1984" },
          checkoutDate: "2023-08-01",
          returnDate: "2023-08-20",
        },
      ];
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    calculateDaysDiff(checkoutDate, returnDate) {
      const checkoutDate_ = new Date(checkoutDate);
      const returnDate_ = new Date(returnDate);
      const diffInDays = (returnDate_ - checkoutDate_) / (1000 * 60 * 60 * 24);
      return Math.round(diffInDays);
    },
    goBackToAdminPage() {
      this.$router.push("/pageAdministrador");
    },
  },
};
</script>
<style scoped>
.library-reports-page {
  position: relative;
}

.back-button {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
}

.back-button .v-icon {
  margin-right: 8px;
}
</style>
