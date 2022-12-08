import React,{FC} from 'react';
import {ShoppingCard} from './ShoppingCard.types';
import {Card, CardProps} from 'primereact/card';
import {Button} from '../Button/Button';
import {ShoppingCardProduct} from '../ShoppingCardProduct/ShoppingCardProduct';
import {PRODUCTS} from '../../resources/constants';
import {ShoppingCardTotal} from '../ShoppingCardTotal/ShoppingCardTotal';

export interface ShoppingCardProps extends CardProps, ShoppingCard {

}

export const ShoppingCardComponent: FC<ShoppingCardProps> = ({...props}) => {
	const { title,subTitle,saveButtonLabel = 'Save', cancelButtonLabel='Cancel', products = PRODUCTS } = props;
	const footer = (
		<span>
			<Button className={'cart-button xs-2'} label={saveButtonLabel} icon="pi pi-cart-plus" />
			<Button className={'cart-button p-button-warning'} label={cancelButtonLabel} icon="pi pi-times" />
		</span>
	);

	const RenderProducts = () => {
		return (
			products.map((product)=> {
				return (
					<div key={product.title}>
						<ShoppingCardProduct key={product.title} product={product} />
						<hr />
					</div>
				);
			})
		);
	};

	const CustomShoppingCard = () => {
		return <Card className={'mini-card xs-2'} title={title} subTitle={subTitle} footer={footer}  {...props}>
			<div className='row'>
				{RenderProducts()}
			</div>
			<div className='row'>
				<ShoppingCardTotal products={products} />
			</div>
		</Card>;
	};

	return (
		<CustomShoppingCard />
	);
};