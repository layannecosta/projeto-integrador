// Importações de componentes de páginas
import Details from "./pages/details";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import NotFound from "./pages/NotFound";
import SearchProducts from "./pages/search";

// Importações de estilos
import "./style.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importação do template base
import UserTemplate from "./template/user-template";

// Importações do React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/**
 * Componente principal da aplicação
 * Configura e gerencia todas as rotas da aplicação usando React Router
 */
export default function App() {
  // Configuração das rotas da aplicação
  const router = createBrowserRouter([
    {
      // Rota da página inicial
      path: "/",
      element: (
        <UserTemplate>
          <Home />
        </UserTemplate>
      ),
    },
    {
      // Rota da listagem de produtos
      path: "/products",
      element: (
        <UserTemplate>
          <ListProducts />
        </UserTemplate>
      ),
    },
    {
      // Rota dos detalhes de um produto específico
      path: "/products/details",
      element: (
        <UserTemplate>
          <Details />
        </UserTemplate>
      ),
    },
    {
      // Rota de busca de produtos
      path: "/products/search",
      element: (
        <UserTemplate>
          <SearchProducts />
        </UserTemplate>
      ),
    },
    {
      // Rota para páginas não encontradas (404)
      path: "*",
      element: (
        <UserTemplate>
          <NotFound />
        </UserTemplate>
      ),
    },
  ]);

  // Renderiza o provedor de rotas com a configuração definida
  return <RouterProvider router={router} />;
}