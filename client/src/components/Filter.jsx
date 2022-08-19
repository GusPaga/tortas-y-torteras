import { MultOpts } from './MultOpts';
import './Filter.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filter = () => {
	return (
		<div className='filter'>
			<div className='filter-wrapper'>
				<div className='filter-header'>
					<h2>
						Filtering <FilterAltIcon fontSize='large' />
					</h2>
					<hr />
				</div>
				<div className='filter-1'>
					<h5>Colors</h5>
					<MultOpts />
				</div>
				<hr />
				<div className='filter-2'>
					<h5>Collection</h5>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='checkbox'
							id='inlineCheckbox1'
							value='option1'
						/>
						<label className='form-check-label' htmlFor='inlineCheckbox1'>
							Abstract
						</label>
					</div>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='checkbox'
							id='inlineCheckbox2'
							value='option2'
						/>
						<label className='form-check-label' htmlFor='inlineCheckbox2'>
							Flowers
						</label>
					</div>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='checkbox'
							id='inlineCheckbox3'
							value='option3'
							// disabled
						/>
						<label className='form-check-label' htmlFor='inlineCheckbox3'>
							Butterflies
						</label>
					</div>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='checkbox'
							id='inlineCheckbox3'
							value='option3'
							// disabled
						/>
						<label className='form-check-label' htmlFor='inlineCheckbox3'>
							Other
						</label>
					</div>
				</div>
				<hr />
				<div className='filter-3'>
					<h5>Avaibility</h5>
					<div className='form-check form-check-inline'>
						<input
							className='form-check-input'
							type='checkbox'
							id='inlineCheckbox1'
							value='option1'
						/>
						<label className='form-check-label' htmlFor='inlineCheckbox1'>
							In stock
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
