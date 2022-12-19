import React, { useContext, useReducer } from "react";
import { useEffect, useState } from "react";
import { reducer } from "../reducer/reducer";
export const API = `https://dummyjson.com/products`;
const AppContext = React.createContext();



const AppProvider = ({ children }) => {
  // const [product, setProducts] = useState([]);
  // const [loading, setIsLoading] = useState(true);
    const initialState = {
      products: [],
      loading: true,
      images: [],
    };
    
    const [state, dispatch] = useReducer(reducer, initialState);
    // const API = `https://dummyjson.com/products`;


    const getSomeProducts = async (url) => {

      dispatch({
        type: "LOADING",
      })

        try {

            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);

            dispatch({
                type: "DISPLAY_ALL_PRODUCTS",
                payload: data,
            });
          

        } 
        
        catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {         
        getSomeProducts(`${API}`); 

    }, []);
    
  return (
    <>
        <AppContext.Provider value={{...state, dispatch}}>
            {children}
        </AppContext.Provider>
    </>
  );

};

const useGlobalContext = () => {
  return useContext(AppContext);
};



export { AppContext, AppProvider, useGlobalContext };