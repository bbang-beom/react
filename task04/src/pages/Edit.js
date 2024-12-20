import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DiaryDispatchContext } from "../App"
import Button from "../component/Button"
import Editor from "../component/Editor"
import Header from "../component/Header"
import useDiary from "../hooks/useDiary"

const Edit = () => {
	const {id} = useParams()
	const data = useDiary(id)
	const navigate = useNavigate()
	const {onUpdate, onDelete} = useContext(DiaryDispatchContext)

	const onSubmit = (data) => {
		if(window.confirm("일기를 수정하시겠습니까?")) {
			const {date, content, emotionId} = data
			onUpdate(id, date, content, emotionId)
			navigate("/", {replace: true})
		}
	}
	
	const onClickDelete = () => {
		if(window.confirm("일기를 정말 삭제하시겠습니까? 삭제된 일기는 복구되지 않습니다.")) {
			onDelete(id)
			navigate("/", {replace:true})
		}
	}

	const goBack = () => {
		navigate(-1)
	}

	if(!data) {
		return <div>일기를 불러오는 중...</div>
	} else {
		return (
			<div>
				<Header title={"일기 수정"} 
				leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
				rightChild={<Button type={"negative"} text={"삭제"} onClick={onClickDelete}/>}
				/>
				<Editor initData={data} onSubmit={onSubmit}/>
			</div>
		)
	}
}
export default Edit