import React from 'react'

function ErrorMessage({ fooditems }) {
    
    return (
        // {foodItems.length == 0 && <p className='conditional'>We don't have any value right now! </p>}
        <>
            {fooditems.length == 0 ? <p>You dont't have any friends right now!!</p> : null}
        </>
    )
}

export default ErrorMessage;