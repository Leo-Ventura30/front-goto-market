import React from 'react';
import styled from 'styled-components';

import { Grid, Typography, Link, Avatar } from '@material-ui/core';
const imgprod = 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'
const PageWrapper = styled.div`
  height: 15vh;
  width: 100vw;
`;

const tmp_category = ["Jardinagem","Servente","Costureira","Cabelereiro","Pet Shop"]
export const FreelancerCategory = () =>
  <PageWrapper>
    <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
            Serviços mais visitados:
        </Typography>
        <Grid container justify="center" spacing={2}>
          
          {tmp_category.map((value) => (
            
            <Link key={value} href={value}>
              <Avatar variant="rounded" src={imgprod}/>
              {value}
            </Link>
          ))}
        </Grid>
      </Grid>
  </PageWrapper>