import books from './bookDummyData';
import NewBook from './NewBook';
import BookList from './BookList';
import './BookPage.css';

const BooksPage = () => (
  <div className="book-page">
    <BookList books={books} />
    <NewBook categories={books.map((book) => book.category)} />
  </div>
);

export default BooksPage;
