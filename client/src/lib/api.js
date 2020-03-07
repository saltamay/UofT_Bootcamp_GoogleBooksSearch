const URL = 'https://www.googleapis.com/books/v1';
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

export const api = {
  getBooks: async query => {
    const endpoint = `${URL}/volumes?q=${query}+intitle:${query}&key=${API_KEY}`;

    try {
      const res = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        const resJson = await res.json();
        return resJson;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
