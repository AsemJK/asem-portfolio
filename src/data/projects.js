// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Promrece ERP',
		category: 'Desktop Application',
		img: require('@/assets/images/desktop-project-1.jpg'),
	},
	{
		id: 2,
		title: 'Promerce Mobile POS',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'nopCommerce Plugin',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
	{
		id: 6,
		title: 'CrmX CRM System',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 7,
		title: 'Vue Laravel Admin Dashboard',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
];

export default projects;
