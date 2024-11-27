import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";
const FeaturedComponents = () => {
  return (
    <div className='pt-24'>
        <SectionTitle text="Featured Products"/>
        <ProductsGrid/>
      </div>
  )
}

export default FeaturedComponents