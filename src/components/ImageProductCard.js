import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ImageProductCard(props) {
	return (
		<Link to={`/product/${props.product.id}`}>
			<Card className="p-2 mt-2 ml-2 mr-2" style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src={
						props.product.images[0] != null
							? props.product.images[0].imageUrl
							: ""
					}
				/>
			</Card>
		</Link>
	);
}

export default ImageProductCard;
