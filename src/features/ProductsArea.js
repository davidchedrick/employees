import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const ProductsArea = ({ products }) => {
	const [searchText, setSearchText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<div>
			<SearchBar
				searchText={searchText}
				inStockOnly={inStockOnly}
				setSearchText={setSearchText}
				setInStockOnly={setInStockOnly}
			/>
			<ProductTable
				searchText={searchText}
				inStockOnly={inStockOnly}
				products={products}
			/>
		</div>
	);
};

export default ProductsArea;
