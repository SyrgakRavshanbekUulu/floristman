import {Discounts} from "./components/discounts/discounts";
import {ForWhom} from "./components/for-whom/for-whom";
import {Header} from "./components/header/header";
import {MainBlock} from "./components/main-block/mainBlock";

function App() {
  return (
    <div>
      <Header/>
      <MainBlock />
      <Discounts />
      <ForWhom />
    </div>
  )
}

export default App;
