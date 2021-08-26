const API_ID = 'm46EI0vGMX82sc19QRhT';
const URI = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/`;

export const getBooks = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const result = await fetch(URI, requestOptions);
  try {
    const books = await result.json();
    return books;
  } catch (error) {
    return {};
  }
};

export const createBook = async (book) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const newBook = JSON.stringify(book);
  const requestOptions = {
    method: 'POST',
    headers,
    body: newBook,
    redirect: 'follow',
  };
  const result = await fetch(URI, requestOptions);
  return result.status === 201;
};

export const deleteBook = async (id) => {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
  };
  const response = await fetch(`${URI}${id}`, requestOptions);
  const result = await response.text();
  return result === 'The book was deleted successfully!';
};
