'use strict';

portfolioApp.factory('ArticlesDataService', function() {

    var srv = {};
    
    srv._wipArticles = [
        {
            title : 'Bloomyo',
            year: '2015',
            description : 'Is a IoT-Project which Im doing with my brother. The product will help people to care about their plants.',
            tasks : [
                'Planing | ', 'Java/Java-Script-Development'
            ],
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
            description : 'That hybrid mobile app helps hospitals to find human-ressources easy and quick.',
            tasks : [
                'Java-Script/.NET-Development'
            ],
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
            description : 'Is a festival which I organize with a friend and my brother. That simple website shows how nowadays information can be spreaded easy and quick, all over the world for free.',
            tasks : [
                'Planing | ', 'Development'
            ],
            link : 'http://ferienfilme.github.io/',
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
            description : 'Is the traditional family restaurant of my aunt and uncle which is in the german part of the Jura in Solothurn, Switzerland. This website has been made with wordpress and is now completly maintained by the owners.',
            tasks : [
                'Planing | ', 'Development'
            ],
            link: 'http://www.hinterweissenstein.ch',
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
            description : 'Is a dental hygiene office in Berne and the manager is of a good friend mine. The e-card-page is a  high profile in web.',
            tasks : [
                'Planing | ', 'Development'
            ],
            link: 'http://dh-bloechlinger.ch/',
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
            description : 'This java web-application processes unreadable election-results into suitable grafics and tables.',
            tasks : [
                'Java-Development'
            ],
            link: 'https://www.ag.ch',
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
            description : 'This is a native mobile app which helps children with a kidney disease. The app is available for Android and iOS, where I was responsible for the iOS-version.',
            tasks : [
                'iOS-Development with Objectiv-C'
            ],
            link: 'https://itunes.apple.com/pt/app/myki/id969515321',
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
            description : 'This java web-application enables the registration of graduates in the canton Aargau.',
            tasks : [
                'Java-Development'
            ],
            link: 'https://www.ag.ch',
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
            description : 'Evaluation, technical take-over and development of a already existing .NET-web-application.',
            tasks : [
                '.NET-Development'
            ],
            link: 'https://www.plusdrive.ch',
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
            title : 'ZH-Services',
            year: '2014',
            description : 'Development-support in three different Java-web-applications which are running on a SAP-platforms. Electronical reassessment of withholding taxes, registration und authentification for third-party applications, apprenticeship portal to request informations and provides the processing of contribution payment.',
            tasks : [
                'Java-Development'
            ],
            link: 'https://www.services.zh.ch',
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
            title : 'Neurolitetraining',
            year: '2014',
            description : 'A registration- and informationpage for an neurolgy-concress in Berne.',
            tasks : [
                'Planing | ', 'Development'
            ],
            link: 'http://www.neurolitetraining.ch',
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
            title : 'TMS-Therapie',
            year: '2013',
            description : 'A informationpage which covers the topic of transcranial magnetic stimulation in therapie.',
            tasks : [
                'Planing | ', 'Development'
            ],
            link: 'http://www.tms-therapie.ch',
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
            description : 'A java-web-application which supports the „Real Estate Asset Management“ of Crédit Suisse.',
            tasks : [
                'Java-Development'
            ],
            link: 'http://www.greenproperty.ch',
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
            title : 'DataMining for neglect-patients',
            year: '2013',
            description : 'Bachelor thesis in the context of education for BSc in computer science. The Neglect Analysis software allows automated analysis of patient tests, which were carried out with a graphic software. The results will be presented to the user in the form of charts and serve the diagnosis. Planning and implementation of Java productively deployed application.',
            tasks : [
                'Planing | ', 'Java-Development'
            ],
            link: 'http://students.book.bfh.ch/fileadmin/tx_bfh/pdf/abstracts/357_Martin_Moser.pdf',
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
            title : 'ETH Zurich DOI',
            year: '2012-2013',
            description : 'ETH Zurichs DOI Desk is the official DOI registration office for Switzerlands university and research sector. I was gathering there my first experience as a employed java-developer while I was studying. It was an open-source java web-project based on the lakshmi-framework where we were using ant, glassfish-webserver, postgres-database, junit, log4j and some open-source libraries.',
            tasks : [
                'Java-Development'
            ],
            link: 'https://www.library.ethz.ch/en/Dienstleistungen/Publizieren-registrieren-verwalten/DOI-Desk-der-ETH-Zuerich',
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
            description : 'This was an administration-web-application for a private massage-office. The user recorded and edited patients and charged them the expenses. During and after a treatment period he had the opportunity to provide a bill to the patient or directly to the insurance. An automated PDF generator did that job. To be reminded of birthdays of customers, he could enable the feature „Birthday-Reminder“. The application was running on a web server which was operated by a notebook. I used PHP and Java-Script/AJAX as programming languages.',
            tasks : [
                'Planing | ', 'PHP- and Java-Script-Development'
            ],
            link : '',
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
        return srv._wipArticles;
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
        }
        ,
        getDadArticles: function () {
            return srv.getDadArticles();
        },
        getInactiveArticles: function () {
            return srv.getInactiveArticles();
        },

    };

});