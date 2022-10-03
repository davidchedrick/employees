import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const ProductsArea = ({ products }) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
};

export default ProductsArea;
