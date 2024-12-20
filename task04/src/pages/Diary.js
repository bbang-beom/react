import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Viewer from "../component/Viewer";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../utils";

const Diary = () => {
	const {id} = useParams()
	const data = useDiary(id)
	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1)
	}

	const goEdit = () => {
		navigate(`/edit/${id}`)
	}

	if(!data) {
		return <div>일기를 불러오는 중...</div>
	} else {
		const { date, emotionId, content} = data
		const title = `${getFormattedDate(new Date(Number(date)))} 기록`
		return (
			<div>
				<Header title={title}
				leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
				rightChild={<Button text={"수정"} onClick={goEdit}/>}
				/>
				<div>Diary</div>
				<div>{id}번 일기</div>
				<Viewer content={content} emotionId={emotionId} />
			</div>
		)
	}
}
export default Diary