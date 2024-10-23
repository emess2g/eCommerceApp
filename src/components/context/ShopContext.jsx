import { createContext, useState } from "react";
import { products } from "../../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showShow,setShowSearch] = useState(true);


    const value = {
       products,
       currency,
       delivery_fee,
       search,setSearch,
       showShow,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;