<template>
  <botao></botao>
  <v-card class="mx-auto mb-15 mt-5" max-width="1000">
    <v-card-title>Visão Geral dos Alunos</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="searchRegistration"
            label="Pesquisar matrícula"
            variant="outlined"
            @keyup.enter="viewStudentDetails"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-btn color="primary" @click="viewStudentDetails">
            Ver Detalhes
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>

      <v-table v-if="!showingStudentDetails">
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Matrícula</th>
            <th class="text-left">Nome</th>
            <th class="text-left">Livros Emprestados</th>
            <th class="text-left">Data de Empréstimo</th>
            <th class="text-left">Data de Devolução</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.registrationNumber }}</td>
            <td>{{ student.name }}</td>
            <td>
              <div v-for="loan in student.loans" :key="loan.id">
                {{ loan.book.title }}
              </div>
            </td>
            <td>
              <div v-for="loan in student.loans" :key="loan.id">
                {{ formatDate(loan.checkoutDate) }}
              </div>
            </td>
            <td>
              <div v-for="loan in student.loans" :key="loan.id">
                {{ formatDate(loan.returnDate) }}
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>

      <v-card v-else class="mx-auto" max-width="800">
        <v-card-title>Detalhes do Aluno</v-card-title>
        <v-card-text>
          <p><strong>ID:</strong> {{ selectedStudent.id }}</p>
          <p>
            <strong>Matrícula:</strong> {{ selectedStudent.registrationNumber }}
          </p>
          <p><strong>Nome:</strong> {{ selectedStudent.name }}</p>
          <p><strong>Livros Emprestados:</strong></p>
          <div v-for="loan in selectedStudent.loans" :key="loan.id">
            <p>
              - {{ loan.book.title }} ({{ formatDate(loan.checkoutDate) }} -
              {{ formatDate(loan.returnDate) }})
            </p>
          </div>
          <p>
            <strong>Total de Livros Emprestados:</strong>
            {{ selectedStudent.loans.length }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="showingStudentDetails = false">
            Voltar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "StudentOverviewPage",
  data() {
    return {
      students: [
        // Dados dos alunos e empréstimos SIMULADOS
      ],
      searchRegistration: "",
      selectedStudent: null,
      showingStudentDetails: false,
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    viewStudentDetails() {
      const student = this.students.find(
        (s) => s.registrationNumber === this.searchRegistration
      );
      if (student) {
        this.selectedStudent = student;
        this.showingStudentDetails = true;
      } else {
        alert("Aluno não encontrado.");
      }
    },
    goBackToAdminPage() {
      this.$router.push("/pageAdministrador");
    },
  },
};
</script>
