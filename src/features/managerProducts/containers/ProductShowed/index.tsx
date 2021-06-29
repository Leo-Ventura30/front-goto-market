import React from 'react';
import styled from 'styled-components';

import {  Grid, Paper } from '@material-ui/core';
const PaperProduct = styled(Paper)`
    width:20vw;
    height:20vw;
`
const tmp_products = [1,3535545,45,435354,54,54545335,4355354,654,445,5423,52324,545,4535354,54641651665165,16,156,16331,654431,65136,565,41651,641,65531,5561,65545,161,6516,6]
export const ProductShowedContainer = () =>
    
        <Grid container justify="center" spacing={2}>
          {tmp_products.map((value) => (
            
            <Grid key={value} item> 
              <PaperProduct variant="outlined">{value}</PaperProduct>
            </Grid>
          ))}
        </Grid>
      


