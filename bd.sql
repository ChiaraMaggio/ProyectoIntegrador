USE proyectointegrador;

CREATE TABLE users(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_lastname VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL,
    user_email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(100) NOT NULL UNIQUE,
    avatar VARCHAR(250),
    created_at DATETIME,
    updated_at DATETIME
);

ALTER TABLE users
ADD follower_id INT UNSIGNED;

ALTER TABLE users
ADD FOREIGN KEY (follower_id) REFERENCES followers (id);

ALTER TABLE users
ADD product_id INT UNSIGNED;

ALTER TABLE users
ADD FOREIGN KEY (product_id) REFERENCES products (id);

ALTER TABLE users
ADD comment_id INT UNSIGNED;

ALTER TABLE users
ADD FOREIGN KEY (comment_id) REFERENCES comments (id);

UPDATE users
SET comment_id = 1
WHERE id = 1;

UPDATE users
SET comment_id = 2
WHERE id = 2;

UPDATE users
SET comment_id = 3
WHERE id = 3;

UPDATE users
SET comment_id = 4
WHERE id = 5;

UPDATE users   /* actualiza el valor de la columna comments del usuario con id = 5 (antes el valor era 4). ¿Cómo almacenar más de un valor para cada usuario en la db? */
SET comment_id = 5
WHERE id = 5;
 
INSERT INTO users (id,user_name,user_lastname,birth_date,user_email,user_password,avatar,created_at,updated_at) VALUES(1,"Hugo","Vaca Guzmán","1990-05-12","hvacaguzman@gmail.com","hvacaguzman","/images/users/VacaGuzman.jpg","2022-06-06","2022-06-06");
INSERT INTO users(id,user_name,user_lastname,birth_date,user_email,user_password,avatar,created_at,updated_at) VALUES(2,"Alberto", "Denham","1995-08-14","adenham@gmail.com","adenham","/images/users/VacaGuzman.jpg","2022-06-06","2022-06-06");
INSERT INTO users(id,user_name,user_lastname,birth_date,user_email,user_password,avatar,created_at,updated_at)VALUES(3,"Petrona", "Maguna","1999-06-17","pmaguna@gmail.com","pmaguna","/images/users/VacaGuzman.jpg","2022-06-06","2022-06-06");
INSERT INTO users(id,user_name,user_lastname,birth_date,user_email,user_password,avatar,created_at,updated_at) VALUES(4,"Olga","Maggio","2000-07-26","omaggio@gmail.com","omaggio","/images/users/VacaGuzman.jpg","2022-06-06","2022-06-06");
INSERT INTO users(id,user_name,user_lastname,birth_date,user_email,user_password,avatar,created_at,updated_at) VALUES(5,"Bernarda","Teperman","1989-04-03","bteperman@gmail.com","bteperman","/images/users/VacaGuzman.jpg","2022-06-06","2022-06-06");

UPDATE users
SET product_id = 1
WHERE id = 1;

UPDATE users
SET product_id = 10
WHERE id = 2;

UPDATE users
SET product_id = 12
WHERE id = 3;

UPDATE users
SET product_id = 5
WHERE id = 4;

