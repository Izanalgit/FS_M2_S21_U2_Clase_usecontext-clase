import { useContext, createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvaider = ({children}) =>{
    const [language, setLanguage] = useState('en');

    const changeLanguage = (newLanguage) =>{
        setLanguage(newLanguage)
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage}} >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)