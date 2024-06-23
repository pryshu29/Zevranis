import React, { useContext } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item.js'
import { ShopContext } from '../../Context/ShopContext.js'

const RelatedProducts = (props) => {
  const {category} = props;
  const {all_product} = useContext(ShopContext);
  const update_value = all_product?.filter((item)=>item.category === category);
  return (
    <>
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr/>
            <div className='relatedproducts-item'>
                {update_value?.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    </>
  )
}

export default RelatedProducts