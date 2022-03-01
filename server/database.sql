-- create a databse
CREATE DATABASE pernstack;

-- after this type \c on the cmd

-- create a table
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);