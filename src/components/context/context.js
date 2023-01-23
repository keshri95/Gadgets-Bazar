import React, { useContext, useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { reducer } from "../reducer/reducer";
export const API = `https://dummyjson.com/products`;
const AppContext = React.createContext();



const AppProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const [state, dispatch] = useReducer(reducer, initialState);

    const getSomeProducts = async (url) => {

      // dispatch({
      //   type: "LOADING",
      // })
        setIsLoading(true);
        try {
          setIsLoading(false);
          
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setProducts(data.products);


            // dispatch({
            //     type: "DISPLAY_ALL_PRODUCTS",
            //     payload: data,
            // });
        } 
        
        catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {         

      setTimeout(() => {
        getSomeProducts(`${API}`); 
      }, 1200)

    }, []);

    
  return (
    <>
        <AppContext.Provider value={{ products, isLoading, setProducts }}>
            {children}
        </AppContext.Provider>
    </>
  );

};

const useGlobalContext = () => {
  return useContext(AppContext);
};



export { AppContext, AppProvider, useGlobalContext };
