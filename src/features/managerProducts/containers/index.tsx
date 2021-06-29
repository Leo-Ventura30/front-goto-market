import React from 'react';
import styled from 'styled-components';
import {  Grid, Paper } from '@material-ui/core';

import { ProductCategoryContainer } from "./ProductCategory"
import { ProductShowedContainer } from "./ProductShowed"
import { TextMobileStepper } from "./ProductCreator"
const PageWrapper = styled(Grid)`
  width: 20vh;
  margin:2px;
  display:flex;
`;
const GridProducts = styled(Grid)`
  width:70%;
`
export const ProductContainer = () =>
    <PageWrapper>
        <Paper>
            <Grid container wrap="wrap" justify="center" spacing={2}>
                <TextMobileStepper/>
                <ProductCategoryContainer />
                <GridProducts>
                    <ProductShowedContainer/>
                </GridProducts>
            </Grid>
        </Paper>
    </PageWrapper>