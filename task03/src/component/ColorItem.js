import React, { useContext } from "react"
import { ColorDispatchContext } from "../App"

const ColorItem = ({id, title, color}) => {

	const {onDelete} = useContext(ColorDispatchContext)

	const onClickDelete = () => {
		onDelete(id)
	}
	return (
		<div className="TodoItem">
			<div className="title_col"> <h1>{title}</h1></div>
			<div style={{width: "100%", height: 30, backgroundColor: `${color}`}}></div>
			<div className="btn_col">
				<button onClick={onClickDelete}>X</button>
			</div>
		</div>
	)
}
export default React.memo(ColorItem)