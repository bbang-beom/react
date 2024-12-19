import { useContext, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful"
import { ColorDispatchContext } from "../App"
import "./ColorEditor.css"

		const ColorEditor = () => {
		const {onCreate} = useContext(ColorDispatchContext)
		const [title, setTitle] = useState("")
		const [color, setColor] = useState("#aabbcc")
		const inputRef = useRef()

		const onChangeTitle = (e) => {
			setTitle(e.target.value)
		}

		const onSubmit = () => {
			if(!(title && color)) {
				inputRef.current.focus()
				return
			}
			onCreate(title, color)
			setTitle("")
		}
		const onKeyDown = (e) => {
			if(e.keyCode === 13) {
				onSubmit();
			}
		}

	return (
		<div className="ColorEditor">
			<section>
				<input ref={inputRef} value={title} onChange={onChangeTitle} onKeyDown={onKeyDown} placeholder="color title..."></input>
				<button onClick={onSubmit}>ADD</button>
				<HexColorPicker value={color} onChange={setColor}/>
			</section>
		</div>
	)
}
export default ColorEditor