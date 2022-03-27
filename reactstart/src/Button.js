import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

// - 1 컴포넌트 당 1개의 .js 파일을 가질 수 있어서 모듈화가 가능하다.
// - 컴포넌트별 스타일은 .module.css 파일을 생성 + import 하여 사용
// => 여기서 스타일은 className이나 id로 import한 스타일 객체의
// property를 전달하여 적용된다는 것! 이는 기존의 "어떤 class나 id에 적용할 스타일"이 아닌 "특정 jsx element에 적용할 스타일"로 생각할 수 있다~ react 컴파일 과정 중 random class나 id가 생성되기 때문에 .css 파일의 class, id 이름을 굳이 외울 필요없다
// - create-react-app을 사용하면 React 앱 스캐폴딩을 생성해준다
