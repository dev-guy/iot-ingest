CREATE KEYSPACE mqtt with
durable_writes=true
and REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE mqtt;

CREATE TABLE server ( id text, row_id timeuuid, url TEXT, options map<text, text>,
max_clients int, qos int, PRIMARY KEY (host, port) );

CREATE TABLE topic_clients ( mqtt_server_id timeuuid, topic text, client_ids set<int>, row_id timeuuid, PRIMARY KEY (mqtt_server_id, topic));

insert into server ( id, row_id, url, max_clients, qos )
values ( 'localost', now(), 'mqtt://localhost', 1, 1 );

