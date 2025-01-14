import { FeaturedComponents } from '../components'
import { customFetch } from '../utils/index'
import Hero from '../components/Hero'
const url='/products?featured=true'
const featuredProductsQuery={
  queryKey:['featuredProducts'],
  queryFn:()=>customFetch(url),
}
export const loader=(queryClient)=>async()=>{
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  const products=response.data.data;
  return {products};
}
const Landing = () => {
  return (
    <>
    <Hero/>
    <FeaturedComponents/>
    </>
  )
}

export default Landing