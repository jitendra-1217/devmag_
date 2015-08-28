

var Config = function() {

    return {

        port: 3017,                                             //  Set config variables here..
        host: 'localhost',
        mongodb: 'sampledb',

        getBaseUrl: function() {

            return ('http://' + this.host + ':' + this.port);
        },

        getMongodbConnUrl: function(host, db) {                 //  Get connection url for mongodb host

            if (host === undefined) host = this.host;
            if (db === undefined)   db = this.mongodb;

            return 'mongodb://' + host + '/' + db
        }
    }
};

module.exports = Config;
