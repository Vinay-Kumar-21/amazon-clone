import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <>
            <div className='flex p-5 bg-white h-max'>
                <div>
                    {basket?.length === 0 ? (
                        <div>
                            <h2 className='font-bold text-2xl'>Your Shopping Basket is Empty.</h2>
                            <p>
                                You have items in your basket. To buy one or multiple click on "Add to basket"
                                next to the item.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='font-bold text-2xl'>Your Shopping basket</h2>

                            {/* list out all the cheakout product */}
                            {basket.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {basket.length > 0 && (
                    <div>
                        <Subtotal />
                    </div>
                )}

            </div>
        </>

    )
}

export default Checkout
