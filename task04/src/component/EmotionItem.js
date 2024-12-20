import React from "react"
import "./EmotionItem.css"

const EmotionItem = ({id, img, name, onclick, isSelected}) => {
	const handleOnClick = () => {
		onclick(id)
	}

	return (
		<div className={["EmotionItem", isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,].join(" ")} onClick={handleOnClick}>
			<img alt={`emotion${id}`} src={img}></img>
			<span>{name}</span>
		</div>
	)
}
export default React.memo(EmotionItem)