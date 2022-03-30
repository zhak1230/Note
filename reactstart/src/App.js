import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/hello'}>
          <h1>Hello</h1>
        </Route>
        <Route path='/movie'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

// react-router-dom
// npm i react-router-dom@5.3.0
// https://v5.reactrouter.com/web/guides/quick-start

// react-router-dom 5버전 -> 버전6 바뀐 부분

// 1. Switch컴포넌트가 Routes컴포넌트로 대체되었습니다.
// Switch -> Routes

// 2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
// Route path="/" element={< Home / >}

// 1) 더이상 Switch는 쓰이지 않는다(버젼 6이상). 이제 그역할은 Routes가 대신할 것이다 (공식문서 참조), 또한 Route 태그의 exact 속성도 더이상 쓰이지 않으며 Routes가 알아서 최적의 경로배정을 해주기 때문에 Switch를 썼을 때의 고민을 말끔히 해결해 준다
// 2) BROWSER ROUTER가 일반적인 방식이며, HASHROUTER는 잘 쓰이진 않는다(뒤에 #이런게 붙음)
// 3) 한 라우트에서 다른 라우트로 가고 싶을 땐 a태그의 href을 속성이 가장 먼저 생각이 날 것이고, 실제로도 그렇게 코드를 작성하면 이동이 가능하다. 하지만 페이지 전체가 새로고침되기 때문에 리액트의 장점을 깎아먹는다. 따라서 재실행되는 것을 막기 위해 react-router-dom에서 import한 link 태그를 사용하면 된다

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./routes/Home";

// function App() {
// return <Router>
// <Routes>
// <Route path="/" element={<Home />} />
// </Routes>
// </Router>;
// }

// export default App;
