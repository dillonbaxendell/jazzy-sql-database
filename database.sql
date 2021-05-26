--CREATE Artist table
CREATE TABLE "artist" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80),
"birthdate" DATE
);


--CREATE Song table
CREATE TABLE "song" (
"id" SERIAL PRIMARY KEY,
"title" VARCHAR(255),
"length" VARCHAR(10),
"released" DATE
);


--INSERT artistList
INSERT INTO "artist" ("name", "birthdate")
VALUES ('Ella Fitzgerald', '04-25-1917');

INSERT INTO "artist" ("name", "birthdate")
VALUES ('Dave Brubeck', '12-06-1920');

INSERT INTO "artist" ("name", "birthdate")
VALUES ('Miles Davis', '05-26-1926');

INSERT INTO "artist" ("name", "birthdate")
VALUES ('Esperanza Spalding', '10-18-1984');


--INSERT songList
INSERT INTO "song" ("title", "length", "released")
VALUES ('Take Five', '5:24', '1959-09-29');

INSERT INTO "song" ("title", "length", "released")
VALUES ('So What', '9:22', '1959-08-17');

INSERT INTO "song" ("title", "length", "released")
VALUES ('Black Gold', '5:17', '2012-02-01');