CREATE KEYSPACE admin with 
durable_writes=true 
and REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE admin;

CREATE TABLE partner (id TEXT, name TEXT, properties map<TEXT,TEXT>, 
hashed_api_key TEXT, hashed_api_key_salt text, 
row_id timeuuid, PRIMARY KEY (id));


