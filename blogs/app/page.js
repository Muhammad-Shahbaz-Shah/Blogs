import Blogs from "./components/Blogs";
import Clients from "./components/Clients";
import Main from "./components/Main";
import Pricing from "./components/Pricing";


export default function Home() {
  return (
    <main>
      <Main />
      <Blogs />
      <Pricing />
      <Clients/>

    </main>
  );
}
