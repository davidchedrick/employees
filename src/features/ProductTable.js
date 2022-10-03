import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
	const rows = [];
	let lastCategory = null;

	products.forEach(product => {
		if (product.category !== lastCategory) {
			rows.push(
				<CategoryRow
					key={product.category}
					category={product.category}
				/>
			);
		}

		rows.push(
			<ProductRow
				product={product}
				key={product.name}
			/>
		);
		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default ProductTable;
