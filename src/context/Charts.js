import { useState } from "react"

export const Chart = (carts) => {
    const [cart, setCart] = useState([]);

    


    function Add(carts) {
        setCart({
            ...cart.push({ ...carts })
        })
    }


}