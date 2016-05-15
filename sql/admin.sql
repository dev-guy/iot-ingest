CREATE KEYSPACE admin with 
durable_writes=true 
and REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE admin;

CREATE TABLE partner (id TEXT, name TEXT,
encrypted_api_key TEXT, encrypted_api_key_salt_len int,
email_address TEXT,
PRIMARY KEY (id));

CREATE TABLE user (
partner_id TEXT,
email_address TEXT,
name TEXT,
hashed_password TEXT, hashed_password_salt text,
PRIMARY KEY (partner_id, email_address));

