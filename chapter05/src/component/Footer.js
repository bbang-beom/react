// JSX 스타일링
// 스타일링: CSS와 같은 스타일 규칙을 이용해 요소의 크기, 색상등을 결정하는 일
// 인라인 스타일링
// html의 style 속성을 이용해 직접 스타일을 정의하는 방법
// JSX의 인라인 스타일링은 style({스타일 규칙})과 같은 문법으로 작성한다.

// 스타일 파일 분리
import "./css/footer.css";

function Footer() {
	const str = "hello"
	return (
		<footer style={{background: "Red", color: "blue"}}>
			<h1 className="footer">footer</h1>
			<h1 id="h101">{str}</h1>
		</footer>
	)
}
export default Footer;