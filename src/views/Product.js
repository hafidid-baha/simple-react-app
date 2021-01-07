import { React, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

function Product() {
	const { id } = useParams();
	const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
	const [p, setProduct] = useState({
		loading: false,
		data: null,
	});
	let content = null;

	useEffect(() => {
		setProduct({
			loading: true,
			data: null,
		});
		axios.get(url).then((res) => {
			setProduct({
				loading: false,
				data: res.data,
			});
		});
	}, [url]);

	if (p.loading) {
		content = <p>loading...</p>;
	}

	if (p.data) {
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
		content = <ProductCard product={p.data}></ProductCard>;
	}

	return content;
}

export default Product;
