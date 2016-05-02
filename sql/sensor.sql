CREATE KEYSPACE sensor WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};
USE sensor;

CREATE TABLE sensor (partner_id TEXT, name TEXT, id TEXT, location TEXT, site TEXT, type TEXT, properties map<TEXT,TEXT>, row_id timeuuid PRIMARY KEY (partner_id,site,location,id));

CREATE TABLE measurement_by_date (sensor_id TEXT, measured_date date, measured timestamp, measure TEXT, text_value TEXT, double_value double, row_id timeuuid PRIMARY KEY ((sensor_id, date),timestamp,measure)) WITH CLUSTERING ORDER BY (timestamp DESC, measure ASC);

