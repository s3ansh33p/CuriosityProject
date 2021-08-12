-- Sean McGinty <newfolderlocation@gmail.com>

CREATE DATABASE IF NOT EXISTS 7c_db;
USE 7c_db;

CREATE TABLE IF NOT EXISTS users (
    uuid        int(8) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username    text(16) NOT NULL,
    pass        text(128) NOT NULL,
    salt        text(16) NOT NULL,
    isAdmin     tinyint(1) NOT NULL DEFAULT 0,
    added       timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS 7cs (
    id          int(1) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    7cName      text(16) NOT NULL
);

CREATE TABLE IF NOT EXISTS stats (
    id          int(8) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    uuid        int(8) NOT NULL,
    7c          int(1) NOT NULL DEFAULT 0,
    val         int(2) NOT NULL,
    added       timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS updates (
    id          int(8) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    uuid        int(8) NOT NULL,
    val         text(64) NOT NULL,
    added       timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
