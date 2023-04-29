import ProductsCard from "../components/ProductCard";


const Market = () => {
	return (
		<div className="bg-[#fafafb] p-8 min-h-[100vh]  dark:bg-[#141D26]">
			<div className="grid grid-cols-2 gap-6">
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
        <ProductsCard/>
      </div>
		</div>
	);
};

export default Market;
