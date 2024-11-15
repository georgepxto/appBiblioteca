<template>
  <v-app-bar color="indigo" elevation="1" height="90">
    <div class="d-flex align-center">
      <div>
        <img :src="logo" alt="Logo" width="90px" height="70px" />
      </div>

      <v-app-bar-title class="text-uppercase font-weight-bold">
        Protótipo - Biblioteca
      </v-app-bar-title>
    </div>

    <v-spacer></v-spacer>

    <!-- Menu para telas pequenas -->
    <v-menu open-on-hover class="d-flex d-md-none">
      <v-list>
        <v-list-item to="/pageVisaoGeral">
          <v-list-item-title>
            <v-icon start>mdi-view-dashboard</v-icon>
            Visão Geral
          </v-list-item-title>
        </v-list-item>

        <v-list-item to="/pageCatalogo">
          <v-list-item-title>
            <v-icon start>mdi-book-multiple</v-icon>
            Catálogo
          </v-list-item-title>
        </v-list-item>

        <v-list-item to="/pagePesquisaLivro">
          <v-list-item-title>
            <v-icon start>mdi-magnify</v-icon>
            Pesquisar
          </v-list-item-title>
        </v-list-item>

        <v-list-item @click="handleLogout">
          <v-list-item-title>
            <v-icon start>mdi-logout</v-icon>
            Sair
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Botões para telas maiores -->
    <div class="d-none d-md-flex">
      <!-- <v-btn variant="text" to="/pageVisaoGeral" class="text-white me-2">
        <v-icon start>mdi-view-dashboard</v-icon>
        Visão Geral
      </v-btn>

      <v-btn variant="text" to="/pageCatalogo" class="text-white me-2">
        <v-icon start>mdi-book-multiple</v-icon>
        Catálogo
      </v-btn> -->

      <v-btn variant="text" to="/pagePesquisaLivro" class="text-white me-2">
        <v-icon start>mdi-magnify</v-icon>
        Pesquisar
      </v-btn>

      <v-btn variant="text" @click="handleLogout" class="text-white">
        <v-icon start>mdi-logout</v-icon>
        Sair
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";
import logo from "@/assets/logo.png";

const router = useRouter();

const handleLogout = () => {
  router.push("/");
};
</script>
