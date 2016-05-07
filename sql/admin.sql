CREATE KEYSPACE admin with 
durable_writes=true 
and REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE admin;

CREATE TABLE partner (id TEXT, name TEXT, properties map<TEXT,TEXT>,
encrypted_api_key TEXT, encrypted_api_key_salt_len int,
hashed_password TEXT, hashed_password_salt text,
row_id timeuuid, PRIMARY KEY (id));

CREATE TABLE user (partner_id TEXT, id TEXT, name TEXT, properties map<TEXT,TEXT>,
email_address TEXT,
hashed_password TEXT, hashed_password_salt text,
row_id timeuuid, PRIMARY KEY (id));

