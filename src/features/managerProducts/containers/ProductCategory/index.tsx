import React from 'react';
import styled from 'styled-components';

import { Grid, Typography, Chip, Avatar, Paper } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';


interface CategoryListProps{
  typeCategoryList: TypeCategoryProps[]
  categoryItemList: CategoryItemProps[]
  title:string
}

export interface TypeCategoryProps{
  onPress: () => void
  title:string
}

// onPress(): void
export interface CategoryItemProps{
  onPress: () => void
  title: string
  icon?: any
}

const PageWrapper = styled(Grid)`
  width: 100%;
`;
const GridCategory = styled(Grid)`
  margin:5px;
  width:70%;
`
const GridProducts = styled(Grid)`
  margin:5px;
  width:100%;
`
const PaperProduct = styled(Paper)`
 width:16vh;
 height:16vh;
 border: 1px solid #eee;
 margin:2px;
 flex-wrap: wrap;
 padding:10 %;
 `
export const ProductsCategory = ({title, categoryItemList, typeCategoryList}:CategoryListProps) =>
  <PageWrapper container justify="center">
    <GridCategory container justify="flex-start">
        <Typography variant="h6" gutterBottom>
            {title}:
        </Typography>
        {typeCategoryList.map((typeCategory => (
          <Chip
              key={typeCategory.title}
              size="small"
              avatar={<Avatar alt={typeCategory.title}>{typeCategory.title[0]}</Avatar>}
              label={typeCategory.title}
              clickable
              onDelete={typeCategory.onPress}
              deleteIcon={<DoneIcon />}
            />
        )))}
      </GridCategory>
      
        <GridProducts container justify="center" spacing={0}>
        {categoryItemList.map((categoryItem) => (
          <Grid item key={categoryItem.title}>
            <PaperProduct elevation={2} onClick={categoryItem.onPress}>
                {/* <Avatar alt="Produtos">{categoryItem.title[0]}</Avatar> */}

                <Typography variant="subtitle2" gutterBottom>
                  {categoryItem.title}
                </Typography>
                <Avatar alt="Produtos">P</Avatar>
            </PaperProduct>
          </Grid>
            ))}
        </GridProducts>
  </PageWrapper>

  