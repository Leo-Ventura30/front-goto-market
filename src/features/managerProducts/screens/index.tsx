import React from 'react';

// import { ProductCreatorScreen } from './ProductCreator';
import { ProductCategoryScreen } from './ProductCategory';
import { ProductShowedScreen } from './ProductShowed';


export const ProductCreatorScreen = () => {
    return (
        <React.StrictMode>
            <ProductCategoryScreen />
            <ProductShowedScreen/>
        </React.StrictMode>
    );
};