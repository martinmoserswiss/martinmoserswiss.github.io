portfolioApp.factory('ArticlesDataService', function () {

  var srv = {};

  srv._employeeProjects = [
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
      title: 'Schurter Smart Connector - Mobile app',
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
      year: '2017-2021',
      description: 'The PdG mobile app (Patrouille des Glaciers) manages to bring a mountain race that is difficult to access at home and makes it possible to cheer for the teams and actively motivate them. I\'m allowed to accompany this project as a project manager and requirements engineer. With this app we won the Bronze Award at the Swiss Best of Swiss App Award in the category "UX/Usability".',
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