import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import './BookActions.css';
import { removeBook } from '../../redux/books/books';

const BookActions = ({ id }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeBook(id));
  return (

    <div className="actions">
      <Button name="Comments" />
      <Button name="Remove" clickHandler={handleRemove} />
      <Button name="Edit" />
    </div>
  );
};

BookActions.propTypes = {
  id: PropTypes.number,
};

BookActions.defaultProps = {
  id: 1,
};

export default BookActions;
