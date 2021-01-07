import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard(props) {
	return (
		<Card className="p-2 mt-2 ml-2 mr-2" style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={
					props.product.images[0] != null
						? props.product.images[0].imageUrl
						: ""
				}
			/>
			<Card.Body>
				<Card.Title>{props.product.name}</Card.Title>
				<Card.Text>{props.product.description}</Card.Text>
				<p>${props.product.price}</p>
			</Card.Body>
			<Button variant="primary">Check Product</Button>
		</Card>
	);
}

export default ProductCard;
