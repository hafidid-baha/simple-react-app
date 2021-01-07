import { React, useEffect, useState } from "react";
import axios from "axios";
import ImageProductCard from "../components/ImageProductCard";

function Home() {
	let content = null;
	const [Products, setProducts] = useState({
		loading: false,
		data: null,
	});
	const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products";
	useEffect(() => {
		setProducts({
			loading: true,
			data: null,
		});
		axios.get(url).then((res) => {
			setProducts({
				loading: false,
				data: res.data,
			});
		});
	}, [url]);
	if (Products.loading) {
		content = <p>loading...</p>;
	}
	if (Products.data) {
		// content = (
		// 	<Card className="p-2 mt-2" style={{ width: "18rem" }}>
		// 		<Card.Img variant="top" src={p.data.images[0].imageUrl} />
		// 		<Card.Body>
		// 			<Card.Title>{p.data.name}</Card.Title>
		// 			<Card.Text>{p.data.description}</Card.Text>
		// 			<p>${p.data.price}</p>
		// 		</Card.Body>
		// 	</Card>
		// );
		content = Products.data.map((product, key) => {
			console.log(product);
			return <ImageProductCard product={product}></ImageProductCard>;
		});
	} else {
		content = <h1>Home Page</h1>;
	}
	return content;
}

export default Home;
