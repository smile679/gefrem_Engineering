import Footer from "./components/footer/Layout";
import Header from "./components/header/Layout"
import Home from "./components/home/Layout";

function App() {

  return (
    <section className="w-full min-h-screen">
      <div className="w-full relative flex flex-col justify-center items-center">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </section>
  )
}

export default App;