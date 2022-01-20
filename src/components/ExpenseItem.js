import { useState } from "react";
function ExpenseItem() {
	const [time, setTime] = useState("loading");

	const clickHandler = () => {
		setTime(new Date().toLocaleTimeString());
	};

	return (
		<div className="flex bg-slate-300 justify-center gap-4">
			<span className="bg-pink-400 rounded-lg self-center p-3">
				Time is: {time}
			</span>
			<button onClick={clickHandler} className="btn bg-sky-400 hover:bg-white">
				Update Time
			</button>
		</div>
	);
}

export default ExpenseItem;
