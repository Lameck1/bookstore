import Button from './Button';
import './BookActions.css';

const BookActions = () => (
  <div className="actions">
    <Button name="Comments" />
    <Button name="Remove" />
    <Button name="Edit" />
  </div>
);

export default BookActions;
