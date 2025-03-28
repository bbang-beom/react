import { emotionList } from "../utils";
import "./Viewer.css";

const Viewer = ({content, emotionId}) => {
	const emotionItem = emotionList.find((it) => it.id === emotionId)
	return (
		<div className="Viewer">
			<section>
				<h4>오늘의 감정</h4>
				<div
						className={["emotion_img_wrapper", `emotion_img_wrapper_${emotionId}`,].join(" ")}>
						<img alt={emotionItem.name} src={emotionItem.img}></img>
						<div className="emotion_des">{emotionItem.name}</div>
				</div>
			</section>
			<section>
				<h4>오늘의 일기</h4>
				<div className="content_wrapper">
					<p>{content}</p>
				</div>
			</section>
		</div>
	)
}
export default Viewer