import { React, useState } from "react";
import { Button } from "react-bootstrap";
function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>{count}</h1>
			<Button onClick={() => setCount(count + 1)} variant="outline-success">
				Plus
			</Button>
			<br />
			<Button
				variant="outline-danger"
				className="p-2 mt-2"
				onClick={() => setCount(count - 1)}
			>
				Minus
			</Button>
		</div>
	);
}

export default Counter;
