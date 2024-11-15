import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

// Importando as páginas
import LoginPage from "@/pages/index.vue";
import AdminPage from "@/pages/pageAdministrador.vue";
import CatalogoPage from "@/pages/pageCatalogo.vue";
import EmprestarLivroPage from "@/pages/pageEmprestarLivro.vue";
import FilaEmprestimoPage from "@/pages/pageFilaEmprestimo.vue";
import PesquisaLivroPage from "@/pages/pagePesquisaLivro.vue";
import RelatoriosPage from "@/pages/pageRelatorios.vue";
import VisaoGeralPage from "@/pages/pageVisaoGeral.vue";
import CadastrarUsuarioPage from "@/pages/pageCadastrarUsuario.vue";
import CadastrarLivroPage from "@/pages/pageCadastrarLivro.vue";
import RemoverLivroPage from "@/pages/pageRemoverLivro.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "pageAdministrador",
        name: "admin",
        component: AdminPage,
      },
      {
        path: "pageCatalogo",
        name: "catalogo",
        component: CatalogoPage,
      },
      {
        path: "pageEmprestarLivro",
        name: "emprestar",
        component: EmprestarLivroPage,
      },
      {
        path: "pageFilaEmprestimo",
        name: "fila",
        component: FilaEmprestimoPage,
      },
      {
        path: "pagePesquisaLivro",
        name: "pesquisa",
        component: PesquisaLivroPage,
      },
      {
        path: "pageRelatorios",
        name: "relatorios",
        component: RelatoriosPage,
      },
      {
        path: "pageVisaoGeral",
        name: "visaogeral",
        component: VisaoGeralPage,
      },
      {
        path: "pageCadastrarUsuario",
        name: "cadastrarusuario",
        component: CadastrarUsuarioPage,
      },
      {
        path: "pageCadastrarLivro",
        name: "cadastrarlivro",
        component: CadastrarLivroPage,
      },
      {
        path: "pageRemoverLivro",
        name: "removerlivro",
        component: RemoverLivroPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Tratamento de erros de carregamento
router.onError((error, to) => {
  if (error.message.includes("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      window.location.href = to.fullPath;
    } else {
      console.error(
        "Dynamic import error, reloading page did not fix it",
        error
      );
    }
  } else {
    console.error("Router error:", error);
  }
});

// Limpeza do flag de reload quando o router estiver pronto
router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
