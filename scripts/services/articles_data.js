portfolioApp.factory('ArticlesDataService', function() {

    var srv = {};

    srv._wipArticles = [
        {
            title : 'Bloomyo',
            year: '2015',
            description : "This is an IoT-Project I am doing with my brother. The product will help people to take care of their plants. We're using an Arduino-board we're programming with C++. Pumping water through pipes and relays. For the other software we are using Angular, Java and iOS as frontend technologies. The backend works with MQTT, Maven, Spring, Jersey, Hibernate and MySQL.",
            tasks : [
                'Planing | ', 'Java/Java-Script-Development'
            ],
            link : '',
            linkText : '',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : '@work',
                    class : 'wip'
                }
            ],
            imagePath : 'images/portfolio/bloomyo/1.png'
        },
        {
            title : 'Jumpin',
            year: '2015',
            description : "That SAPUI5 hybrid mobile app helps hospitals to find human resources easily and quickly.",
            tasks : [
                'SAPUI5 Java-Script- & .NET-Development'
            ],
            link : '',
            linkText : '',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : '@work',
                    class : 'wip'
                }
            ],
            imagePath : 'images/portfolio/jumpin/1.png'
        }
    ];

    srv._dadArticles = [
        {
            title : 'Ferienfilmfestival',
            year: '2015',
            description : "Is a film-festival I organized with a friend and my brother. The idea behind the event, was to show all the emotions and impressions we gathered on our trips. For the first edition of our FFF we brought together six movies from six people who travelled to/around four different countries.",
            tasks : [
                'Planing | ', 'Development (HTML, CSS, Java-Script)'
            ],
            link : 'http://ferienfilme.github.io/',
            linkText : 'http://ferienfilme.github.io/',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/ferienfilmfestival/1.png'
        },
        {
            title : 'Hinterweissenstein',
            year: '2014',
            description : "Is my aunt and uncle’s traditional family restaurant based in the German part of the Jura in Solothurn, Switzerland. This website was made with wordpress and is now completely maintained by the owners. I organized the production of all pictures, which were taken by a friend.",
            tasks : [
                'Planing | ', 'Development (Wordpress)'
            ],
            link: 'http://www.hinterweissenstein.ch',
            linkText : 'http://www.hinterweissenstein.ch',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/hinterweissenstein/1.png'
        },
        {
            title : 'DH Blöchlinger',
            year: '2014',
            description : "This page is for a dental hygiene office in Bern, Switzerland. The concept of that e-card-page has a high profile in the web.",
            tasks : [
                'Planing | ', 'Development (HTML, CSS, Java-Script)'
            ],
            link: 'http://dh-bloechlinger.ch/',
            linkText : 'http://dh-bloechlinger.ch/',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/dhbloechlinger/1.png'
        },
        {
            title : 'ImmoMobil',
            year: '2014-2015',
            description : 'Xamarin tablet-application which enables a media disruptional maintaining of real estates.',
            tasks : [
                'Design | ', '.NET-Development with Xamarin'
            ],
            link: '',
            linkText : '',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/immomobil/1.png'
        },
        {
            title : 'WabMaAG',
            year: '2014-2015',
            description : 'This java web-application processes a huge amount of unreadable election-results into suitable graphics and tables.',
            tasks : [
                'Java- & Java-Script-Development'
            ],
            link: 'https://www.ag.ch',
            linkText : 'https://www.ag.ch',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/wabmaag/1.png'
        },
        {
            title : 'Myki',
            year: '2014-2015',
            description : 'This is a native mobile app helping children with a kidney disease. The app is available for Android and iOS, where I was responsible for the iOS-version.',
            tasks : [
                'iOS-Development with Objectiv-C'
            ],
            link: 'https://itunes.apple.com/pt/app/myki/id969515321',
            linkText : 'https://itunes.apple.com/pt/app/myki/id969515321',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/myki/1.png'
        },
        {
            title : 'n-Step',
            year: '2014-2015',
            description : 'This java web-application enables the registration of graduates in the canton Aargau, Switzerland.',
            tasks : [
                'Java- & Java-Script-Development (AJAX)'
            ],
            link: 'https://www.ag.ch',
            linkText : 'https://www.ag.ch',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/nstep/1.png'
        },
        {
            title : 'Plusdrive',
            year: '2014-2015',
            description : 'Evaluation, technical take-over and development of an already existing .NET-web-application.',
            tasks : [
                '.NET-Development (MSSQL, .NET 3.5, Windows-Services)'
            ],
            link: 'https://www.plusdrive.ch',
            linkText : 'https://www.plusdrive.ch',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/plusdrive/1.png'
        },
        {
            title : 'Neurolitetraining',
            year: '2014',
            description : 'A registration- and information page for a neurology-congress in Berne.',
            tasks : [
                'Planing | ', 'Development (Wordpress)'
            ],
            link: 'http://www.neurolitetraining.ch',
            linkText : 'http://www.neurolitetraining.ch',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/neurolitetraining/1.png'
        },
        {
            title : 'ZH-Services',
            year: '2014',
            description : 'Development-support in three different Java-web-applications, which are running on SAP-platforms. Electronic registration of withholding taxes, registration und authentification of third-party applications, apprenticeship portal providing information on teachers and enabling the processing of payment of contributions.',
            tasks : [
                'Java-Development (SAP-Platform, Primefaces, FOP, SAML)'
            ],
            link: 'https://www.services.zh.ch',
            linkText : 'https://www.services.zh.ch',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/zhservices/1.png'
        },
        {
            title : 'TMS-Therapie',
            year: '2013',
            description : 'An information page covering the topic of transcranial magnetic stimulation in therapy.',
            tasks : [
                'Planing | ', 'Development (Wordpress)'
            ],
            link: 'http://www.tms-therapie.ch',
            linkText : 'http://www.tms-therapie.ch',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/tms/1.png'
        },
        {
            title : 'Greenproperty',
            year: '2013-2015',
            description : 'A java-web-application supporting the „Real Estate Asset Management“ of Crédit Suisse. I was involved during the creation of the first version and later on while we were implementing further features like the reporting and PDF-Creation. We used open-source technologies like Spring, Hibernate, MySQL, Primefaces, Birt and some open-source libraries.',
            tasks : [
                'Java-Development (Spring, Hibernate, MySQL, Primefaces, Birt and some open-source libraries.)'
            ],
            link: 'http://www.greenproperty.ch',
            linkText : 'http://www.greenproperty.ch',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/greenpro/1.jpg'
        },
        {
            title : 'NAS',
            year: '2013',
            description : 'Bachelor thesis in the context of education for BSc in computer science. The Neglect Analysis software allows automated analysis of patient tests, which were carried out with graphic software. The results are presented to the user in the form of charts and serve the diagnosis. Planning and implementation of Java productively deployed application.',
            tasks : [
                'Planing | ', 'Java-Development (Swing, Derby, Log4j, PDFJet, JFreeChart)'
            ],
            link: 'http://students.book.bfh.ch/fileadmin/tx_bfh/pdf/abstracts/357_Martin_Moser.pdf',
            linkText : 'http://students.book.bfh.ch/...',
            tags : [
                {
                    text : 'Bachelor-Thesis',
                    class : 'study'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/datamining/1.jpg'
        },
        {
            title : 'ETH Zurich, DOI',
            year: '2012-2013',
            description : 'ETH Zurichs DOI Desk is the official DOI registration office for Switzerlands university and research sector. I was gathering there my first experience as a employed java-developer while I was studying. It is an open-source java web-project based on the lakshmi-framework where we were using Rich-Faces, ant, glassfish, postgres, junit, log4j and some open-source libraries.',
            tasks : [
                'Java-Development (Rich-Faces, Ant, Glassfish, Postgres, Junit, Log4j and some open-source libraries)'
            ],
            link: 'https://www.library.ethz.ch/en/Dienstleistungen/Publizieren-registrieren-verwalten/DOI-Desk-der-ETH-Zuerich',
            linkText : 'https://www.library.ethz.ch/en/...',
            tags : [
                {
                    text : 'employee',
                    class : 'employee'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/doi/1.png'
        },
        {
            title : 'Vögeli AG',
            year: '2010',
            description : 'A Portrait of the construction-company in Limpach, Switzerland. At that time I created that web-page I was working for that company as a construction worker too. The work was hard but I appreciate that time as a good experience in my life. I enjoyed the photo-project where me and a friend took portrait-pictures of all 35 employees. Finally we integrated them on the web-page which was the project-completion and afterwards the time with the people too. The web-page is maintainable by a tiny CMS which enables the user to edit the employees and news-posts. I used PHP and Java-Script/AJAX as programming languages.',
            tasks : [
                'Planing |', 'PHP- and Java-Script-Development'
            ],
            link: 'http://www.voegelibau.ch',
            linkText : 'http://www.voegelibau.ch',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/voegeli/1.png'
        }
    ];

    srv._inactiveArticles = [
        {
            title : 'Praxis-App',
            year: '2010',
            description : 'This was an administration-web-application for a private massage salon. The user recorded and edited patients and charged them the expenses. During and after a treatment period he had the opportunity to issue a bill to the patient or directly to the insurance. An automated PDF generator did that job. To be reminded of birthdays of customers, he could enable the feature „Birthday-Reminder“. The application was running on a web server, which was operated by a notebook. I used PHP and Java-Script/AJAX as programming languages.',
            tasks : [
                'Planing | ', 'PHP- and Java-Script-Development'
            ],
            link : '',
            linkText : '',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/praxisapp/1.png'
        },
        {
            title : 'Verena Moser',
            year: '2010',
            description : 'This project was an election-page for Verena Moser when she ran for the Swiss national council. The page contained a tiny CMS to edit news posts and was written in PHP and Java-Script.',
            tasks : [
                'Planing | ', 'PHP- and Java-Script-Development'
            ],
            link: '',
            linkText : '',
            tags : [
                {
                    text : 'private',
                    class : 'private'
                },
                {
                    text : 'done',
                    class : 'done'
                }
            ],
            imagePath : 'images/portfolio/verenamoser/1.png'
        }
    ];

    // Service implementation
    srv.getWipArticles = function () {
        return angular.copy(srv._wipArticles);
    };

    srv.getDadArticles = function () {
        return angular.copy(srv._dadArticles);
    };

    srv.getInactiveArticles = function () {
        return angular.copy(srv._inactiveArticles);
    };

    // Public API
    return {
        getWipArticles: function () {
            return srv.getWipArticles();
        },

        getDadArticles: function () {
            return srv.getDadArticles();
        },

        getInactiveArticles: function () {
            return srv.getInactiveArticles();
        },
    };

});
