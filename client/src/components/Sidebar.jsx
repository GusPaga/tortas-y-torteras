const Sidebar = () => {
	return (
		<div id='wrapper' className='flex'>
			Sidebar
			<div id='sidebar' className='w-48 h-screen overflow-y-auto bg-gray-500'>
				<div className='w-full h-auto p-4 flex justify-end'>
					<button>X</button>
				</div>
			</div>
			<div id='body' className='w-full h-screen overfloy-y-auto bg-blue-500'>
				<div className='w-full h-auto p-4 flex justify-start'>
					<button>Y</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
