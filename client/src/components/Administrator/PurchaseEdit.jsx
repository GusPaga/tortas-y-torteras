import { Edit, SimpleForm, TextInput } from 'react-admin';

export const PurchaseEdit = () => {
	return (
		<Edit title='Edit shipping status purchase'>
			<SimpleForm>
				<TextInput disabled source='id' />
				<TextInput disabled source='phoneNumber' />
				<TextInput disabled source='postalCode' />
				<TextInput disabled source='shippingAddressStreet' />
				<TextInput disabled source='shippingAddressNumber' />
				<TextInput source='status' />
				<TextInput source='shipmentCompany' />
				<TextInput source='shipmentTracking' />
			</SimpleForm>
		</Edit>
	);
};
