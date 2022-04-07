import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App flex w-full max-w-[40rem] flex-col items-center font-['Epilogue'] md:max-w-[50.625rem] xl:max-w-[69.375rem]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
