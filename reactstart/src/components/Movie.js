import PropTypes from 'prop-types';

function Movie({ coverImg, title, summary, state, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      state: {state}
      <ul>{genres.map((g) => <li key={g}>{g}</li> && genres)}</ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

// A && B 에서 둘중 하나라도 undefined면 undefined 반환
// 둘 다 값이 존재한다면 && 오른쪽 값 반환 (B값 반환)

// A || B 에서 둘 다 undefined면 undefined 반환
// 둘 중 하나만 값이 존재한다면 존재하는 값 반환
// 둘 다 값이 존재한다면 || 왼쪽값 반환 (A값 반환)

// 제가 해보니까 이런식으로 나와서 그걸 토대로 생각해봤습니다

// genres = A = undefined 라고 할 때 코드를 간단하게 표현하면

// { A && A.map( ~~ ) }

// && 의 경우 둘중 하나라도 undefined면 undefined값을 반환하는데
// A가 undefined 일 때 { A && 딱 여기까지만 왔을 때 이미
// { } 값이 undefiend를 반환하는 것으로 결정돼서
// && 뒤에 A.map(~~)은 패스하는 것 같습니다

// { A.map( ~~ ) && A }

// A가 undefined일 때 이렇게 하면 에러
