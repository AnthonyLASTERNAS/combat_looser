CREATE TABLE
    item (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE
    users (
        id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        role INT NOT NULL DEFAULT (0),
        created_at DATETIME NOT NULL DEFAULT NOW()
    ) ENGINE = InnoDB;

INSERT INTO users (email, password) VALUES
("toto@toto.com", "toto"),
("tata@tata.com", "tata");
