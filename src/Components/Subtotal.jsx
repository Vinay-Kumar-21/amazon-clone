import React from 'react'
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <>
            <div className='flex flex-col bg-grey w-80 h-28 rounded'>
                <p>
                    Subtotal ({basket.length} items): <strong>{ }</strong>
                </p>
                <small className="flex items-center">
                    <input type="checkbox" className='mr-1' /> This order contains a gift
                </small>
                <button className='bg-orange-400 border border-amber-900 w-full rounded-sm h-8 mt-2'>Proceed To checkout</button>
            </div>
        </>

    )
}

export default Subtotal
