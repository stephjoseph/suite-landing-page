import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App flex w-full max-w-[47.938rem] flex-col items-center font-['Epilogue'] md:max-w-[79.938rem] xl:max-w-[95.938rem]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