CREATE TABLE followers(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE users_followers(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	user_id INT UNSIGNED NOT NULL,
    follower_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (follower_id) REFERENCES followers (id)
);

CREATE TABLE products( 
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    product_description VARCHAR(250) NOT NULL,
    product_image VARCHAR(250),
    franchise VARCHAR(150),
    user_id INT UNSIGNED NOT NULL,
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (1, "Funko Pop Batman","Figura de Batman Funko Pop!","/images/products/funko-batman.jpg","Franquicia: DC",1,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (2, "Funko Pop Spider-Man","Figura de Spider Man Funko Pop!","/images/products/funko-spiderman.jpg", "Franquicia: Marvel",2,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (3,"Funko Pop Homero Simpson","Figura de Homero Simpson Funko Pop!","/images/products/funko-HomeroSimpson.jpg","Franquicia: The Simpsons",3,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (4,"Funko Pop Harry Potter","Figura de Harry Potter Funko Pop!","/images/products/funko-HarryPotter.jpg","Franquicia: Harry Potter",4,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (5,"Funko Pop IT","Figura de IT Funko Pop!","/images/products/funko-it.jpg","Franquicia: Craven",5,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (6,"Funko Pop Wonder Woman","Figura de Wonder Woman Funko Pop!","/images/products/funko-wonderwoman.jpg","Franquicia: DC",1,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (7,"Funko Pop Darth Vader","Figura de Darth Vader Funko Pop!","/images/products/funko-DarthVader.jpg","Franquicia: Start Wars",2,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (8,"Funko Pop Forrest Gump","Figura de Forest Gump Funko Pop!","/images/products/funko-ForestGump.jpg","Franquicia: Landry's, Inc.",3,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (9,"Funko Pop Voldemort","Figura de Voldemort Funko Pop!","/images/products/funko-Voldemort.jpg","Franquicia: Harry Potter",4,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (10,"Funko Pop Winnie The Pooh","Figura de Winnie The Pooh Funko Pop!","/images/products/funko-WinniethePooh.jpg","Franquicia: Disney",5,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (11,"Funko Pop Iron Man","Figura de Iron Man Funko Pop!","/images/products/funko-ironman.jpg","Franquicia: Marvel",1,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (12,"Funko Pop Carl","Figura de Carl Funko Pop!","/images/products/funko-Carl.jpg","Franquicia: Pixar",2,"2022-06-06");
INSERT INTO products(id, product_name, product_description, product_image, franchise, user_id, created_at) VALUES (13,"Funko Pop Mickey Mouse","Figura de Mickey Mouse Funko Pop!","/images/products/funko-mickey.jpg","Franquicia: Disney",3,"2022-06-06");

ALTER TABLE products
ADD comment_id INT UNSIGNED;

ALTER TABLE products
ADD FOREIGN KEY (comment_id) REFERENCES comments (id);

ALTER TABLE products
ADD updated_at DATETIME;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 1;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 2;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 3;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 4;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 5;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 6;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 7;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 8;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 9;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 10;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 11;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 12;

UPDATE products
SET updated_at = "2022-06-06"
WHERE id = 13;

UPDATE products
SET comment_id = 1
WHERE id = 1;

UPDATE products
SET comment_id = 2
WHERE id = 2;

UPDATE products
SET comment_id = 3
WHERE id = 5;

UPDATE products
SET comment_id = 4 
WHERE id = 5;

UPDATE products
SET comment_id = 5
WHERE id = 7;

UPDATE products
SET comment_id = 6
WHERE id = 8;

UPDATE products
SET comment_id = 7
WHERE id = 11;

CREATE TABLE comments(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(300) NOT NULL,
    created_at DATETIME,
    product_id INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);

INSERT INTO comments(id, comment_text, created_at, product_id,user_id) VALUES(default, "Super tierno. El envío fue re rápido. Llegó a los 2 días.","2022-06-06",1,1);
INSERT INTO comments(id, comment_text, created_at, product_id,user_id) VALUES(default, "El vendedor nunca contestó a mi pedido. Tampoco me dio un reembolso.","2022-06-06",2,2);
INSERT INTO comments(id, comment_text, created_at, product_id,user_id) VALUES(default, "Hice compra mayorista y me hizo descuento!! Un genio.","2022-06-06",5,3);
INSERT INTO comments(id, comment_text, created_at, product_id,user_id) VALUES(default, "Holaaa, tenés stock para ya?","2022-06-06",5,5);
INSERT INTO comments(id, comment_text, created_at, product_id,user_id) VALUES(default,"¿Haces envíos internacionales? Soy de España.","2022-06-06",7,5);
INSERT INTO comments(id, comment_text, created_at, product_id,user_id) VALUES(default, "Hice compra mayorista y me hizo descuento!! Un genio.","2022-06-06",8,1);
INSERT INTO comments(id, comment_text, created_at, product_id,user_id) VALUES(default, "Super tierno. El envío fue re rápido. Llegó a los 2 días.","2022-06-06",11,2);

