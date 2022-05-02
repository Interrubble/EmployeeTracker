INSERT INTO department (id, department_name) VALUES (1, "Chris's Department");

INSERT INTO roles (id, title, salary, department_id) VALUES (1, "Captain", 1000000.00, 1), (2, "Leuitenant", 100000.00, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, "Chris","DeLaGarza",1, 1), (2, "Nate","Ginn",2, 1);