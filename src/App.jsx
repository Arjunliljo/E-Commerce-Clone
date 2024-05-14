import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      {/* {loading && <Loader />}
      {!loading && !error && <Main />} */}
      <Main></Main>
      <Footer />
    </>
  );
}

export default App;
