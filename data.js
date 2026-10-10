/* EDIT THIS FILE: everything on the site comes from here. Replace every [bracketed] placeholder with your real details. */
const PROFILE = {
  name: "[Your Full Name]",
  title: "Information Technology Student",
  status: "BSIT Student | Aspiring IT Professional",
  intro: "[Write 2 sentences about yourself: your course, your school, and the kind of IT work you want to do.]",
  about1: "[Background: where you studied, what made you choose IT, and what you enjoy most about it.]",
  about2: "[Strengths and career goals: what you are good at, and the role you want after graduation.]",
  objective: "[One or two sentences about the role you want and what you can offer an employer.]",
  email: "your.email@example.com",
  interests: ["[Interest 1: e.g. Networking]", "[Interest 2: e.g. Databases]", "[Interest 3: e.g. Web development]"],
  facts: { Program: "BSIT", School: "[Your school]", Year: "[Year level or graduation year]", Location: "[City, Country]" },
  roles: ["[Desired position 1]", "[Desired position 2]"],
  links: [
    ["Email", "mailto:your.email@example.com", "your.email@example.com"],
    ["GitHub", "https://github.com/your-username", "github.com/your-username"],
    ["LinkedIn", "https://www.linkedin.com/in/your-profile", "linkedin.com/in/your-profile"]
  ]
};
const TIMELINE = [
  { when: "[Years]", title: "Bachelor of Science in Information Technology", sub: "[Your school, city]. Add honors or achievements here." },
  { when: "[Dates]", title: "[Internship or work experience, if any]", sub: "[Company and what you did. Delete this item if you have none.]" },
  { when: "[Date]", title: "[Seminar or training attended]", sub: "[Organizer and topics covered. Delete if none.]" }
];
/* Level: 0 to 100. Keep only skills you really have. */
const SKILLS = [
  { cat: "Programming", n: "Python", l: 50 }, { cat: "Programming", n: "Java", l: 40 },
  { cat: "Programming", n: "HTML and CSS", l: 60 }, { cat: "Programming", n: "JavaScript", l: 45 },
  { cat: "Database", n: "MySQL and SQL", l: 55 },
  { cat: "Systems", n: "Networking and troubleshooting", l: 55 }, { cat: "Systems", n: "Computer hardware and software", l: 60 },
  { cat: "Security", n: "Cybersecurity fundamentals", l: 40 },
  { cat: "Data", n: "Data analysis in Excel", l: 55 },
  { cat: "Tools", n: "Git and GitHub", l: 45 }
];
const PROJECTS = [
  { t: "Student Information Management System", d: "Sample: records for students, courses and grades.", obj: "Store and search student records with a database back end.", tech: ["PHP or Python", "MySQL"], img: "", code: "", demo: "" },
  { t: "Personal Portfolio Website", d: "Sample: this responsive portfolio.", obj: "Present my skills and work in one professional page.", tech: ["HTML", "CSS", "JavaScript"], img: "", code: "", demo: "" },
  { t: "Database Management System", d: "Sample: a normalized database with queries and reports.", obj: "Design tables, keys and relationships, then query them with SQL.", tech: ["MySQL", "SQL"], img: "", code: "", demo: "" },
  { t: "Data Analysis Dashboard", d: "Sample: charts and summaries built from a data set.", obj: "Clean data and show trends in an Excel dashboard.", tech: ["Excel", "Charts"], img: "", code: "", demo: "" },
  { t: "Network Troubleshooting Tool", d: "Sample: a script that runs ping and DNS checks.", obj: "Help find where a connection fails.", tech: ["Python", "ping", "nslookup"], img: "", code: "", demo: "" }
];
/* img: path such as "assets/certs/webinar.jpg". Empty shows a placeholder. */
const CERTS = [
  { t: "[Certificate or seminar title]", by: "[Organizer]", date: "[Date]", img: "" },
  { t: "[Academic achievement]", by: "[School]", date: "[Date]", img: "" },
  { t: "[Completed IT training]", by: "[Provider]", date: "[Date]", img: "" }
];
const CASES = [
  { t: "No internet connection", p: "A computer cannot reach websites.", c: "Loose cable, disabled adapter, wrong IP settings, DNS failure, router fault.", s: "Check the cable and adapter. Run ipconfig /all. Ping the gateway, then 8.8.8.8, then a website name to find which step fails.", f: "Renew the IP with ipconfig /release and /renew, flush DNS with ipconfig /flushdns, or set a working DNS server.", l: "[Write what you learned.]" },
  { t: "Slow computer", p: "A PC is slow or freezes.", c: "Heavy background programs, low memory, full or failing disk, malware.", s: "Open Task Manager. Sort by CPU, Memory and Disk to find the heavy process. Check free disk space.", f: "End non-essential tasks, remove startup items, free disk space, scan for malware.", l: "[Write what you learned.]" },
  { t: "Printer not printing", p: "A printer is offline or jobs stay in the queue.", c: "Cable or Wi-Fi problem, changed printer IP, stuck queue, driver fault.", s: "Check power and cable. Ping the printer IP. A reply points to the driver or queue. A timeout points to the network.", f: "Clear the print queue, reinstall the driver, or restore the printer IP, then print a test page.", l: "[Write what you learned.]" },
  { t: "Database connection error", p: "An application cannot connect to MySQL.", c: "Service stopped, wrong host or port, wrong credentials, missing permissions.", s: "Confirm the MySQL service is running. Test the login in a client. Check host, port and user privileges.", f: "Start the service and correct the connection settings or user rights.", l: "[Write what you learned.]" },
  { t: "Suspicious login or phishing email", p: "A user reports an unexpected password-reset email.", c: "Phishing attempt or leaked password.", s: "Inspect the sender and links without clicking. Check the account's recent sign-in activity.", f: "Change the password, enable two-factor authentication, report and delete the email.", l: "[Write what you learned.]" }
];
const GOALS = [
  { when: "[6 months]", title: "[Short-term goal]", sub: "[e.g. earn an entry-level certification]" },
  { when: "[1 year]", title: "[Mid-term goal]", sub: "[e.g. first full-time IT role]" },
  { when: "[3 years]", title: "[Long-term goal]", sub: "[e.g. specialist or team lead]" }
];
