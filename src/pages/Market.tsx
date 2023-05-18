import ProductsCard from "../components/ProductCard";


const Market = () => {
	return (
		<div className="bg-[#fafafb] p-8 min-h-[100vh]  dark:bg-[#141D26]">
      <div className="dark:text-white">
        <h3 className="font-bold text-xl">Welcome to the Market Place</h3>
      </div>
			<div className="grid grid-cols-2 gap-6 mt-4">
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
