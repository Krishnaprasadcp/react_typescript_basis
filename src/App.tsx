import Todos from './components/Todo';
import Todo from './models/todo';
function App() {
  const todo=[
    new Todo('Heloo'),
    new Todo('Hii')
  ];
  return (
    <div>
      <Todos items={todo} />
    </div>
  );
}

export default App;
