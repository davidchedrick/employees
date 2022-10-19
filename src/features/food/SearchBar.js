const SearchBar = ({
	searchText,
	inStockOnly,
	setSearchText,
	setInStockOnly,
}) => {
	return (
		<form>
			<input
				type="text"
				placeholder="Search..."
				value={searchText}
				onChange={e => setSearchText(e.target.value)}
			/>
			<label>
				<input
					type="checkbox"
					checked={inStockOnly}
					onChange={e => setInStockOnly(e.target.checked)}
				/>{" "}
				Only show products in stock
			</label>
		</form>
	);
};

export default SearchBar;
