import React from 'react';
import styled from 'styled-components';

import {
	Grid,
	Typography,
	Chip,
	Avatar,
	Paper,
	Card,
	CardHeader,
	IconButton,
	CardActions,
	Box
} from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import DoneIcon from '@material-ui/icons/Done';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

interface CategoryListProps {
	typeCategoryList: TypeCategoryProps[];
	categoryItemList: CategoryItemProps[];
	title: string;
}

export interface TypeCategoryProps {
	onPress: () => void;
	title: string;
}

// onPress(): void
export interface CategoryItemProps {
	onPress: () => void;
	title: string;
	icon?: any;
}

const PageWrapper = styled(Grid)`
	width: 100%;
  background:#eee;
`;
const GridCategory = styled(Grid)`
	width: 70%;
  background:#fff;
`;
const GridProducts = styled(Grid)`
	margin: 5px;
	width: 100%;
`;
const PaperProduct = styled(Paper)`
	width: 16vh;
	height: 16vh;
	border: 1px solid #eee;
	margin: 2px;
	flex-wrap: wrap;
	padding: 10 %;
`;
const CardProduct = styled(Card)`
	padding: 8px;
  max-width:35vh;
  margin:5px;
`;
export const ProductsCategory = ({
	title,
	categoryItemList,
	typeCategoryList
}: CategoryListProps) => (
	<PageWrapper container justify="center">
		<GridCategory container justify="flex-start">
			<Typography variant="h6" gutterBottom>
				{title}:
			</Typography>
			{typeCategoryList.map((typeCategory) => (
				<Chip
					key={typeCategory.title}
					size="small"
					avatar={
						<Avatar alt={typeCategory.title}>
							{typeCategory.title[0]}
						</Avatar>
					}
					label={typeCategory.title}
					clickable
					onDelete={typeCategory.onPress}
					deleteIcon={<DoneIcon />}
				/>
			))}
      <GridProducts container justify="center">
				{categoryItemList.map((categoryItem) => (
					<Grid item justify="center" key={categoryItem.title}>
						<PaperProduct
							elevation={2}
							onClick={categoryItem.onPress}
						>
							{/* <Avatar alt="Produtos">{categoryItem.title[0]}</Avatar> */}

							<Typography variant="subtitle2" gutterBottom>
								{categoryItem.title}
							</Typography>
							<Avatar alt="Produtos">P</Avatar>
						</PaperProduct>
					</Grid>
				))}
      </GridProducts>
      <Typography variant="h6" gutterBottom>Melhores ofertas pra você!</Typography>
      <Grid container justify="center" spacing={0}>
      {[1, 2, 3,4].map(value => (
        <CardProduct elevation={5}>
        IMG
          <CardHeader
					avatar={<Avatar aria-label="recipe">R</Avatar>}
            title="Restaurante Coco bambu"
				    subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ipsum lacus. Pellentesque tortor odio, semper semper quam consectetur, pharetra aliquet justo."
				/>
        <Box component="fieldset" mb={0} borderColor="transparent">
          <Typography component="legend">Avaliações</Typography>
					<Rating
						name="customized-empty"
						defaultValue={4.5}
						precision={0.1}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            disabled
					/>
				</Box>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</CardProduct>
      ))}
      
		</Grid>
			
    </GridCategory>
    
    
	</PageWrapper>
);
