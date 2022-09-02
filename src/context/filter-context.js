import { createContext, useContext, useReducer } from "react";

const filterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "PRICE":
        return {
          ...state,
          price: action.payload,
        };

      case "LOCATION":
        return {
          ...state,
          location: action.payload,
        };

      case "PROPERTY_TYPE":
        return {
          ...state,
          propertyType: action.payload,
        };

      case "DATE":
        return {
          ...state,
          date: action.payload,
        };

      default:
        return { state };
    }
  };

  const [filterState, filterDispatch] = useReducer(reducerFunction, {
    price: "",
    propertyType: "",
    location: "",
    date: "",
  });

  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);
export { FilterContextProvider, useFilter };
