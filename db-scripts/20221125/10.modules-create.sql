CREATE TABLE `modules`(
    `modules_id` INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `program_id` INT(11) NOT NULL,
    FOREIGN KEY(`program_id`) REFERENCES `programme`(`programme_id`),
    `name` VARCHAR(255) NOT NULL,
    `duration` INT(5) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(), 
    `deleted_at` timestamp NULL, 
    `created_by` int(11) DEFAULT 0 ,
    `updated_by` int(11) DEFAULT 0,
    `deleted_by` int(11) DEFAULT NULL);