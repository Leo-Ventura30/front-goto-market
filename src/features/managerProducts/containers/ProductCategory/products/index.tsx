import React from 'react';
import styled from 'styled-components';

import { Grid, Typography, Link, Avatar } from '@material-ui/core';
const PageWrapper = styled.div`
  height: 15vh;
  width: 100vw;
`;

const imgprod = 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
const tmp_category = ["Informatica","Eletrodomesticos","Papelaria","Roupas"]
export const ProductsCategory = () =>
  <PageWrapper>
    <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
            Produtos mais visitados:
        </Typography>
        <Grid container justify="center" spacing={2}>
          
          {tmp_category.map((value) => (
            
            <Link key={value} href={value} underline="none" >
              <Avatar variant="rounded" src={imgprod}/>
              
              {value}
            </Link>
          ))}
        </Grid>
      </Grid>
  </PageWrapper>