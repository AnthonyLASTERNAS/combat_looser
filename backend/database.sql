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
        `imageLink` VARCHAR(150),
        `webLink` VARCHAR(150),
        `order` VARCHAR(80)
    ) ENGINE = InnoDB;

INSERT INTO
    slides (
        `title`,
        `src`,
        `alt`,
        `imageLink`,
        `webLink`,
        `order`
    )
VALUES (
        "Projet Fil Rouge",
        "/src/assets/Battle_fight.png",
        "jeu de combat",
        "",
        "https://github.com/AnthonyLASTERNAS/jeu_de_combat",
        "one"
    ), (
        "Mon Git Hub",
        "/src/assets/Github_logo.jpg",
        "Git Hub",
        "",
        "https://github.com/AnthonyLASTERNAS",
        "two"
    ), (
        "Mon Linkedin",
        "/src/assets/Linkedin.png",
        "Linkedin",
        "",
        "https://www.linkedin.com/in/anthony-lasternas-208379269/",
        "three"
    ), (
        "Mes Badges",
        "/src/assets/Badges.jpg",
        "Mes Badges",
        "/src/assets/mes_badges.png",
        "",
        "four"
    ), (
        "Projet 2 en équipe",
        "/src/assets/nutridrive.jpg",
        "Projet 2",
        "",
        "https://nutri-drive.vercel.app/",
        "five"
    ), (
        "Projet 3 en équipe",
        "/src/assets/afac.jpg",
        "Projet 3",
        "/src/assets/afac.jpg",
        "",
        "six"
    ), (
        "Hackathon en équipe",
        "/src/assets/Hackathon.jpg",
        "Hackathon",
        "",
        "https://github.com/AnthonyLASTERNAS/Hackathon2",
        "seven"
    ), (
        "Zone 51 des Projets",
        "/src/assets/close.jpg",
        "en construction",
        "/src/assets/Star_loose.png",
        "",
        "eight"
    ), (
        "Mon Talent",
        "/src/assets/Youtube.png",
        "youtube",
        "",
        "https://www.youtube.com/@calouchedeno8771",
        "nine"
    );