// Portfolio data extracted from Bharat Panchal's resume

export const personal = {
  name: 'Bharat Pravinbhai Panchal',
  shortName: 'Bharat Panchal',
  title: 'IoT & AI Developer',
  subtitle: 'MCA Student | Teaching Assistant | Tech Innovator',
  location: 'Ahmedabad, Gujarat, India',
  email: 'bpanchal2002@gmail.com',
  phone: '+91 7487813532',
  address: 'E/3 Shantaram Complex, Nirnaynagar, Ahmedabad',
  summary: 'Motivated and detail-oriented Computer Application professional pursuing MCA with strong knowledge of programming, web development, and IoT. Experienced Teaching Assistant passionate about developing innovative technology solutions using AI, IoT, and modern web technologies.',
  github: 'https://github.com/BharatPanchal505',
  linkedin: 'linkedin.com/in/bharat-panchal-3059a6233',
  twitter: 'https://twitter.com/',
}

export const skills = {
  programming: [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'C/C++', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'PHP', level: 65 },
  ],
  web: [
    { name: 'HTML/CSS', level: 90 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Django', level: 72 },
    { name: 'Streamlit', level: 75 },
  ],
  database: [
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 78 },
    { name: 'Blender', level: 60 },
  ],
  technologies: ['IoT', 'API Integration', 'Machine Learning', 'Cloud Services', 'Sensors & Protocols'],
  professional: ['Problem Solving', 'Teaching & Mentoring', 'Leadership', 'Communication', 'Teamwork'],
}

export const techStack = [
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
  { name: 'IoT', icon: '📡', color: '#00f5ff' },
  { name: 'Django', icon: '🌐', color: '#092e20' },
  { name: 'MySQL', icon: '🗃️', color: '#4479a1' },
  { name: 'Git', icon: '⎇', color: '#f05032' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'C++', icon: '⚡', color: '#00599c' },
  { name: 'Streamlit', icon: '🎈', color: '#ff4b4b' },
  { name: 'Blender', icon: '🎨', color: '#f5792a' },
]

