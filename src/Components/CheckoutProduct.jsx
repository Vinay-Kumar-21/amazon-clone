import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <>
            <div className='flex mt-4 mb-4'>
                <img src={image} className='h-44 w-44 object-contain' />
                <div className='pl-5'>
                    <p className='text-base font-extrabold'>{title}</p>

                    <p>
                        <small>Rs.</small>
                        <strong>{price}</strong>
                    </p>

                    <div className='flex'>
                        {
                            Array(rating)
                                .fill()
                                .map((_) => (
                                    <p>⭐</p>
                                ))
                        }
                    </div>

                    <button className='bg-orange-400 border border-amber-900' onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
        </>

    )
}

export default CheckoutProduct
