import Cardapio from "./components/cardapio/cardapio";
import Hero from "./components/hero/hero";
import Informacoes from "./components/informacoes/informacoes";
import Menu from "./components/menu_superior/menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <Informacoes />
      <Cardapio />
    </div>
  );
}
