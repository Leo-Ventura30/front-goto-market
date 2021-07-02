import React from 'react';
import styled from 'styled-components';

import { Grid, Typography, Chip, Avatar, Paper } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
 margin:2px;
`
const AvatarCategory = styled(Avatar)`
  background:#a50000;
  color:#fff;
`
const ChipCategory = styled(Chip)`
  background:#ea0000;
  color:#fff;

`
const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
export const ProductsCategory = ({title, categoryItemList}:CategoryListProps) =>
  <PageWrapper container justify="center">
    <GridCategory container justify="flex-start">
        <Typography variant="h6" gutterBottom>
            {title}:
        </Typography>
        
        <ChipCategory
          size="small"
          avatar={<AvatarCategory alt="Produtos">P</AvatarCategory>}
          label="Produtos"
          clickable
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
      />
      <Chip
          size="small"
          avatar={<AvatarCategory alt="Produtos">S</AvatarCategory>}
          label="Servicos"
          clickable
          color="secondary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
      />
      <Chip
          size="small"
          avatar={<AvatarCategory alt="Produtos">C</AvatarCategory>}
          label="Cursos"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
      
        <GridProducts container justify="flex-start" alignItems="center" spacing={0}>
        {categoryItemList.map((categoryItem) => (
              <Grid item justify="center" key={categoryItem.title}>
                {/* <Link key={value} href={value} underline="none" > */}
                  <PaperProduct elevation={2} onClick={categoryItem.onPress}>
                    <AddCircleIcon/>
                    {categoryItem.title}
                    <AvatarCategory alt="Produtos">P</AvatarCategory>
                  </PaperProduct>
                {/* </Link> */}
              </Grid>
            ))}
        </GridProducts>
      </GridCategory>
  </PageWrapper>

  