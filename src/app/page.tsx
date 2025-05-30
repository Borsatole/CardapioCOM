import Cardapio from "./components/cardapio/cardapio";
import { AppProvider } from "./components/carrinho_compras/appContext";
import Hero from "./components/hero/hero";
import Informacoes from "./components/informacoes/informacoes";
import Menu from "./components/menu_superior/menu";

export default function Home() {
  return (
    <div>
      <AppProvider>
      <Menu />
      <Hero />
      <Informacoes />
      <Cardapio />
      </AppProvider>
    </div>
  );
}
