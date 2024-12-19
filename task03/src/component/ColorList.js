import { useContext, useState } from "react"
import { ColorStateContext } from "../App"
import ColorItem from "./ColorItem"

const ColorList = () => {
	const [list] = useState("")
	const color = useContext(ColorStateContext)

	const getList = () => {
		return list === "" ? color:color.filter((it) => it.title.toLowerCase().includes(list.toLowerCase()))
	}

	return(
		<div className="ColorList">
			<div className="list_wrapper">
				{
					getList().map((it) => (
						<ColorItem key={it.id} {...it}/>
					))
				}
			</div>
		</div>
	)
}


export default ColorList