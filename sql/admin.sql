CREATE KEYSPACE admin WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};
USE admin;

CREATE TABLE partner (id TEXT, name TEXT, properties map<TEXT,TEXT>, hashed_api_key TEXT, hashed_api_key_salt row_id timeuuid PRIMARY KEY (id) );

CREATE TABLE mqtt_server ( id timeuuid, host TEXT, port int, max_clients int PRIMARY KEY (host, port) );

CREATE TABLE mqtt_server_client ( mqtt_server_id timeuuid, clients set<int>, row_id timeuuid PRIMARY KEY (mqtt_server_id));

