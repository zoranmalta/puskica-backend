-- DROP TABLE IF EXISTS answer;
-- DROP TABLE IF EXISTS question;

TRUNCATE TABLE answer 
CASCADE;
TRUNCATE TABLE question 
CASCADE;


INSERT INTO question (content) VALUES ( 'dummy1');
INSERT INTO question (content) VALUES ( 'dummy2');