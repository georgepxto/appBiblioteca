<template>
  <v-container class="pa-0 bg-white" fluid>
    <!-- Navbar  -->
    <v-sheet class="py-3 px-5 mb-6 fundo-gradiente">
      <div class="d-flex align-center">
        <v-icon icon="mdi-account-circle" color="white" class="me-2"></v-icon>
        <span class="text-white me-2">João Silva</span>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">
          <v-chip size="small" class="me-4"> Administrador </v-chip>
          <v-btn color="white" variant="text" prepend-icon="mdi-logout">
            Sair
          </v-btn>
        </div>
      </div>
    </v-sheet>

    <!-- Container principal -->
    <v-container class="margem">
      <v-row justify="center">
        <!-- Primeira linha -->
        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageCadastrarUsuario"
          >
            <v-avatar color="cyan" size="56" class="me-4">
              <v-icon icon="mdi-account-plus" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Cadastrar usuário</span>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageFilaEmprestimo"
          >
            <v-avatar color="cyan" size="56" class="me-4">
              <v-icon icon="mdi-account-group" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Fila de empréstimo</span>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageRelatorios"
          >
            <v-avatar color="cyan" size="56" class="me-4">
              <v-icon icon="mdi-chart-line" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Relatórios</span>
          </v-card>
        </v-col>

        <!-- Segunda linha -->
        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageCadastrarLivro"
          >
            <v-avatar color="light-green" size="56" class="me-4">
              <v-icon icon="mdi-book-plus" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Cadastrar livro</span>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageRemoverLivro"
          >
            <v-avatar color="red" size="56" class="me-4">
              <v-icon icon="mdi-book-minus" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Remover livro</span>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageVisaoGeral"
          >
            <v-avatar color="pink-lighten-2" size="56" class="me-4">
              <v-icon icon="mdi-school" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Visão geral dos alunos</span>
          </v-card>
        </v-col>

        <!-- Terceira linha -->
        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageEmprestarLivro"
          >
            <v-avatar color="blue" size="56" class="me-4">
              <v-icon icon="mdi-book-open-page-variant" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Emprestar livro</span>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pagePesquisaLivro"
          >
            <v-avatar color="amber" size="56" class="me-4">
              <v-icon icon="mdi-magnify" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Pesquisar livro</span>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card
            elevation="1"
            class="d-flex align-center pa-4 rounded-xl bg-grey-lighten-4"
            @click="pageCatalogo"
          >
            <v-avatar color="grey" size="56" class="me-4">
              <v-icon icon="mdi-bookshelf" size="32"></v-icon>
            </v-avatar>
            <span class="text-subtitle-1">Catálogo</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// Função para redirecionar
const pageCatalogo = () => {
  router.push("./pageCatalogo");
};
const pageEmprestarLivro = () => {
  router.push("./pageEmprestarLivro");
};
const pageFilaEmprestimo = () => {
  router.push("./pageFilaEmprestimo");
};

const pagePesquisaLivro = () => {
  router.push("./pagePesquisaLivro");
};
const pageRelatorios = () => {
  router.push("./pageRelatorios");
};
const pageVisaoGeral = () => {
  router.push("./pageVisaoGeral");
};
const pageCadastrarUsuario = () => {
  router.push("./pageCadastrarUsuario");
};
const pageCadastrarLivro = () => {
  router.push("./pageCadastrarLivro");
};
const pageRemoverLivro = () => {
  router.push("./pageRemoverLivro");
};
</script>

<style scoped>
.fundo-gradiente {
  background: linear-gradient(180deg, #3f51b5, #283593);

  color: white;
}
.margem {
  margin-top: 50px;
  margin-bottom: 150px;
}

.v-card {
  transition: transform 0.2s;
  cursor: pointer;
  height: 100%;
  border: 1px solid #e0e0e0;
}

.v-card:hover {
  transform: scale(1.02);
}

.text-subtitle-1 {
  word-break: break-word;
}
</style>
