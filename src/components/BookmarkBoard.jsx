import { useState } from 'react';
import NewBookmark from './NewBookmark';
import PasswordCards from './PasswordCards';
import SearchAndSorting from './SearchAndSorting';

export default function BookmarkBoard() {
  const [bookMarks, setBookMarks] = useState([]);
  const [filteredBookMarks, setFilteredBookMarks] = useState([]);

  const handleAddBookMark = (newBookMark) => {
    setBookMarks([...bookMarks, newBookMark]);
    setFilteredBookMarks([...bookMarks, newBookMark]);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      const filteredBookMarks = bookMarks.filter((bookMark) => bookMark.web_url.toLowerCase().includes(searchTerm.toLowerCase()));

      setFilteredBookMarks(filteredBookMarks);
    } else {
      // If search term is empty, reset to show all bookmarks
      setFilteredBookMarks(bookMarks);
    }
  };

  return (
    <>
      {/* new book mark form */}
      <NewBookmark onAddBookMark={handleAddBookMark} />

      {/* main content */}
      <main className='p-8'>
        <div className='max-w-7xl mx-auto space-y-10 px-4'>
          {/*    <!-- Search, Sort, and Filter Buttons --> */}
          <SearchAndSorting onSearch={handleSearch} />

          {/* <!-- Password Cards Grid --> */}
          <PasswordCards bookMarks={filteredBookMarks} />
        </div>
      </main>
    </>
  );
}
