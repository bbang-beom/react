import React from "react"
import { useNavigate } from "react-router-dom"
import { getEmotionImgById } from "../utils"
import Button from "./Button"
import "./DiaryItem.css"

const DiaryItem = ({id, emotionId, content, date}) => {
	const navigate = useNavigate()

	const goDetail = () => {
		navigate(`/diary/${id}`)
	}

	const goEdit = () => {
		navigate(`/edit/${id}`)
	}

	return(
		<div className="DiaryItem">
			<div onClick={goDetail} className={["img_section", `img_section${emotionId}`].join(" ")}>
				<img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)}></img>
			</div>
			<div onClick={goDetail} className="info_section">
				<div className="date_wrapper">{new Date(parseInt(date)).toLocaleDateString()}</div>
				<div className="content_wrapper">{content.slice(0, 25)}</div>
			</div>
			<div className="button_section">
					<Button onClick={goEdit} text={"수정"} />
			</div>
		</div>
	)
}
export default React.memo(DiaryItem)