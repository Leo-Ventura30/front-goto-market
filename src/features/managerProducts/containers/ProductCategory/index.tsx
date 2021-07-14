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
	width: 100vw;
`;
const PageGrid = styled(Grid)`
	width: 80vw;
  	background:#eee;
	padding: 0 4vw;  
`;
const PaperProduct = styled(Paper)`
	max-width: 8vw;
	width: 8vw;
	height: 8vw;
`;
const CardProduct = styled(Card)`
	padding: 1vw;
	max-width:18vw;
`;
const TitleTypography = styled(Typography)`
	// max-width:80vh;
`
const CategoryChip = styled(Chip)`
	margin:0.2vw;
	// max-width:25vh;
`
export const ProductsCategory = ({
	title,
	categoryItemList,
	typeCategoryList
}: CategoryListProps) => (
	<PageWrapper container justify="center">
		<PageGrid container justify="center">
			<TitleTypography variant="h6" gutterBottom>
				{title}:
			</TitleTypography>
			<Grid container justify="center">
				{typeCategoryList.map((typeCategory) => (
					<Grid item justify="center" key={typeCategory.title}>
						<CategoryChip
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
					</Grid>
				))}
			</Grid>
      <Grid container justify="flex-start">
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
      </Grid>
      <TitleTypography variant="h6" gutterBottom>Melhores ofertas pra você!</TitleTypography>
      <Grid container justify="flex-start" spacing={0}>
      {[1, 2, 3,4].map(value => (
        <CardProduct elevation={5}>
        IMG
          <CardHeader
					// avatar={<Avatar aria-label="recipe">R</Avatar>}
            		title="Restaurante Coco bambu"
				    subheader="Os Restaurantes Coco Bambu possuem aplo cardapio venham conhecer!"
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
			
    </PageGrid>
    
	</PageWrapper>
);
