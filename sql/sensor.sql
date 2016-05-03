CREATE KEYSPACE sensor with 
durable_writes=true 
and REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE sensor;

CREATE TABLE sensor (partner_id TEXT, name TEXT, id TEXT, location TEXT, 
    site TEXT, type TEXT, properties map<TEXT,TEXT>, row_id timeuuid, PRIMARY KEY (partner_id,site,location,id));

CREATE TABLE measurement_date (sensor_id TEXT, measured_date date, measured timestamp, measure TEXT, 
    text_value TEXT, double_value double, row_id timeuuid, PRIMARY KEY ((sensor_id, measured_date),measured,measure)) 
WITH CLUSTERING ORDER BY (measured DESC, measure ASC);

