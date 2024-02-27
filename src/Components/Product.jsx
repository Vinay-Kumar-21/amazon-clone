import React from 'react'

function Product({ id, title, price, rating, image }) {
    return (
        <>
            <div className='flex flex-col max-h-96 min-w-25 bg-white m-2.5 z-1 w-full items-center justify-end'>
                <div className='h-25 mb-4'>
                    <p>{title}</p>
                    <p className='mt-1.5'>
                        <small>Rs.</small>
                        <strong>{price}</strong>
                    </p>

                    {/* rating */}
                    <div className='flex'>
                        {
                            Array(rating)
                                .fill()
                                .map((_) => (
                                    <p>⭐</p>
                                ))
                        }
                    </div>
                </div>

                <img src={image} className='w-full max-h-52 object-contain mb-4' />
                <button className='bg-orange-400 border border-amber-900'>Add to basket</button>
            </div>
        </>

    )
}

export default Product
