import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ArticlesItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";

const ArticlesList = () => {
	const [addedItems, setAddedItems] = useState([]);
	const { tg, queryId } = useTelegram();

	return (
		<div className={"list"}>
			{products.map((item) => (
				<ArticlesItem className={"item"} />
			))}
		</div>
	);
};

export default ArticlesList;