export const experience = [
  {
    role: 'Teaching Assistant',
    company: 'Silver Oak University',
    location: 'Ahmedabad',
    period: 'June 27, 2024 – Present',
    type: 'Part-time',
    description: [
      'Assist faculty in conducting programming and web development practical sessions',
      'Guide students in understanding C, Python, and web technologies',
      'Support students in lab activities, coding exercises, and project development',
      'Help in evaluating assignments and practical submissions',
      'Provide technical support and mentoring during practical sessions',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'Silver Oak University',
    period: 'July 2024 – May 2026',
    highlights: [
      'Advanced computing: software development, database systems, web technologies',
      'Focus on AI, IoT, and advanced programming',
      'Active participation in hackathons and innovation programs',
    ],
    status: 'Pursuing',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Silver Oak University',
    period: 'Aug 2021 – May 2024',
    highlights: [
      'Strong academic performance in computer applications',
      'Practical knowledge in programming, database, and web development',
      'Projects: Hospital Management System, Attendance Management System',
    ],
    status: 'Completed',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Nest Public School',
    period: 'July 2021',
    highlights: [
      'Focus on analytical and problem-solving subjects',
      'Strong academic foundation for computer applications',
    ],
    status: 'Completed',
  },
]

export const projects = [
  {
    id: 1,
    title: 'AI Smart Helmet',
    subtitle: 'Accident Analysis & Emergency Alerts',
    description: 'IoT-based smart helmet system to detect road accidents and automatically send emergency alerts. Integrates sensors for impact detection with automated SMS/email notifications to emergency contacts and nearby hospitals.',
    tags: ['IoT', 'Python', 'Cloud APIs', 'Sensors', 'SMS Gateway', 'AI'],
    highlights: [
      'Real-time accident detection via impact sensors',
      'Automatic SMS & email alerts to emergency contacts',
      'Cloud integration for real-time communication',
      'Notifies nearby hospitals automatically',
    ],
    achievement: '🏆 1st Rank – AVISHKAR 2.0 & AVISHKAR 2025',
    color: '#00f5ff',
    icon: '⛑️',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Vehicle Information System',
    subtitle: 'Smart Vehicle Data Management',
    description: 'Comprehensive vehicle information management system with smart data retrieval and management capabilities for tracking and analyzing vehicle data efficiently.',
    tags: ['Python', 'MySQL', 'Web Dev', 'API Integration'],
    highlights: [
      'Smart vehicle data management',
      'Efficient database queries',
      'User-friendly dashboard interface',
      'Real-time data retrieval',
    ],
    achievement: '',
    color: '#bf00ff',
    icon: '🚗',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Hospital Management System',
    subtitle: 'Web-Based Healthcare Platform',
    description: 'Web-based system to manage patient records, hospital staff, and appointments. Features efficient database management for storage and retrieval of hospital data.',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    highlights: [
      'Patient record management',
      'Staff and appointment scheduling',
      'Efficient database architecture',
      'User-friendly interface',
    ],
    achievement: '',
    color: '#ff007f',
    icon: '🏥',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Attendance Management System',
    subtitle: 'Automated Student Tracking',
    description: 'Automated system for tracking and managing student attendance with relational database structure and report generation for attendance monitoring and analysis.',
    tags: ['Python', 'MySQL', 'Django', 'Reports'],
    highlights: [
      'Automated attendance tracking',
      'Relational database design',
      'Report generation and analytics',
      'Easy-to-use interface',
    ],
    achievement: '',
    color: '#0066ff',
    icon: '📊',
    github: '#',
    demo: '#',
  },
]

export const certifications = [
  {
    title: 'NPTEL Online Certification',
    subtitle: 'Introduction to Internet of Things',
    issuer: 'IIT Kharagpur',
    period: 'Jul – Oct 2025',
    details: '12-week program | 69% Score',
    icon: '🏅',
    color: '#00f5ff',
  },
  {
    title: 'NPTEL-AICTE Faculty Development Programme',
    subtitle: 'IoT Technologies',
    issuer: 'NPTEL / AICTE',
    period: '2025',
    details: 'Faculty-level training on IoT applications',
    icon: '📜',
    color: '#bf00ff',
  },
]

export const achievements = [
  {
    title: '1st Rank – AVISHKAR 2.0',
    org: 'Silver Oak University Project Fair',
    description: 'Secured 1st position for AI Smart Helmet project. Recognized for outstanding creativity, technical implementation, and startup-oriented innovation.',
    icon: '🥇',
    color: '#ffd700',
  },
  {
    title: '1st Rank – AVISHKAR 2025',
    org: 'Silver Oak University Project Fair',
    description: 'Secured first position for presenting innovative technology project. Recognized for creativity, technical implementation, and problem-solving approach.',
    icon: '🏆',
    color: '#ffd700',
  },
  {
    title: 'NPTEL Mentor – IoT',
    org: 'Introduction to Internet of Things',
    description: 'Recognized as mentor for guiding students in NPTEL IoT certification. Assisted students in understanding IoT concepts and completing assignments.',
    icon: '🎓',
    color: '#00f5ff',
  },
  {
    title: 'NPTEL Mentor – Python',
    org: 'The Joy of Computing Using Python',
    description: 'Mentored students in Python programming through NPTEL certification program, helping them understand logic and solve coding problems.',
    icon: '🐍',
    color: '#bf00ff',
  },
  {
    title: 'Teaching Assistant Certificate',
    org: 'Silver Oak University',
    description: 'Appreciation certificate for contributions to NAAC accreditation process and academic data organization.',
    icon: '📋',
    color: '#ff007f',
  },
  {
    title: 'National Hackathon Participant',
    org: 'SBS Hack the Gap 2026',
    description: 'Participated in national-level hackathon, contributing innovative solutions and demonstrating strong technical and problem-solving abilities.',
    icon: '⚡',
    color: '#0066ff',
  },
]

export const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '6+', label: 'Projects Built' },
  { value: '2', label: 'Awards Won' },
  { value: '4+', label: 'Certifications' },
]
