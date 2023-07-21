import Todo from '@/components/todo';

export default function Page() {
  return (
    <h1>
      Hello, sunj.js!
      <div>
        <Todo text='one'></Todo>
        <Todo text='two'></Todo>
        <Todo text='three'></Todo>
      </div>
    </h1>
  );
}
