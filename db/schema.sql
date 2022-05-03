-- Establish database --
DROP DATABASE IF EXISTS employer_db;
CREATE DATABASE employer_db;

USE employer_db;

-- Create tables --
CREATE TABLE department(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY NOT NULL,
    department_name VARCHAR(30)
);

CREATE TABLE roles(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- SHOW TABLES;

-- DESCRIBE department;

-- DESCRIBE roles;

-- DESCRIBE employee;