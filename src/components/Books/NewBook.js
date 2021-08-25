import PropTypes from 'prop-types';
import Button from './Button';
import './NewBook.css';

const NewBook = ({ categories }) => (
  <section className="section">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input placeholder="Book title" required />
      <select>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <Button name="ADD BOOK" btnType="submit" />
    </form>
  </section>
);

NewBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

NewBook.defaultProps = {
  categories: [],
};

export default NewBook;
