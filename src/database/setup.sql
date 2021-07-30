-- Sean McGinty <newfolderlocation@gmail.com>

CREATE DATABASE IF NOT EXISTS 7c_db;

USE 7c_db;

CREATE TABLE IF NOT EXISTS users (
 uuid     int(8) NOT NULL PRIMARY KEY,
 username text(16),
 pass     text(64),
 isAdmin  tinyint(1) NOT NULL DEFAULT 0
);