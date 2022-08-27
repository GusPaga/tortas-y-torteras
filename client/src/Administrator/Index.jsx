import { Admin, Resource } from 'react-admin';
import { Users } from './components/Users';
import { dataProvider } from './DataProvider';

export default function DashBoard() {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource name='users' list={Users} />
		</Admin>
	);
}
