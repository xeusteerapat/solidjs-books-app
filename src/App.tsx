import { createSignal } from 'solid-js';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

interface IBookshelfProps {
  name: string;
}

export type Book = {
  title: string;
  author: string;
};

const initialBooks: Book[] = [
  { title: 'Code Complete', author: 'Steve McConnell' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Living a Feminist Life', author: 'Sarah Ahmed' },
];

const App = (props: IBookshelfProps) => {
  const [books, setBooks] = createSignal(initialBooks);
  return (
    <div>
      <h1>Welcome to My Favorite Books</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
};

export default App;
