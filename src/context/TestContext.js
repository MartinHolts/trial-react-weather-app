// src/context/TestContext.js
import React, { createContext, useContext } from 'react';

const TestContext = createContext('Default Value');

export const useTestValue = () => useContext(TestContext);

export const TestProvider = ({ children }) => {
    return <TestContext.Provider value="Test">{children}</TestContext.Provider>;
};
