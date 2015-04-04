'use strict';

bmApp.factory('BookDataService', function() {
    var srv = {};
    
    srv._books = [
        {
            title : 'JavaScript für Enterprise-Entwickler',
            subtitle : 'Professionell programmieren im Browser und auf dem Server',
            isbn : '978-3-89864-728-1',
            abstract : 'JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.',
            numPages : 302,
            author : 'Oliver Ochs',
            publisher : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            },
            tags : [
                'javascript', 'enterprise', 'nodejs', 'web', 'browser'
            ]
        },
        {
            title : 'Node.js & Co.',
            subtitle : 'Skalierbare, hochperformante und echtzeitfähige Webanwendungen',
            isbn : '978-3-89864-829-5',
            abstract : 'Nach dem Webbrowser erobert JavaScript nun auch den Webserver.',
            numPages : 334,
            author : 'Golo Roden',
            publisher : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            },
            tags : [
                'javascript', 'nodejs', 'web', 'realtime', 'socketio'
            ]
        },
        {
            title : 'CoffeeScript',
            subtitle : 'Einfach JavaScript',
            isbn : '978-3-86490-050-1',
            abstract : 'CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript.',
            numPages : 200,
            author : 'Andreas Schubert',
            publisher : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            },
            tags : [
                'coffeescript', 'web'
            ]
        }
    ];
    
    // Service implementation
    srv.getBookByIsbn = function (isbn) {
        for (var i = 0, n = srv._books.length; i < n; i++) {
            if(isbn === srv._books[i].isbn) {
                return angular.copy(srv._books[i]);
            }
        }
        
        return null;
    };
    
    srv.getBooks = function () {
        return angular.copy(srv._books);   
    };
    
    srv.storeBook = function(book) {
        srv._books.push(book);  
    };
    
    srv.updateBook = function(book) {
        for (var i = 0, n = srv._books.length; i < n; i++) {
            if (book.isbn === srv._books[i].isbn) {
                angular.extend(srv._books[i], book);
                return;
            }
        }
    };
    
    srv.deleteBookByIsbn = function(isbn) {
        var i = srv._books.length;
        while (i--) {
            if (isbn === srv._books[i].isbn) {
                srv._books.splice(i, 1);
                return;
            }
        }
    };
    
    srv.getTags = function() {
        var obj = {};
        var tag;
        
        for(var i = 0, n = srv._books.length; i < n; i++) {
            for(var j = 0, m = srv._books[i].tags.length; j < m; j++) {
                tag = srv._books[i].tags[j];
                if(!obj.hasOwnProperty(tag)) {
                    obj[tag] = true;   
                }
            }
        }
        
        return Object.keys(obj);
    }
    
    // Public API
    return {
        getBookByIsbn: function (isbn) {
            return srv.getBookByIsbn(isbn);  
        },
        getBooks: function () {
            return srv.getBooks();
        },
        storeBook: function(book) {
            srv.storeBook(book);   
        },
        updateBook : function(book) {
            srv.updateBook(book);  
        },
        deleteBookByIsbn : function(isbn) {
            srv.deleteBookByIsbn(isbn);  
        },
        getTags: function() {
            srv.getTags();  
        }
    };
});