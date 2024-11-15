<template>
  <v-footer class="bg-indigo">
    <v-container>
      <v-row>
        <!-- Informações de Contato -->
        <v-col cols="12" md="4">
          <h3 class="text-h6 font-weight-bold white--text mb-4">Contato</h3>
          <v-list class="bg-transparent pa-0">
            <v-list-item class="pa-0 mb-2">
              <template v-slot:prepend>
                <v-icon color="white" size="small">mdi-map-marker</v-icon>
              </template>
              <v-list-item-title class="text-white">
                Rua: Paulo Airton G. Pacheco, 435. <br />
                Bairro: Dirceu Arcoverde, Parnaíba-Piauí.
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="pa-0 mb-2">
              <template v-slot:prepend>
                <v-icon color="white" size="small">mdi-phone</v-icon>
              </template>
              <v-list-item-title class="text-white">
                (86) 9 9450-3910
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="pa-0">
              <template v-slot:prepend>
                <v-icon color="white" size="small">mdi-email</v-icon>
              </template>
              <v-list-item-title class="text-white">
                contato@seduc.pi.gov.br
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Links Rápidos -->
        <v-col cols="12" md="4">
          <h3 class="text-h6 font-weight-bold white--text mb-4">
            Links Rápidos
          </h3>
          <v-list class="bg-transparent pa-0">
            <v-list-item
              v-for="link in quickLinks"
              :key="link.title"
              :to="link.route"
              class="pa-0 mb-2"
            >
              <template v-slot:prepend>
                <v-icon color="white" size="small">{{ link.icon }}</v-icon>
              </template>
              <v-list-item-title class="text-white">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Horário de Funcionamento -->
        <v-col cols="12" md="4">
          <h3 class="text-h6 font-weight-bold white--text mb-4">
            Horário de Funcionamento
          </h3>
          <v-list class="bg-transparent pa-0">
            <v-list-item class="pa-0 mb-2">
              <template v-slot:prepend>
                <v-icon color="white" size="small">mdi-clock-outline</v-icon>
              </template>
              <v-list-item-title class="text-white">
                Segunda a Sexta: 8h às 18h
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="pa-0">
              <template v-slot:prepend>
                <v-icon color="white" size="small">mdi-clock-outline</v-icon>
              </template>
              <v-list-item-title class="text-white">
                Sábado: 8h às 12h
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Copyright -->
      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-divider color="white" class="mb-4"></v-divider>
          <span class="text-white">
            &copy; {{ new Date().getFullYear() }} Biblioteca. Todos os direitos
            reservados.
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const quickLinks = [
  {
    title: "Visão Geral",
    icon: "mdi-view-dashboard",
    route: "/pageVisaoGeral",
  },
  {
    title: "Catálogo",
    icon: "mdi-book-multiple",
    route: "/pageCatalogo",
  },
  {
    title: "Pesquisar Livros",
    icon: "mdi-magnify",
    route: "/pagePesquisaLivro",
  },
  {
    title: "Empréstimos",
    icon: "mdi-book-arrow-right",
    route: "/pageEmprestarLivro",
  },
];
</script>
