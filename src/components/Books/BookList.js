import PropTypes from 'prop-types';
import Book from './Book';
import './BookList.css';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => {
      const {
        category, title, author, progress, currentChapter,
      } = book;
      return (
        <li key={book.title}>
          <Book
            category={category}
            title={title}
            author={author}
            progress={progress}
            currentChapter={currentChapter}
          />
        </li>
      );
    })}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(Book),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
