import React from 'react';
import styled from 'styled-components';

import { FreelancerCategory } from "./freelancer"
import { ProductsCategory } from "./products"
const PageWrapper = styled.div`
  height: 30vh;
  width: 100vw;
`;

export const ProductCategoryContainer = () =>
  <PageWrapper>
    <ProductsCategory />
    <FreelancerCategory />
  </PageWrapper>