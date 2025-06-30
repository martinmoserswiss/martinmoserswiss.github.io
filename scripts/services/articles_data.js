portfolioApp.factory('ArticlesDataService', function () {

    var srv = {};

    srv._employeeProjects = [
        {
            title: 'Studio DIA - Redesign with flair - UX optimization without loss of identity',
            year: '2024 – 2025',
            description: 'For the studiodia.ch project, I worked with the client to develop and implement targeted improvements to the content and user experience (UX). The aim was to make the existing website more modern, accessible and user-friendly - without losing the characteristic appearance that has always characterized Studio DIA. The challenge was to respect the existing design language while integrating current web standards and a more consistent user experience. Working closely with the Studio DIA team, we restructured content, optimized navigation and made minor design adjustments that make a big difference overall - without reinventing the wheel. I particularly appreciate projects like this, where the aim is to develop what already exists in a meaningful way rather than replacing it with a completely new development. For me, the balance between preserving and improving is not just a question of design, but a strategic decision.',
            tasks: [
                'Project management', 'Web development', 'Wordpress (PHP, HTML, SCSS)'
            ],
            link: 'https://www.studiodia.ch/',
            linkText: 'Web',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                },
                {
                    text: 'software engineer',
                    class: 'development'
                }
            ],
        },
        {
            title: 'Prozessbildung',
            year: '2024 – 2025',
            description: 'The project was implemented from scratch together with the client - from the requirements analysis to the architecture and technical implementation. The aim was to create a website that allows visitors to access information, get in touch, watch protected videos and take out a paid subscription. The platform enables the administration of user accounts, secure login, address registration and payment processing. We also supported the client in setting up her Microsoft infrastructure for internal and external communication.',
            tasks: [
                'Concept & Architecture', 'Full-Stack-Development', 'Project management', 'IT-Infrastructur Consulting'
            ],
            link: 'https://www.prozessbildung.ch/',
            linkText: 'Web',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                },
                {
                    text: 'full stack software engineer',
                    class: 'development'
                }
            ]
        },
        {
            title: 'ZRH Insider App',
            year: '2022 - 2024',
            description: "Zurich Airport provides various services for its own employees and for the employees (around 30,000) of tenant companies. One of these services is the ZRH Insider App, a native iOS and Android mobile application. I had the privilege of working on the initial version 1.0 and subsequent versions as a project manager and requirements engineer. The product team on my side is broadly based with people from the disciplines of Solution Architect, Android Developer, iOS Developer, UX Design, UX Writing and QA. This allows tasks to be delegated and focused.",
            tasks: [
                'Project management', 'Requirements engineering'
            ],
            link: 'https://apps.apple.com/no/app/zrh-insider/id6446686387',
            linkText: 'iOS',
            link2: 'https://play.google.com/store/apps/details?id=ch.zrh.insider&hl=en_US',
            linkText2: 'Android',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                },
                {
                    text: 'requirements engineer',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Kurts Aletsch Gold Run',
            year: '2022 - 2023',
            description: "In collaboration with the marketing agency AB3 and the creative agency Junghaenis, I was able to design, develop and launch the 'endless jump & run' game 'Kurts Aletsch Gold Run' for Walker mountain cheese dairy. The game can be played in the browser on both desktop computers and smartphones and was specially developed for advertising purposes.  At the beginning of the game, players are asked for their nickname so that at the end the number of points scored can be assigned to the respective nickname and saved. A ranking list shows the scores of all nicknames. If players want to take part in a prize draw, they can enter their name in a list at the end of the game. The technology stack was extensive. The game was developed with Unity and optimized as a web GL build for the web. The runtime environment is a Wordpress instance that uses Custom Divi Module (React) as a theme.",
            tasks: [
                'Game (Unity, C#, Graphics, Physics, Prefabs)', 'Frontend (PHP, Javascript (React), HTML, CSS, WebGL)', 'Backend (Wordpress API, Pods)'
            ],
            link: 'https://aletschgold.ch/ ',
            linkText: 'aletschgold.ch',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                },
                {
                    text: 'full stack software engineer',
                    class: 'development'
                }
            ],
        },
        {
            title: 'Process engine for Cave du Rhodan',
            year: '2023 - 2024',
            description: "Cave du Rhodan sells its products to wine lovers both on site, including at trade fairs and events, and via its online store. The company uses marketing automation software (MAS) for its online marketing. This enables the creation of various campaigns, including lead scoring, analyses and sales, in order to maintain digital communication with customers even after they have made a purchase. To enable data-based online marketing, the online store was electronically connected to the MAS. This means that communication can be better managed based on online purchases. However, there was no automatic data synchronization between the other sales channels, which are recorded directly in the ERP system, and the MAS. Therefore, data synchronization between ERP and MAS was either done manually or not at all. In order to take online marketing to a higher level and ensure that all customers and orders are included in online marketing, it is important that all relevant data, including data from the ERP, is available in the MAS on a daily basis. What was needed was a solution that would enable automated communication between the two systems (ERP and MAS) in order to eliminate the manual effort and thus the interface between the online store and MAS. As ab3.ch's technology partner, I was able to plan, design, implement and introduce the automation.",
            tasks: [
                'Time Triggered Azure Function with Key Vault and Application Insights', 'Software engineering with C#', 'Requirements engineering'
            ],
            link: 'https://rhodan.ch/',
            linkText: 'rhodan.ch',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                },
                {
                    text: 'software engineer',
                    class: 'development'
                }
            ],
        },
        {
            title: 'Berghilfe',
            year: '2023',
            description: "Swiss Mountain Aid has been helping people in the Swiss mountains since 1943. They support projects that create jobs and added value in mountain regions. In this way, they counteract emigration and ensure that the mountain regions remain vibrant in the future. I was able to further develop and support this web application as a freelancer for gridonic.ch. I was also able to help with the setup of a future new application.",
            tasks: [
                'Statamic (PHP, HTML, SCSS)', 'Javascript (Vue.js)'
            ],
            link: 'https://www.berghilfe.ch',
            linkText: 'berghilfe.ch',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                },
                {
                    text: 'software engineer',
                    class: 'development'
                }
            ],
        },
        {
            title: 'The King M.D.',
            year: '2022 - 2024',
            description: "The King M.D. is a Bernese rapper who has nothing less in mind than, as befits a rapper, to show the other German-speaking rappers that he too has a say in this game. As a freelancer, I am able to support M.D. with many technical challenges. Starting with the professional setup of all music platforms so that the music reaches the listeners on time. Furthermore, I was allowed to create and operate a small website, which offers an exciting and expandable platform, in addition to all social media channels. Finally, I was also allowed to support M.D. in the promotion of social media posts in Switzerland, Germany and Austria.",
            tasks: [
                'iMusician', 'Spoitify, Deezer, Apple Musik, Amazon Music und Youtube Music', 'Web (HTML, CSS, Javascript)', 'Facebook Ads Manager'
            ],
            link: 'https://thekingmd.com',
            linkText: 'thekingmd.com',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                }
            ],
        },
        {
            title: 'Buzz Tour',
            year: '2023',
            description: "The BUZZ-Tour is a contest tour for ski and snowboard freestylers in Switzerland with several events in the Bernese Oberland and Central Switzerland. I was allowed to create this small website together with customers and have been running it ever since.",
            tasks: [
                'HTML', 'Vanilla CSS & Javascript', 'Zero Dependencies', 'Parcel builder'
            ],
            link: 'https://buzz-tour.ch',
            linkText: 'buzz-tour.ch',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                },
                {
                    text: 'software engineer',
                    class: 'development'
                }
            ],
        },
        {
            title: 'Curling Club Zermatt',
            year: '2023',
            description: "The curling club in Zermatt is one of the most successful curling clubs in Switzerland. Through the marketing agency ab3.ch, I was able to define the content architecture of the website and enter the content as a freelancer. The website also displays tournament rankings. These rankings are created by a Windows client application, copied to the FTP server at the touch of a button and automatically published by the website.",
            tasks: [
                'Content architecture', 'Wordpress (Divi)', 'Legacy Windows Software with FTP Interface'
            ],
            link: 'https://cczermatt.ch',
            linkText: 'cczermatt.ch',
            tags: [
                {
                    text: 'm0s',
                    class: 'private'
                }
            ],
        },
        {
            title: 'AniTransFair App',
            year: '2022 - 2023',
            description: "The Swiss Federal Office for Food Safety and Veterinary Medicine (BLV) wants to offer an easy-to-use mobile app to help people make decisions. The app should give an answer whether sick or injured pigs and cattle can be transported or not and which precautionary measures should be taken. As project manager I developed this app together with customers, designers, requirements engineers, UX researchers and developers.",
            tasks: [
                'Project management', 'Flutter app'
            ],
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Indu 4.0',
            year: '2023',
            description: "Indu 4.0 is an intermediary platform for industrial service providers. The web application was developed with react and had to be optimized for search engines with NextJS. As the project manager, I learned a lot about SEO in connection with single page applications.",
            tasks: [
                'React and NextJS', 'Merge a website with a single page application', 'SEO'
            ],
            link: 'https://www.indu40.com',
            linkText: 'indu40.com',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Miljobs',
            year: '2021 - 2024',
            description: "The goal of the website is to prepare members and other potential volunteers for recruitment into the best possible role in the Swiss Armed Forces. As project manager and requirements engineer, I worked with clients, designers, developers, user reasearchers and the external agency pixelfarm.ch to develop and shape the website. The highlight of the website is the scrollitelling feature, which portrays real people privately and in the army using interviews and media. This creates an additional point of reference, broadens the imagination and ultimately facilitates decision-making. The second interesting feature is the 'Discover your possibilities' feature. Fictitious 360° worlds are used to illustrate various deployment scenarios in the Swiss Armed Forces. This presentation makes it possible to visualize and explain functions in a practical way and put them into context.",
            tasks: [
                'Website with Statamic', 'Scrollitelling', 'Development of 360° scenarios', 'Project management', 'Requirements engineering'
            ],
            link: 'https://www.miljobs.ch',
            linkText: 'miljobs.ch',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                },
                {
                    text: 'requirements engineer',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Blockchain validation node with RPC',
            year: '2022 - 2023',
            description: "Apps with love operates a validation node and RPC for the Swiss DLT blockchain. As software engineer, I did the initial setup together with https://twitter.com/pcaversaccio of the node. Based on the architecture we've created, we then also implemented the RPC. This made it possible for smart contracts to be deployed on the Swiss DLT blockchain and for apps to communicate with this blockchain.",
            tasks: [
                'Blockchain ecosystem architecture', 'Implementation of infrastructure work', 'Setup and configuration of geth client', 'Creation and deployment of Solidity Smart Contracts'
            ],
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'software engineer',
                    class: 'development'
                }
            ],
        },
        {
            title: 'Wallets - Mobile apps',
            year: '2020 - 2021',
            description: "Together with customers, designers, blockchain experts, developers and testers, I develop mobile wallets with which users can redeem digital vouchers. The solution is based on a SmartContract and stores transactions via a specially created RPC on a custom Ethereum blockchain.",
            tasks: [
                'Project management', 'Requirements engineering', 'Smart contract development', 'Technical solution design'
            ],
            link: 'https://appswithlove.com/referenzen/startfeld',
            linkText: 'Startfeld project',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                },
                {
                    text: 'smart contract developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Gold Winner "Migros Play App" - Mobile app',
            year: '2017-2021',
            description: 'Together with customers, designers, developers and testers I working on the Migros Play app. With this iOS and Android app, children can enjoy various Migros campaigns on their smartphones. Audio stories can be heard, animals brought to life via AR by scanning physical stickers and other feautures were available. With this app we won the Gold Award at the Swiss Best of Swiss App Award in the category "campagnes".',
            tasks: [
                'Project management', 'Requirements engineering'
            ],
            link: 'https://appswithlove.com/referenzen/migros-play',
            linkText: 'Migros Play project',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'WESCO - Digital services',
            year: '2019-2021',
            description: "For WESCO I develop together with the client and the project team a mobile IoT app that should easily play together with the physical steam drain hoods. A careful clarification of the requirements and technical advices in the initial phase is crucial for the success of the product. I have been accompanying the project since the beginning as a project manager and technical consultant.",
            tasks: [
                'Project management', 'Requirements engineering', 'Technical solution design'
            ],
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Bronze winner "Schurter Smart Connector" mobile app',
            year: '2020-2021',
            description: "With the app, users can configure and control Smart Connectors (IoT devices). In close cooperation with good people from the disciplines of consulting, user researcher, design, QA and development, I was allowed to manage the technical implementation of the project. I'm curious about how the project develops further.",
            tasks: [
                'Project management'
            ],
            link: 'https://apps.apple.com/de/app/smart-connector/id1545326243',
            linkText: 'iOS App',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'PHBern - Concept & Design',
            year: '2020-2021',
            description: "Together with consultants, marketeers, designer and developers, I created a concept for a digital school culture development concept and present it at a final presentation event. In order to be able to make a more informed decision on a specific technical implementation, we developed also the basics of a business model for a digital product.",
            tasks: [
                'Project management', 'Requirements engineering', 'Consulting'
            ],
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Platform Open - Web application',
            year: '2019',
            description: "Platform Open was a project for a startup from the sharing economy. The first one-key solution for the access management of the future. The goal of OPEN was to make it possible to manage all electronic and digital locks via one platform and to manage accesses easily, safe and inexpensive independently of the manufacturer. In close cooperation with customers and front-end developer, I was allowed to accompany this project as a technical project manager and backend developer.",
            tasks: [
                'Node backend development', 'Technical project mangagement'
            ],
            link: 'https://platformopen.com/',
            linkText: 'https://platformopen.com/',
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'technical project manager',
                    class: 'projectmanager'
                },
                {
                    text: 'backend developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Bronze Winner "PdG" - Mobile app',
            year: '2017-2022',
            description: 'The PdG mobile app (Patrouille des Glaciers) manages to bring a mountain race that is difficult to access at home and makes it possible to cheer for the teams and actively motivate them. I\'m allowed to accompany this project as a project manager and requirements engineer. With this app we won the Bronze Award at the Swiss Best of Swiss App Award in the category "UX/Usability" and "Functionality".',
            tasks: [
                'Project management', 'Requirements engineering'
            ],
            link: 'https://appswithlove.com/referenzen/pdg',
            linkText: 'PdG project',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Inlingua - Mobile app',
            year: '2017-2021',
            description: "Flex-e-book is a learning platform from the international language school Inlingua. It provides the students the freedom to let the heavy books at home and learn instead with a mobile app (Android and iOS). The teachers in the language centers are on the other handside able to distribute standard and customized e-books to their students through a web CMS. I am allowed to lead the further development of the system together with the client and the project team as a project manager and requirements engineer.",
            tasks: [
                'Project management', 'Requirements engineering', 'Incident management'
            ],
            link: 'https://itunes.apple.com/ch/app/inlingua-flex-e-book/id1106901698',
            linkText: 'iOS',
            link2: 'https://play.google.com/store/apps/details?id=com.appswithlove.apps.inlinguaapp',
            linkText2: 'Android',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'FlightSafety - Mobile app',
            year: '2017-2021',
            description: "Flight Safety is a mobile app of the swiss air force which shares flight know-how. The administrator is able to manage contents, functions and users in a CMS. I'm allowed in the role of the project manager and requirements engineer to improve and develop the system further with customers and the project team.",
            tasks: [
                'Project management', 'Requirements engineering', 'Incident management'
            ],
            link: 'https://apps.apple.com/ch/app/flight-safety-swiss-air-force/id1117417532',
            linkText: 'iOS',
            link2: 'https://play.google.com/store/apps/details?id=ch.zem.flightsafety',
            linkText2: 'Android',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Swissinfo - Mobile app',
            year: '2017-2019',
            description: "The mobile applications Swissinfo.ch and TV-Svizzera are products from SRG. SRG it self is the biggest company for electronic media in Switzerland and has the task to serve information to swiss citizens in and out of the country. The client continuously wanted to release new features and adjustments so that the app stays attractive for the users. The Android- and iOS-Apps were available from the Apple, Google and Tencent-Store (China). The user was able to download the app to smartphones and tablets. Both the store presence and the app content was available in 10 languages (German, French, Italian, English, Spanish, Portuguese, Russian, Japanese, Chinese and Arabian).",
            tasks: [
                'Project management', 'Requirements engineering'
            ],
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
        {
            title: 'Surprise Vertrieb',
            year: '2017/2019',
            description: "Surprise is a street magazine published by the association Surprise, with headquarters in Basel and two regional offices in Bern and Zurich. The reach of the magazine is 142,000 people. Surprise (client) sells street magazines to the street vendors via various outlets. Outlets can be small stationary grocery stores but also mobile points of contact. When magazines are sold from the outlets to the sellers, their transaction number (quantity and price) is manually recorded on a list. The collection of the numbers of the sellers is error-prone, since the persons who capture the numbers party can not read and write well. With an error-free and easier capture of each transaction, the settlement should be more pleasant and efficient. The interfaces between regional offices, outlets and sellers are crucial. I was creating a solution that fixes the problem and satisfies the affected areas. With a QR code scanner in a mobile Android app, the numbers of the seller are recorded completely and without errors. With a web application, regional offices can manage the transactions. Unfortunately, I did not succeed in introducing the project successfully.",
            tasks: [
                'Node-Backend development and operation', 'Angular web development', 'Android development with Java', 'Product management'
            ],
            link: 'https://surprise.ngo',
            linkText: 'surprise.ngo',
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'full-stack developer',
                    class: 'developer'
                }
            ],
            imagePath: ''
        },
        {
            title: 'Brixel - Mobile app',
            year: '2016 - 2017',
            description: "Brixel is a digital product to sell, buy or invest in Real Estate created by Wide-Ventures. The product offers the users an innovative, fully digital process. I worked for Brixel as mobile application developer and I was responsible for the iOS and Android app.",
            tasks: [
                'Android (Java)', 'iOS (Swift)'
            ],
            link: 'https://brixel.io',
            linkText: 'https://brixel.io',
            tags: [
                {
                    text: 'employee @ wide ventures',
                    class: 'employee'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Prototyping with VR technologies - Mobile app',
            year: '2016',
            description: "I created 7 prototypes for a real-estate project with Google Tango, Google Cardboard and Unity. On the basis of these prototypes I was able to show the possibilities of the technologies and a rough time estimation for some requested use cases in websites and mobile apps.",
            tasks: [
                'Research', 'Prototyping', 'Google Tango', 'Google Cardboard', 'Unity', 'Web-Applications', 'Mobile-Apps'
            ],
            tags: [
                {
                    text: 'employee @ wide ventures',
                    class: 'employee'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Jumpin - Mobile app',
            year: '2015',
            description: "That SAPUI5 hybrid mobile app helps hospitals to find human resources easily and quick.",
            tasks: [
                'SAPUI5 with JavaScript',
                '.NET'
            ],
            link: 'https://www.usz.ch/',
            linkText: 'https://www.usz.ch/',
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'ImmoMobil - Mobile app',
            year: '2015',
            description: 'Xamarin tablet-application which enables a media disruptional maintaining of real estates.',
            tasks: [
                'Product Design', '.NET-Development with Xamarin'
            ],
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'WabMaAG - Web Application',
            year: '2015',
            description: 'This java web-application processes a huge amount of unreadable election-results into suitable graphics and tables.',
            tasks: [
                'Java',
                'JavaScript'
            ],
            link: 'https://www.ag.ch',
            linkText: 'https://www.ag.ch',
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'web application developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Myki - Mobile app',
            year: '2015',
            description: 'This is a native mobile app helping children with a kidney disease. The app is available for Android and iOS, where I was responsible for the iOS-version.',
            tasks: [
                'iOS with Objectiv-C'
            ],
            link: 'https://www.kispi.uzh.ch/',
            linkText: 'https://www.kispi.uzh.ch/',
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'n-Step - Web Application',
            year: '2015',
            description: 'This java web-application enables the registration of graduates in the canton Aargau, Switzerland.',
            tasks: [
                'Java',
                'JavaScript'
            ],
            link: 'https://www.ag.ch',
            linkText: 'https://www.ag.ch',
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'web application developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Plusdrive - Web Application',
            year: '2015',
            description: 'Evaluation, technical take-over and development of an already existing .NET-web-application.',
            tasks: [
                '.NET 3.5',
                'MSSQL',
                'Windows-Services'
            ],
            link: 'https://www.plusdrive.ch',
            linkText: 'https://www.plusdrive.ch',
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'web application developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'ZH-Services - Web Application',
            year: '2014',
            description: 'Development-support in three different Java-web-applications, which are running on SAP-platforms. Electronic registration of withholding taxes, registration und authentification of third-party applications, apprenticeship portal providing information on teachers and enabling the processing of payment of contributions.',
            tasks: [
                'Java',
                'SAP-Platform',
                'Primefaces',
                'FOP',
                'SAML'
            ],
            link: 'https://www.services.zh.ch',
            linkText: 'https://www.services.zh.ch',
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'web application developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Greenproperty - Web Application',
            year: '2013',
            description: 'A java-web-application supporting the „Real Estate Asset Management“ of Crédit Suisse. I was involved during the creation of the first version and later on while we were implementing further features like the reporting and PDF-Creation. We used open-source technologies like Spring, Hibernate, MySQL, Primefaces, Birt and some open-source libraries.',
            tasks: [
                'Java',
                'Spring',
                'Hibernate',
                'MySQL',
                'Primefaces',
                'Birt'
            ],
            link: 'http://www.greenproperty.ch',
            linkText: 'http://www.greenproperty.ch',
            tags: [
                {
                    text: 'employee @ emineo',
                    class: 'employee'
                },
                {
                    text: 'web application developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'ETH Zurich, DOI - Web Application',
            year: '2012',
            description: 'ETH Zurichs DOI Desk is the official DOI registration office for Switzerlands university and research sector. I was gathering there my first experience as a employed java-developer while I was studying. It is an open-source java web-project based on the lakshmi-framework where we were using Rich-Faces, ant, glassfish, postgres, junit, log4j and some open-source libraries.',
            tasks: [
                'Java',
                'Rich-Faces',
                'Ant',
                'Glassfish',
                'Postgres',
                'Junit',
                'Log4j'
            ],
            link: 'https://www.doi.org/',
            linkText: 'https://www.doi.org/',
            tags: [
                {
                    text: 'employee @ ethz',
                    class: 'employee'
                },
                {
                    text: 'web application developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Amateurkunst - Website',
            year: '2017',
            description: "Amateur is a community organization for amateur artists and young people interested in art, performance and dance. The user is able to get in contact with the organization, order items and subscribe as an artist to upcoming events. This mobile responsive web-project works with PHP, HTML and CSS. It was planed, improved and completed within 27 hours (ca. 3 work days).",
            tasks: [
                'PHP',
                'HTML',
                'CSS'
            ],
            link: 'http://www.amateurkunst.ch',
            linkText: 'http://www.amateurkunst.ch',
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Adventskalender - Mobile app',
            year: '2017',
            description: "It started as a gift for my girlfriend and again when I was in Lisbon. I had the idea of giving her a gift every day in december. Unfortunately I was not with her at that time. So sending small gifts in advance was not an option, because I was to lazy to create all 31 gifts before december. Going home everyday was ridiculous and thus not an option too. So I took it as my challenge. I came up with the idea to create a digital calendar where she was able to open every day a new gift. The gifts are coming from a remote server. Like that I had more time to prepare each gift until just before she was able to open it.",
            tasks: [
                'Java', 'Android'
            ],
            link: 'projects/adventskalender/index.html#/13',
            linkText: 'Adventskalender',
            tags: [
                {
                    text: 'private',
                    class: 'private'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'siClaro - Website',
            year: '2016',
            description: "This is a web page which shows a collection of private pictures I took.",
            tasks: [
                'JavaScript',
                'HTML',
                'CSS'
            ],
            link: 'projects/siClaro/index.html',
            linkText: 'siClaro',
            tags: [
                {
                    text: 'private',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Game of SNOW - Mobile app',
            year: '2016',
            description: "A app which helps snowboarder. By proposing tricks to them, they have a tool to extend their tricks repertoire. The tricks are editable through the interface. As soon as the snowborder has some saved tricks he is able to play. In manner of the favorite Game of S.N.O.W he is then able to play with a friend.",
            tasks: [
                'iOS',
                'Swift'
            ],
            tags: [
                {
                    text: 'private',
                    class: 'private'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Tinder-Like - Mobile app',
            year: '2016',
            description: "When I moved to Lisbon in 2016 I decided to create a own version of a tinder app for my girlfriend. The app works more or less like a incomplete Tinder version. The set of swipeable cards contains portraits of me but also from other random guys. Swiping cards left or right is just allowed depending on the underlying image.",
            tasks: [
                'Hybrid mobile app',
                'Ionic (HTML, CSS, Java-Script)',
                'Target: Android'
            ],
            tags: [
                {
                    text: 'private',
                    class: 'private'
                },
                {
                    text: 'mobile developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Ferienfilmfestival - Website',
            year: '2015',
            description: "Is a film-festival I organized with a friend and my brother. The idea behind the event, was to show all the emotions and impressions we gathered on our trips. For the first edition of our FFF we brought together six movies from six people who travelled to/around four different countries.",
            tasks: [
                'JavaScript',
                'HTML',
                'CSS'
            ],
            link: 'http://ferienfilme.github.io/',
            linkText: 'http://ferienfilme.github.io/',
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Bloomyo - iOT system',
            year: '2015',
            description: "This was an IoT-Project I was doing with my brother. The product would help people to take care of their plants. We were programming with C++ on an Arduino-board. Pumping water through pipes and relays. For the other part of the software we were using Angular, Java and iOS as frontend technologies. The backend worked with MQTT, Maven, Spring, Jersey, Hibernate and MySQL.",
            tasks: [
                'Concept',
                'Java',
                'JavaScript'
            ],
            tags: [
                {
                    text: 'private',
                    class: 'private'
                },
                {
                    text: 'backend developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Hinterweissenstein - Website',
            year: '2014',
            description: "Is my aunt and uncle’s traditional family restaurant based in the German part of the Jura in Solothurn, Switzerland. This website was made with wordpress and is now completely maintained by the owners. I organized the production of all pictures, which were taken by a friend.",
            tasks: [
                'PHP',
                'HTML',
                'CSS',
                'Wordpress'
            ],
            link: 'http://www.hinterweissenstein.ch',
            linkText: 'http://www.hinterweissenstein.ch',
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'DH Blöchlinger - Website',
            year: '2014',
            description: "This page was for a dental hygiene office in Bern, Switzerland. The concept of that e-card-page had a high profile in the web.",
            tasks: [
                'PHP',
                'HTML',
                'CSS',
                'Wordpress'
            ],
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Neurolitetraining - Website',
            year: '2014',
            description: 'A registration- and information page for a neurology-congress in Berne.',
            tasks: [
                'PHP',
                'HTML',
                'CSS',
                'Wordpress'
            ],
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'NAS - Client application',
            year: '2013',
            description: 'Bachelor thesis in the context of education for BSc in computer science. The Neglect Analysis software allows automated analysis of patient tests, which were carried out with graphic software. The results are presented to the user in the form of charts and serve the diagnosis. Planning and implementation of Java productively deployed application.',
            tasks: [
                'Concept',
                'Java',
                'Swing',
                'Derby',
                'Log4j',
                'PDFJet',
                'JFreeChart'
            ],
            link: 'https://bfh.easydocmaker.ch/media/pdf_final/357_Martin_Moser.pdf',
            linkText: 'Paper',
            tags: [
                {
                    text: 'student',
                    class: 'study'
                },
                {
                    text: 'application developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'TMS-Therapie - Website',
            year: '2013',
            description: 'An information page covering the topic of transcranial magnetic stimulation in therapy.',
            tasks: [
                'PHP',
                'HTML',
                'CSS',
                'Wordpress'
            ],
            link: 'http://www.tms-therapie.ch',
            linkText: 'http://www.tms-therapie.ch',
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Vögeli AG - Website',
            year: '2010',
            description: 'This was a Portrait of the construction-company in Limpach, Switzerland. At that time I created that web-page I was working for that company as a construction worker too. The work was hard but I appreciate that time as a good experience in my life. I enjoyed the photo-project where me and a friend took portrait-pictures of all 35 employees. Finally we integrated them on the web-page which was the project-completion and afterwards the time with the people too. The web-page was maintainable by a tiny CMS which enables the user to edit the employees and news-posts. I used PHP and Java-Script/AJAX as programming languages.',
            tasks: [
                'PHP',
                'HTML',
                'CSS',
            ],
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Verena Moser - Website',
            year: '2010',
            description: 'This project was an election-page for Verena Moser when she ran for the Swiss national council. The page contained a tiny CMS to edit news posts and was written in PHP and Java-Script.',
            tasks: [
                'PHP',
                'HTML',
                'CSS'
            ],
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
        {
            title: 'Praxis-App - Web application',
            year: '2010',
            description: 'This was an administration-web-application for a private massage salon. The user recorded and edited patients and charged them the expenses. During and after a treatment period he had the opportunity to issue a bill to the patient or directly to the insurance. An automated PDF generator did that job. To be reminded of birthdays of customers, he could enable the feature „Birthday-Reminder“. The application was running on a web server, which was operated by a notebook. I used PHP and Java-Script/AJAX as programming languages.',
            tasks: [
                'PHP',
                'HTML',
                'CSS',
            ],
            tags: [
                {
                    text: 'freelancer',
                    class: 'private'
                },
                {
                    text: 'web developer',
                    class: 'developer'
                }
            ],
        },
    ];

    srv._archiv = [
        {
            title: 'Mobil sein, mobil bleiben - Website',
            year: '2020-2021',
            description: "Rundum mobil GmbH is a private mobility office based in Thun, Switzerland. The customer develops a range of courses based on the latest knowledge and combines two megatrends: digital and demographic change. Courses are intended to reduce inhibitions and facilitate access to public transport.",
            tasks: [
                ''
            ],
            link: 'https://mobilsein-mobilbleiben.ch/',
            linkText: 'https://mobilsein-mobilbleiben.ch/',
            tags: [
                {
                    text: 'employee @ apps with love',
                    class: 'employee'
                },
                {
                    text: 'project manager',
                    class: 'projectmanager'
                }
            ],
        },
    ];



    // Service implementation
    srv.getEmployeeProjects = function () {
        return angular.copy(srv._employeeProjects);
    };

    // Public API
    return {
        getEmployeeProjects: function () {
            return srv.getEmployeeProjects();
        }
    };

});