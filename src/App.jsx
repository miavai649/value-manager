import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import NewBookmark from './components/NewBookmark';
import SearchAndSorting from './components/SearchAndSorting';

function App() {
  return (
    <>
      <Header />
      <NewBookmark />

      {/* main content */}
      <main class='p-8'>
        <div class='max-w-7xl mx-auto space-y-10 px-4'>
          {/*    <!-- Search, Sort, and Filter Buttons --> */}
          <SearchAndSorting />

          {/* <!-- Password Cards Grid --> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
