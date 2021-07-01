import React from 'react';

import { CategoryItem, ProductsCategory } from '../../containers/ProductCategory';
const title = "Categorias Populares"
const categoryItemList: CategoryItem[] = [
	{ title: "Informatica", onPress: () => { console.log("Foi pressionado") } },
	{ title: "Eletroeletronica", onPress: () => { console.log("Foi pressionado item2") } },

]
export const ProductCategoryScreen = () => {

	return <ProductsCategory
		categoryItemList={categoryItemList}
		title={title}
	/>
		
	
};