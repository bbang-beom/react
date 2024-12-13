function Body() {
	function handleOnClick() {
		alert("버튼 클릭")
	}
	return (
		<div className="body">
			<button onClick={handleOnClick}>클릭</button>
		</div>
	)
}
export default Body;