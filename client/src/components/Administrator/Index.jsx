import { Admin, Resource } from 'react-admin';
import { Users } from './Users';
import { dataProvider } from '../Administrator/DataProvider';

export default function DashBoard() {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource name='users' list={Users} />
		</Admin>
	);
}
