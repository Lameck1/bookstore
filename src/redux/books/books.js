import books from './bookDummyData';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = books;

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  const authors = ['William Shakespeare', 'Agatha Christie', 'Barbara Cartland', 'Stephen King', 'Penny Jordan'];
  const currentChapter = ['Introduction', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'];
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
        ...action.payload,
        author: authors[Math.floor(Math.random() * authors.length)],
        progress: Math.floor(Math.random() * 100),
        currentChapter: currentChapter[Math.floor(Math.random() * currentChapter.length)],
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
