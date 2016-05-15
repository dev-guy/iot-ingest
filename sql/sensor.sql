CREATE KEYSPACE sensor with 
durable_writes=true 
and REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE sensor;

CREATE TABLE location (
  partner_id TEXT,
  id TEXT,
  name TEXT,
  time_zone TEXT,
  latitude float,
  longitude float,
  temperature_scale text,
  zip_code TEXT,
  PRIMARY KEY (partner_id, id)
  );

CREATE TABLE hub (
  partner_id TEXT,
  id text,
  name text,
  ip_address inet,
  type text,
  manufacturer text,
  location_id TEXT,
  PRIMARY KEY (partner_id, id)
);

CREATE TABLE device (
  partner_id TEXT,
  hub_id TEXT,
  id TEXT,
  name TEXT,
  label TEXT,
  displayName TEXT,
  primary key (hub_id, id)
);

CREATE TABLE measurement (
  partner_id TEXT,

  device_id TEXT,
  event_id TEXT,

  measured timestamp,
  measured_date date,
  name TEXT,

  value_type TEXT,
  text_value TEXT,
  boolean_value boolean,
  double_value double,
  float_value float,
  int_value int,
  long_value bigint,
  xyz_value tuple <int,int,int>,

  PRIMARY KEY ( (device_id, name, measured_date), measured, event_id)
)
with clustering order by (measured DESC);

CREATE TABLE event (
  partner_id TEXT,
  device_id TEXT,
  hub_id TEXT,
  location_id TEXT,
  id TEXT,

  name TEXT,
  description TEXT,
  description_text TEXT,

  received timestamp,
  received_date date,

  data map<text, text>,

  value_type TEXT,
  value_unit TEXT,

  text_value TEXT,
  boolean_value boolean,
  double_value double,
  int_value int,
  long_value bigint,
  xyz_value tuple <int,int,int>,

  is_digital boolean,
  is_physical boolean,
  is_state_change boolean,

  PRIMARY KEY ( (hub_id, device_id, name, received_date), received, id )
)
with clustering order by (received DESC);

