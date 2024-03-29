export const environments = [
	{
		id: '',
		name: 'None',
		path: null,
	},
	{
		id: 'neutral', // THREE.RoomEnvironment
		name: 'Neutral',
		path: null,
	},
	
	{
		id: 'norway-bergen',
		name: 'Norege Bergens Vinter (HDR Labs)',
		path: '../environments/bergen_8k.hdr',
		format: '.hdr',
	},
	{
		id: 'clear-sky-blue',
		name: 'Clear Blue Skyes',
		path: '../environments/clean_sky_blue_2K_2014a381-91fd-4311-966e-5ce6bec3f5aa.exr',
		format: '.exr',
	},

	{
		id: 'nasa-heaven',
		name: 'Nasa Heaven (HDR Labs)',
		path: '../environments/starmap_2020_4k.exr',
		format: '.exr',
	},
	{
		id: 'venice-sunset',
		name: 'Venice Sunset',
		path: '../environments/venice_sunset_1k.exr',
		format: '.exr',
	},
	{
		id: 'footprint-court',
		name: 'Footprint Court (HDR Labs)',
		path: '../environments/footprint_court_2k.exr',
		format: '.exr',
	},
];
