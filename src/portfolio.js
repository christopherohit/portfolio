/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nhan T. Huynh",
  title: "Hi all, I'm Nhan",
  subTitle: emoji(
    "Passionate AI engineer with experience in building intelligent applications using cutting-edge machine learning techniques🚀.Experienced in model development and deployment, with a knack for translating data into intelligent applications. Proficient in TensorFlow/PyTorch and other cool libraries like OpenCV/MLlib. Passionate about deep learning, machine learning, eager to push the boundaries of AI and revolutionize the way we interact with technology. "
  ),
  resumeLink: "https://flowcv.com/resume/tt5abd5kkn", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/christopherohit",
  linkedin: "https://www.linkedin.com/in/nhan-huynh-0a5b15186/",
  gmail: "nhanht.18@grad.uit.edu.vn",
  gitlab: "https://gitlab.com/christopherohit",
  facebook: "https://www.facebook.com/profile.php?id=61552029157635",
  medium: "https://medium.com/@xuanquyen02023002",
  stackoverflow: "https://stackoverflow.com/users/11474516/christie-ed-1210",
  kaggle: "https://www.kaggle.com/hendrichscullen",
  instagram: "https://www.instagram.com/nhan._huynh/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'M A DATA SCIENCE WHO WANTS TO MAKE SOMETHING NEW AND EFFICIENT",
  skills: [
    emoji("⚡ Research and Develope Algorithms / R&D"),
    emoji("⚡ Improve current methods for application / Optimizer"),
    emoji(
      "⚡ Propose solotions and research directions for the prpblem / Solution Architecture"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Data science",
      fontAwesomeClassname: "fa fa-flask"
    },
    {
      skillName: "Mathematics",
      fontAwesomeClassname: "	fas fa-square-root-alt"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Information Technology",
      logo: require("./assets/images/Logo_UIT_updated.svg.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - April 2025",
      desc: "Participated in the research of Artificial Intelligent and Published 3 papers. Give the skills and knowledge they need to be successful in the AI industry. Students will learn from experienced faculty and researchers and will have the opportunity to work on real-world AI projects. The program also offers a strong emphasis on ethics, ensuring that students are aware of the potential benefits and risks of AI technologies.",
      descBullets: [
        "Comprehensive coverage of AI fundamentals, including machine learning, deep learning, natural language processing, and computer vision.",
        "Specialization options in healthcare AI, finance AI, and transportation AI.",
        "Hands-on experience with developing and deploying AI solutions.",
        "Strong emphasis on ethics and responsible AI development."
      ]
    },
    {
      schoolName: "University Tranports Communication",
      logo: require("./assets/images/download.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - April 2023",
      desc: "First prize in Competition Research Science",
      descBullets: [
        "Activities and societies: Establish AI@Lab at University",
        "Take part in Research Science"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Natural Language Processing (NLP)", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "70%"
    },
    {
      Stack: "Mathematics",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Researcher/ AI Consultant",
      company: "BnK Solutions",
      companylogo: require("./assets/images/5fR63WV2BBbPVCdghdpNBhRS5mzFHFLB.png"),
      date: "Jan 2024 – Present",
      desc: "Propose solution to specific problems of AI Team, Research paper to apply to specific products of the company",
      descBullets: [
        "Deploy the algorithms",
        "Build data pipelines to processing data",
        "Maintainer server and monitor it"
      ]
    },
    {
      role: "Software Engineer",
      company: "NaisCorp",
      companylogo: require("./assets/images/1516591142391.jpeg"),
      date: "May 2023 – Dec 2023",
      desc: "Working like a Freelancer",
      descBullets: [
        "Server maintenance and development",
        "API code required by FE",
        "In charge and management of the database system"
      ]
    },
    {
      role: "Training Program Development Specialist AI – AI Engineer",
      company: "VTC Academy",
      companylogo: require("./assets/images/download (1).png"),
      date: "Jun 2023 – Nov 2023",
      desc: "Teacher, Researcher and Developer",
      descBullets: [
        "AI Implementation",
        "AI Research",
        "AI Training/Monitoring Server Management",
        "Analyze and deploy AI models",
        "Research on Generative AI models",
        "Research on NLP problems to deploy in products"
      ]
    },
    {
      role: "Trainee AI Engineer",
      company: "VinBigData",
      companylogo: require("./assets/images/logo-VinBigData-2020-01.png"),
      date: "Jan 2023 – Jul 2023",
      desc: "The Vingroup AI Engineer Training Program is a comprehensive program that covers a wide range of topics related to artificial intelligence and data science.      The program is designed to give participants the knowledge and skills they need to become successful AI engineers."
    },
    {
      role: "Artificial Intelligence Engineer",
      company: "Ezin InsurTech J.S.C",
      companylogo: require("./assets/images/download.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Team Leader",
      descBullets: [
        "Manage the company's source code organization",
        "Develop DL/ML models for problems",
        "Propose and provide solutions to problems",
        "Optimize DL/ML models for server-deployed problems",
        "Develop research into products and write APIs",
        "Organize and divide work among team members"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cloud Certification: Machine Learning Engineer",
      subtitle:
        "Learn skills for a machine learning role, prepare for Google Cloud Professional Machine Learning Engineer certification. Design, build, deploy ML models on Google Cloud to solve business challenges. Understand certification's significance and its relation to other Google Cloud certifications.",
      image: require("./assets/images/gcp.png"),
      imageAlt: "Google cloud",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/GD8Z385ZCY22"
        },
        {
          name: "Google Cloud",
          url: "https://cloud.google.com/?hl=en"
        }
      ]
    },
    {
      title: "Machine Learning Specialization",
      subtitle:
        "Build ML models with NumPy, scikit-learn for prediction. Use TensorFlow for multi-class classification. Explore decision trees, ensemble methods, and adhere to best practices. Apply unsupervised learning for clustering, anomaly detection. Construct recommender systems with collaborative filtering, content-based deep learning. Delve into deep reinforcement learning for versatility in ML.",
      image: require("./assets/images/https___cdn.evbuc.com_images_125559383_317212851579_1_original.png"),
      imageAlt: "Machine Learning Specialization",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/KY5X3C6Q48ME"
        }
      ]
    },
    {
      title: "IBM Data Analysis",
      subtitle:
        "Master practical skills used by data scientists. Learn Python, SQL, and data analysis. Build machine learning models, work on real-world projects, and showcase your proficiency in a portfolio.",
      image: require("./assets/images/download (2).png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/LCBB2VNE6PFW"
        },
        {
          name: "IBM",
          url: "https://www.ibm.com/us-en"
        }
      ]
    },
    {
      title: "IBM Data Science",
      subtitle:
        "Master the most up-to-date practical skills and knowledge that data scientists use in their daily roles, Learn the tools, languages, and libraries used by professional data scientists, including Python and SQL, Import and clean data sets, analyze and visualize data, and build machine learning models and pipelines, Apply your new skills to real-world projects and build a portfolio of data projects that showcase your proficiency to employers",
      image: require("./assets/images/download (2).png"),
      imageAlt: "IBM Data Science",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/TA9QCYR8ZT8U"
        }
      ]
    },
    {
      title: "IBM AI Engineer",
      subtitle:
        "ML: Algorithms for pattern recognition. Deep Learning: Neural networks with multiple layers. ML algorithms: Classification, regression, clustering. Implement models with SciPy, ScikitLearn. Deploy on Apache Spark. Build deep learning models using Keras, PyTorch, TensorFlow for tasks like image recognition, NLP.",
      image: require("./assets/images/download (2).png"),
      imageAlt: "IBM AI Engineer",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/ETBKDXEN3QKC"
        }
      ]
    },
    {
      title: "IBM Applied AI",
      subtitle:
        "Learn AI, applications, machine learning, and neural networks. Create chatbots without coding, deploy on websites. Build AI solutions with IBM Watson, Python, minimal coding. Apply computer vision with Python, OpenCV, Watson for custom image classification, deploy to the Cloud.",
      image: require("./assets/images/download (2).png"),
      imageAlt: "IBM",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/WGBRJJ239RTQ"
        }
      ]
    },
    {
      title:
        "Segmentation on Chest CT Imaging in COVID-19 Based on the Improvement Attention U-Net Model",
      subtitle:
        "Proposes a new deep learning model for COVID-19 lesion detection in chest CT images. Utilizes Attention U-net with ASPP and an attention gate for improved accuracy (99.61%) and precision (80.43%) compared to the baseline on Chest CT images.",
      image: require("./assets/images/download (1).jpeg"),
      imageAlt: "IOS Press S.O.M.E.T Conference 2022 · Oct 23, 2022",
      footerLink: [
        {
          name: "Show publications",
          url: "https://ebooks.iospress.nl/volumearticle/60837"
        }
      ]
    },
    {
      title:
        "VehiDE Dataset: New dataset for Automatic vehicle damage detection in Car insurance",
      subtitle:
        "Creating a reliable auto insurance model for car damage identification is challenging due to limited datasets. The VehiDE dataset, with 13,945 high-res photos and detailed annotations, addresses this. Thorough analysis demonstrates expertise in automotive damage identification using advanced deep learning.",
      image: require("./assets/images/download (3).png"),
      imageAlt:
        "Institute of Electrical and Electronics Engineers · Oct 18, 2023",
      footerLink: [
        {
          name: "Show publications",
          url: "https://ieeexplore.ieee.org/document/10299490"
        }
      ]
    },
    {
      title: "Best Paper Award at S.O.M.E.T Conference 2022",
      subtitle:
        "Affiliated with Vietnam National University, HCMC, this paper at SOMET 2022 proposes a deep learning model for COVID-19 lesion detection in chest CT images. Built on Attention U-net with ASPP and an attention gate, the model achieves 99.61% accuracy and 80.43% precision, earning the Best Paper Award.",
      image: require("./assets/images/Screenshot 2024-01-25 at 16.55.35.png"),
      imageAlt: "Archivements",
      footerLink: [
        {
          name: "Show verification",
          url: "https://drive.google.com/file/d/12i1h0vibW_BfjnUvd-60fGQNvkDP5fh8/view?usp=sharing"
        }
      ]
    },
    {
      title: "Top 10 Product In AI Award 2022",
      subtitle:
        "Ezin Insurtech introduces a method with 97.69% accuracy in car damage detection, aiming to simplify customer experience and provide a product that calculates damage areas and fees.",
      image: require("./assets/images/download (4).png"),
      imageAlt: "VNExpress",
      footerLink: [
        {
          name: "Show verification",
          url: "https://vnexpress.net/6-du-an-duoc-binh-chon-cao-nhat-ai-awards-2022-4505036.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Credly Badge Workshop",
      subtitle: "My archivement",
      slides_url: "https://www.credly.com/earner/earned",
      event_url: "https://www.credly.com/earner/earned"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/channel/UC6UrwtJjV4xPxxZo-ZEpQYA"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-792361509",
  email_address: "nhanht.18@grad.uit.edu.vn"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
