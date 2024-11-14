<template>
  <v-app>
    <!-- Conteúdo principal -->
    <v-main class="bg-grey-lighten-4">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="elevation-8 rounded-lg">
              <!-- Cabeçalho do card -->
              <div class="pa-8 text-center bg-primary">
                <v-icon size="64" color="white" class="mb-4"
                  >mdi-book-open-page-variant</v-icon
                >
                <h1 class="text-h4 font-weight-bold white--text">
                  Bem-vindo(a) a <br />
                  Biblioteca Virtual.
                </h1>
                <p class="text-subtitle-1 white--text mb-0">
                  Acesse sua conta para continuar
                </p>
              </div>

              <!-- Formulário de login -->
              <v-card-text class="pa-8">
                <v-form @submit.prevent="handleLogin" v-model="isFormValid">
                  <!-- Seleção do tipo de usuário -->
                  <v-select
                    v-model="userType"
                    :items="userTypes"
                    label="Tipo de Usuário"
                    prepend-inner-icon="mdi-account-circle"
                    variant="outlined"
                    class="mb-4"
                    required
                    :rules="[(v) => !!v || 'Selecione o tipo de usuário']"
                  ></v-select>

                  <!-- Campo de usuário -->
                  <v-text-field
                    v-model="username"
                    label="Usuário"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    class="mb-4"
                    required
                    :rules="[(v) => !!v || 'Digite seu usuário']"
                  ></v-text-field>

                  <!-- Campo de senha -->
                  <v-text-field
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    label="Senha"
                    prepend-inner-icon="mdi-lock"
                    :append-inner-icon="
                      showPassword ? 'mdi-eye-off' : 'mdi-eye'
                    "
                    variant="outlined"
                    @click:append-inner="showPassword = !showPassword"
                    required
                    :rules="[(v) => !!v || 'Digite sua senha']"
                  ></v-text-field>

                  <!-- Links de ajuda -->
                  <div class="d-flex justify-space-between align-center mb-6">
                    <v-checkbox
                      v-model="rememberMe"
                      label="Lembrar-me"
                      hide-details
                      class="mt-0"
                    ></v-checkbox>
                    <v-btn
                      variant="text"
                      color="primary"
                      class="text-decoration-none"
                      @click="forgotPassword"
                    >
                      Esqueceu a senha?
                    </v-btn>
                  </div>

                  <!-- Botão de login -->
                  <v-btn
                    type="submit"
                    color="primary"
                    block
                    size="large"
                    :loading="loading"
                    :disabled="!isFormValid"
                    elevation="2"
                  >
                    <v-icon start>mdi-login</v-icon>
                    Entrar
                  </v-btn>

                  <!-- Aviso de primeiro acesso -->
                  <div class="text-center mt-6">
                    <p class="text-grey-darken-1">Primeiro acesso?</p>
                    <v-btn
                      variant="text"
                      color="primary"
                      @click="showFirstAccessInfo"
                    >
                      Clique aqui para instruções
                    </v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Dialog de Primeiro Acesso -->
    <v-dialog v-model="firstAccessDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5 bg-primary text-white pa-4">
          Instruções para Primeiro Acesso
        </v-card-title>
        <v-card-text class="pa-4">
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-numeric-1-circle</v-icon>
              </template>
              <v-list-item-title
                >Para alunos: Use sua matrícula como usuário</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-numeric-2-circle</v-icon>
              </template>
              <v-list-item-title
                >A senha inicial é seu CPF (apenas números)</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="primary">mdi-numeric-3-circle</v-icon>
              </template>
              <v-list-item-title
                >No primeiro acesso, <br />
                você será solicitado a trocar sua senha.</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="firstAccessDialog = false">
            Entendi
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar para mensagens -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="4000">
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar.show = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

// Estados do formulário
const userType = ref("");
const username = ref("");
const password = ref("");
const showPassword = ref(false);
const loading = ref(false);
const rememberMe = ref(false);
const isFormValid = ref(false);
const firstAccessDialog = ref(false);

// Estado do snackbar
const snackbar = ref({
  show: false,
  text: "",
  color: "success",
});

// Opções de tipo de usuário
const userTypes = [
  { title: "Aluno", value: "student" },
  { title: "Funcionário", value: "employee" },
];

// Links rápidos para o footer

// Funções
const handleLogin = async () => {
  if (!isFormValid.value) return;

  loading.value = true;

  try {
    // Simula um delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simula uma validação básica
    if (username.value === "admin" && password.value === "admin123") {
      snackbar.value = {
        show: true,
        text: "Login realizado com sucesso!",
        color: "success",
      };
      // Aqui você redirecionaria para a página principal
      console.log("Login bem-sucedido!");
    } else {
      snackbar.value = {
        show: true,
        text: "Usuário ou senha inválidos",
        color: "error",
      };
    }
  } catch (error) {
    snackbar.value = {
      show: true,
      text: "Erro ao realizar login. Tente novamente.",
      color: "error",
    };
  } finally {
    loading.value = false;
  }
};

const forgotPassword = () => {
  snackbar.value = {
    show: true,
    text: "Um e-mail de recuperação será enviado para sua conta cadastrada.",
    color: "info",
  };
};

const showFirstAccessInfo = () => {
  firstAccessDialog.value = true;
};
</script>

<style scoped>
.v-application {
  background-color: #f5f5f5;
}

.v-card {
  border-radius: 16px;
  overflow: hidden;
}

.v-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.v-list-item {
  min-height: 35px !important;
}

.v-list-item:hover .v-list-item-title {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.gradient-header {
  background: linear-gradient(
    45deg,
    var(--v-primary-base),
    var(--v-secondary-base)
  );
}
</style>
