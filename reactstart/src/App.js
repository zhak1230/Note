// import Button from './Button';
// import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };

  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// map() 함수
// -> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
// 즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
// 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
// -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
// 다만 기존의 배열에 접근할 수 없게됨
// 그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
// map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
// map((item) => item.toUpperCase())
// 로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌

// 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
// map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
// 그래서
// {toDos.map((item, index) => {item})}
// 만들어줌
// 즉,
// {{item},{item},{item}...}
// 배열을 만들어 각자 고유의 key를 가지게 함

// Todos 삭제기능 연습
// localstorage를 활용하지 않으므로 간단히 부모요소를 찾아 없애주면 된다.(같은 단어라도 중복삭제 안됨)
// const deleteBtn = index => {
// const li = event.target.parentElement;
// li.remove();
// };

// 〈ul>
// {todos.map((item, index) => (
// 〈li key={index}>
// {item}
// 〈button onClick={deleteBtn}>❌〈/button>
// 〈/li>
// ))}
// 〈/ul>

// 하지만 단순히 부모요소를 삭제하는게 아닌 배열에 들어가있는 index와 삭제할(버튼의 li) index를 찾아서 삭제할 경우 (filter함수 사용)
// const deleteBtn = index => {
// setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
// };

// 〈ul>
// {todos.map((item, index) => (
// 〈li key={index}>
// {item}
// 〈button onClick={() => deleteBtn(index)}>❌〈/button>
// 〈/li>
// ))}
// 〈/ul>

// filter 함수에 넣는 두 번째 인자는 todos 배열에 있는 요소의 index가 들어간다.
// (두 번째 인자를 써본 경험이 없어서 새로 알게 된 사실)
// 또한 onClick={deleteBtn} 이 아닌onClick={() => deleteBtn(index)} 이렇게 쓰는 이유는 "바로 실행"되지 않고 클릭을 기다리는 함수로 쓰기 위함
