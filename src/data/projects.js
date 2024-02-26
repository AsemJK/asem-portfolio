const projects = [
  {
    id: 1,
    title: 'Promrece ERP',
    category: 'Desktop Application',
    img: require('@/assets/images/desktop-project-1.jpg'),
    date: '2016',
    clients: [1],
    relatedProjects: [3],
    technologies: ['C#', 'ADO.NET', 'SQL Server'],
    objectives: "Manage inventory, track sales, generate reports, and streamline business processes."
  },
  {
    id: 2,
    title: 'Promerce Mobile POS',
    category: 'Mobile Application',
    img: require('@/assets/images/mobile-project-1.jpg'),
    date: '2021',
    clients: [1],
    relatedProjects: [3],
    technologies: ['C#', 'ASP.NET CORE', 'MVVM', 'Entity Framework', 'SQL Server'],
    objectives: "Manage inventory, track sales, generate reports, and streamline business processes using a mobile device."
  },
  {
    id: 3,
    title: 'Project Management UI',
    category: 'UI/UX Design',
    img: require('@/assets/images/ui-project-1.jpg'),
    date: '2021',
    clients: [1],
    relatedProjects: [2, 3],
    technologies: ['HTML'],
    objectives: "Manage projects, track progress, assign tasks, and collaborate with team members."
  },
  {
    id: 4,
    title: 'Cloud Storage Platform',
    category: 'UI/UX Design',
    img: require('@/assets/images/ui-project-2.jpg'),
    date: '2021',
    clients: [1],
    relatedProjects: [2, 3],
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
    objectives: "Store, manage, and share files in the cloud."
  },
  {
    id: 5,
    title: 'nopCommerce Plugin',
    category: 'Web Application',
    img: require('@/assets/images/web-project-1.jpg'),
    date: '2021',
    clients: [1],
    relatedProjects: [2, 3],
    technologies: ['C#', 'ASP.NET CORE', 'MVVM', 'Entity Framework', 'SQL Server'],
    objectives: "Integrate nopCommerce with third-party systems and extend its functionality."
  },
  {
    id: 6,
    title: 'CrmX CRM System',
    category: 'Web Application',
    img: require('@/assets/images/web-project-2.jpg'),
    date: '2021',
    clients: [1],
    relatedProjects: [],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'PHP', 'JavaScript', 'HTML', 'CSS (SASS)'],
    objectives: "Manage customer relationships, track sales, and streamline business processes."
  },
  {
    id: 7,
    title: 'Vue Laravel Admin Dashboard',
    category: 'Web Application',
    img: require('@/assets/images/web-project-2.jpg'),
    date: '2021',
    clients: [1],
    relatedProjects: [],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'PHP', 'JavaScript', 'HTML', 'CSS (SASS)'],
    objectives: "Manage customer relationships, track sales, and streamline business processes."
  },
];

export default projects;
