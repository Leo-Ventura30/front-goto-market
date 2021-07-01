import React from 'react';
import styled from 'styled-components';

import { Grid, Typography, Link, Avatar, Paper } from '@material-ui/core';

interface CategoryListProps{
  categoryItemList: CategoryItem[]
  title:string
}

// onPress(): void
export interface CategoryItem{
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
 margin:1px;
`

export const ProductsCategory = ({title, categoryItemList}:CategoryListProps) =>
  <PageWrapper container justify="center">
      <GridCategory container justify="flex-start">
        <Typography variant="h6" gutterBottom>
            {title}:
        </Typography>
        <GridProducts container justify="flex-start" alignItems="center" spacing={0}>
        {categoryItemList.map((categoryItem) => (
              <Grid item justify="center" key={categoryItem.title}>
                {/* <Link key={value} href={value} underline="none" > */}
                  <PaperProduct elevation={2} onClick={categoryItem.onPress}> 
                    {categoryItem.title}
                  </PaperProduct>
                {/* </Link> */}
              </Grid>
            ))}
        </GridProducts>
      </GridCategory>
  </PageWrapper>

  