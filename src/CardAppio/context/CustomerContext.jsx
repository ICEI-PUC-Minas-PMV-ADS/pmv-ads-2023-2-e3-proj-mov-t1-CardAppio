import { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [table, setTable] = useState('');
    const [name, setName] = useState('');

    function handleChangeName(value) {
        setName(value);
    }

    const handleChangeTable = (value) => {
        setTable(value);
    }

    const value = {
        table,
        name,
        handleChangeTable,
        handleChangeName
    }

    return (
        <CustomerContext.Provider value={value}>
            {children}
        </CustomerContext.Provider>
    );
};