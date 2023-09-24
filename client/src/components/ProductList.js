import ProductDetails from "./ProductDetails";

export default function ProductList({products, reload}) {

	const prodInstock = products.filter(prod => prod.instock);

	return (
		<div>
			{
				prodInstock.map(prod => <ProductDetails key={prod.id} prod={prod} reload={reload}/>)
			}
		</div>
	)
}