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

INSERT INTO
    users (email, password)
VALUES ("toto@toto.com", "toto"), ("tata@tata.com", "tata");

CREATE TABLE
    slides (
        `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
        `title` VARCHAR(80),
        `src` VARCHAR(80),
        `alt` VARCHAR(80),
        `link` VARCHAR(150),
        `order` VARCHAR(80)
    ) ENGINE = InnoDB;

INSERT INTO
    slides (
        `title`,
        `src`,
        `alt`,
        `link`,
        `order`
    )
VALUES (
        "Projet Fil Rouge",
        "/src/assets/Battle_fight.png",
        "jeu de combat",
        "https://github.com/AnthonyLASTERNAS/jeu_de_combat",
        "one"
    ), (
        "Mon Git Hub",
        "/src/assets/Github_logo.jpg",
        "Git Hub",
        "https://github.com/AnthonyLASTERNAS",
        "two"
    );