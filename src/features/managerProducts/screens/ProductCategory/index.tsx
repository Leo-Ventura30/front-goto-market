import React from 'react';

import { CategoryItemProps, ProductsCategory, TypeCategoryProps } from '../../containers/ProductCategory';
const title = "Categorias Populares"
const typeCategoryList: TypeCategoryProps[] = [
	{ title: "Produtos", onPress:()=>{console.log("disabled")} },
	{ title: "Servicos", onPress:()=>{console.log("disabled")} },
	{ title: "Cursos", onPress:()=>{console.log("disabled")} },
]
const categoryItemList: CategoryItemProps[] = [
	{ title: "Informatica", onPress: () => { console.log("Foi pressionado") } },
	{ title: "Estética", onPress: () => { console.log("Foi pressionado item2") } },
	{ title: "Mecanico", onPress: () => { console.log("Foi pressionado item2") } },
	{ title: "Desenvolvedor full-stack", onPress: () => { console.log("Foi pressionado item2") } },
	{ title: "Trade de elite", onPress: () => { console.log("Foi pressionado item2") } },
	{ title: "Hamburgueria", onPress: () => { console.log("Foi pressionado item2") } },
	{ title: "Pet shop", onPress: () => { console.log("Foi pressionado item2") } },
	{ title: "Pizzarias", onPress: () => { console.log("Foi pressionado item2") } },
]
export const ProductCategoryScreen = () => {

	return <ProductsCategory
		typeCategoryList={typeCategoryList}
		categoryItemList={categoryItemList}
		title={title}
	/>
		
	
};