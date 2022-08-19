import { MultOpts } from './MultOpts';
import { Typography } from '@mui/material';

const Filter = () => {
	return (
		<div>
			<Typography variant='h1'>Filter</Typography>
			<div className='filter'>
				<div className='filter-header'></div>
				<div className='filter-1'></div>
				<div className='filter-2'></div>
				<div className='filter-3'></div>
				<div></div>
				<MultOpts />
			</div>
		</div>
	);
};

export default Filter;
