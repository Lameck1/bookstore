import { useSelector } from 'react-redux';
import NewBook from './NewBook';
import BookList from './BookList';
import './BooksPage.css';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-page">
      <BookList books={books} />
      <NewBook categories={books.map((book) => book.category)} />
    </div>
  );
};

export default BooksPage;
