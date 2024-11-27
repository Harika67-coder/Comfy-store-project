import FormInput from "./FormInput"
import FormSelect from "./FormSelect";
import { Form, Link,useLoaderData } from "react-router-dom"
import FormRange from "./FormRange";
import FormCheck from "./FormCheck";
const Filters = () => {
  const {meta,params}=useLoaderData();
  const sortBy=[
    'a-z','z-a','high','low'
  ]
  const {search,category,company,sort,range}=params;
  return (
    <Form className="bg-base-200 rounded-lg mb-[30px]">
      <div className="p-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4  gap-y-8 items-center  ">
          <FormInput 
             type="search" 
             label="Search Product" name="search" 
             size="input-sm" 
             defaultValue={search} 
             
          />
          <FormSelect 
             label="Select Category" 
             name="category" 
             items={meta.categories} 
             size="select-sm" 
             defaultValue={category}
          />
          <FormSelect 
            label="Select Company" 
            name="company" 
            items={meta.companies} 
            size="select-sm" 
            defaultValue={company} 
          />
          <FormSelect 
            label="Sort By" 
            name="sort" 
            items={sortBy} 
            size="select-sm" 
            defaultValue={sort} 
          
          />
          <FormRange 
            type="range" 
            price={range}
            name="range" 
            label="Select Price" 
            size="range-sm"
          />
          <FormCheck 
            type="checkbox" 
            label="Free Shipping" 
            name="shipping" 
            size="checkbox-sm"
          />
          <button 
            type='submit' 
            className='btn btn-primary btn-sm lg:mt-4'>
            search
         </button>
        <Link to='/products' className='btn btn-accent btn-sm lg:mt-4'>
            reset
        </Link>
      </div>
    </Form>
  )
}

export default Filters