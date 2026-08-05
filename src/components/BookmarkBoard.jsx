import NewBookmark from './NewBookmark';
import PasswordCards from './PasswordCards';
import SearchAndSorting from './SearchAndSorting';

export default function BookmarkBoard() {
  const handleAddBookMark = (newBookMark) => {
    console.log('👀 ~ handleAddBookMark ~ newBookMark:', newBookMark);
  };

  return (
    <>
      {/* new book mark form */}
      <NewBookmark onAddBookMark={handleAddBookMark} />

      {/* main content */}
      <main className='p-8'>
        <div className='max-w-7xl mx-auto space-y-10 px-4'>
          {/*    <!-- Search, Sort, and Filter Buttons --> */}
          <SearchAndSorting />

          {/* <!-- Password Cards Grid --> */}
          <PasswordCards />
        </div>
      </main>
    </>
  );
}
