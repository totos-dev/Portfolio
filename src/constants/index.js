import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	pickrell,
	tesla,
	boeing,
	carrent,
	jobit,
	tripguide,
	threejs,
	dotnet,
	python,
	postgres,
	ai,
	ml,
	nlp,
	slack,
	codeday,
	bei,
	report,
	vista,
	summarigo,
	frontend,
	database,
	laptop,
	phone,
	kevin,
	campuspaths,
	_333gle,
	mark,
	william,
	xk,
	pathloom
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: frontend,
	},
	{
		title: "Backend Developer",
		icon: database,
	},
	{
		title: "AI & ML Developer",
		icon: laptop,
	},
	{
		title: "Software Engineer",
		icon: phone,
	},
];

const technologies = [
	// {
	// 	name: "HTML 5",
	// 	icon: html,
	// },
	// {
	// 	name: "CSS 3",
	// 	icon: css,
	// },
	{
		name: ".NET",
		icon: dotnet,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "AI",
		icon: ai,
	},
	{
		name: "ML",
		icon: ml,
	},
	{
		name: "NLP",
		icon: nlp,
	},
	// {
	// 	name: "Slack",
	// 	icon: slack,
	// },
	// {
	// 	name: "JavaScript",
	// 	icon: javascript,
	// },
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	// {
	// 	name: "Redux Toolkit",
	// 	icon: redux,
	// },
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "PostgreSQL",
		icon: postgres,
	},
	// {
	// 	name: "Three JS",
	// 	icon: threejs,
	// },
	{
		name: "git",
		icon: git,
	},
	// {
	// 	name: "figma",
	// 	icon: figma,
	// },
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Senior Full Stack Engineer",
		company_name: "Self Employed",
		icon: pathloom,
		iconBg: "#e9e9e9",
		date: "May 2025 - Present",
		points: [
			"Designed and implemented user-friendly web applications using ASP.NET Web Forms and ASP.NET MVC frameworks for rich, interactive user experiences.",
			"Collaborated with cross-functional teams to troubleshoot and resolve complex software issues, leveraging Visual Studio debugging and profiling tools.",
			"Optimized the ERP platform for scalability and performance by implementing server-side caching (using MemoryCache and OutputCache) and asynchronous programming with async/await patterns.",
		],
	},
	{
		title: "AI & ML Engineer",
		company_name: "Sydney NSW",
		icon: pickrell,
		iconBg: "#e9e9e9",
		date: "May 2023 - Jan 2024",
		points: [
			"Designed and developed AI-driven analysis systems to extract actionable insights from large-scale datasets.",
			"Developed customer segmentation algorithms using machine learning in R, contributing to a 22% increase in market share.",
			"Applied data mining and predictive analytics to solve shipping consolidation challenges, achieving $1.2M in cost savings.",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "Nathan",
		icon: codeday,
		iconBg: "#e9e9e9",
		date: "Aug 2018 - Feb 2023",
		points: [
			"Designed and implemented a highly-scalable ecommerce platform using React and Node.js",
			"Implemented real-time data visualization and analytics tools to provide valuable insights into customer behavior and product performance",
			"Developed company procedures and guidelines for data analysis and security that increased efficiency by 30% in the first 6 months after implementation.",
		],
	},
	{
		title: "Junior Full stack AI Developer",
		company_name: "Aomori University",
		icon: bei,
		iconBg: "#e9e9e9",
		date: "Nov 2017 - Apr 2019",
		points: [
			"Developed an interactive web app for Trial, an application that streamlines the literature review process for researchers at Aomori University.",
			"Researched and tracked potential programming solutions, documenting processes and fixes to improve development efficiency. Built a Python scraper to structure data on over 5,000 publications, utilizing the Natural Language Toolkit (NLTK) for robust abstract searches",
			"Provided ongoing app support by identifying, fixing, and testing bugs, and surveyed user feedback to implement changes that increased user satisfaction by 17%.",
		],
	},
	{
		title: "Bachelor of Science in Computer Science",
		company_name: "Aomori University",
		icon: boeing,
		iconBg: "#e9e9e9",
		date: "2014 - 2018",
		points: [
			"Engaged in in-depth research within the field of software engineering, culminating in the publication of a seminal paper in a prestigious scientific journal, showcasing a commitment to academic rigor and innovation.",
			"Spearheaded a multidisciplinary team of engineers to conceptualize and construct a dynamic business ecosystem tailored for multiple enterprises, demonstrating adept leadership skills and a proactive approach to collaborative project development.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I’ve collaborated with others, but Haruki’s unique approach stands out. His dedication and passion for his work is truly inspiring.",
		name: "Kevin Kieu",
		title: "Mechanical Engineering @ UW",
		image: kevin,
	},
	{
		testimonial:
			"I have enjoyed working with Haruki. I found him to be hard-working, bright, and a well skilled programer. Haruki is a professional with great experience and profound knowledge of programming solutions.",
		name: "Julian Au",
		title: "CEO of Nathan",
		image: william,
	},
	{
		testimonial:
			"Collaborating with him has been a pleasure. I highly recommend his work to anyone looking for top-tier technical expertise.",
		name: "Mark Jason Joven",
		title: "Biochemistry @ UW",
		image: mark,
	},
];

const projects = [
	{
		name: "Reproduction Report",
		description:
			'Reproduced "Understanding the Effect of Model Compression on Social Bias in Large Language Models", by Gustavo Goncalves and Emma Strubell, by running experiments and adapting codebase to run on Google Cloud and University of Washington GPUs.',
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "PyTorch",
				color: "green-text-gradient",
			},
			{
				name: "Pandas",
				color: "pink-text-gradient",
			},
			{
				name: "Bash",
				color: "blue-text-gradient",
			},
		],
		showLink: true,
		image: report,
		source_code_link:
			"https://github.com/nickhitos/reproduction-EMNLP2023-llm-compression-social-bias",
		project_link: "portfolio-2/docs/reproduction-report.pdf",
	},
	{
		name: "Vista",
		description:
			"A full-stack real-estate admin dashboard featuring Google OAuth, integrated data visualization tools, the ability to search and filter rental properties, and the ability to manage rental properties through CRUD operations.",
		tags: [
			{
				name: "TypeScript",
				color: "blue-text-gradient",
			},
			{
				name: "React",
				color: "green-text-gradient",
			},
			{
				name: "NodeJS",
				color: "pink-text-gradient",
			},
			{
				name: "MongoDB",
				color: "blue-text-gradient",
			},
		],
		showLink: true,
		image: vista,
		source_code_link: "https://github.com/nickhitos/vista",
		project_link: "https://mern-dash.netlify.app/dashboard",
	},
	{
		name: "SummariGo",
		description:
			"With cutting-edge AI technology powered by GPT (Generative Pre-trained Transformer), SummariGo aims to streamline your reading experience by providing concise, coherent, and informative summaries of lengthy articles and websites.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Vite",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Redux",
				color: "blue-text-gradient",
			},
		],
		showLink: true,
		image: summarigo,
		source_code_link: "https://github.com/nickhitos/summarigo",
		project_link: "https://summarigo.netlify.app",
	},
	{
		name: "xk Operating System",
		description:
			"A working operating system with system calls, process management functions, and memory management routines of a Unix-like OS. Additionally features a file system with I/O operations and directory management.",
		tags: [
			{
				name: "C",
				color: "blue-text-gradient",
			},
			{
				name: "GDB",
				color: "green-text-gradient",
			},
		],
		showLink: false,
		image: xk,
		source_code_link: "https://about.gitlab.com",
		project_link: "https://about.gitlab.com",
	},
	{
		name: "333gle",
		description:
			"A file search system that parses HTTP requests and forms responses with an HTML webpage of query results. The multithreaded web server listens on a port and accepts client requests to query its inverted index, where documents are mapped to words.",
		tags: [
			{
				name: "C++",
				color: "blue-text-gradient",
			},
			{
				name: "C",
				color: "green-text-gradient",
			},
			{
				name: "POSIX",
				color: "pink-text-gradient",
			},
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
		],
		showLink: false,
		image: _333gle,
		source_code_link: "https://about.gitlab.com",
		project_link: "https://about.gitlab.com",
	},
	{
		name: "Campus Paths",
		description:
			"Campus Paths calculates and displays the shortest route between two buildings on the University of Washington campus using Dijkstra’s algorithm. Users input their start and end destination, and the app displays the shortest path.",
		tags: [
			{
				name: "Java",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "React",
				color: "pink-text-gradient",
			},
			{
				name: "Spark",
				color: "blue-text-gradient",
			},
		],
		showLink: false,
		image: campuspaths,
		source_code_link: "https://about.gitlab.com",
		project_link: "https://about.gitlab.com",
	},
];

export { services, technologies, experiences, testimonials, projects };
