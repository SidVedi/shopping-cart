import React from 'react'
import useProductList from '../../hooks/useProductList'
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

function ProductListingPage() {

  const dispatch = useDispatch();
  const products = useProductList();

  if (products === null) return <div className='m-4 text-bold'>Loading...</div>

  return (
    <div className='grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product) => {
        return (
          <div key={product.id} className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md'>
            <img
              className='h-40 w-full object-contain'
              src={product.image}
              alt={product.title}
            />
            <button
              type='button'
              onClick={() => dispatch(addItem(product))}
              className='mt-4 w-full cursor-pointer rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800'
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListingPage