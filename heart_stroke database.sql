CREATE TABLE heart_rate (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  gender TEXT,
  height INTEGER,
  bmi REAL,
  birthday DATE,
  heart_rate INTEGER,
  date DATE,
  time TIME
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  gender TEXT,
  height INTEGER,
  bmi REAL,
  birthday DATE
);

CREATE TABLE sleep (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  date DATE,
  deep_sleep_time INTEGER,
  shallow_sleep_time INTEGER,
  wake_time INTEGER,
  start TIME,
  stop TIME,
  rem_time INTEGER,
  naps INTEGER
);

CREATE TABLE activity (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  date DATE,
  steps INTEGER,
  distance REAL,
  run_distance REAL,
  calories INTEGER
);
