import { Setter, JSX, createSignal } from 'solid-js';
import { Book } from '../App';

export interface IAddBookProps {
  setBooks: Setter<Book[]>;
}

const emptyBook: Book = {
  title: '',
  author: '',
};

const AddBook = (props: IAddBookProps) => {
  const [newBook, setNewBook] = createSignal(emptyBook);

  const addBook: JSX.EventHandler<HTMLButtonElement, MouseEvent> = e => {
    e.preventDefault();
    props.setBooks(books => [...books, newBook()]);
    setNewBook(emptyBook);
  };

  return (
    <form>
      <div>
        <label for='title'>Book Name</label>
        <input
          type='text'
          id='title'
          value={newBook().title}
          onInput={e =>
            setNewBook({ ...newBook(), title: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <label for='author'>Author</label>
        <input
          type='text'
          id='author'
          value={newBook().author}
          onInput={e =>
            setNewBook({ ...newBook(), author: e.currentTarget.value })
          }
        />
      </div>
      <button type='submit' onclick={addBook} style={{ 'margin-top': '1rem' }}>
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
