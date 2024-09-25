CREATE TABLE `lecture` (
  `lecture_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` varchar(255) NOT NULL,
  `programme_id` int(11) NOT NULL,
  FOREIGN KEY (`programme_id`) REFERENCES `programme` (`programme_id`),
  `module_id` int(11) NOT NULL,
  FOREIGN KEY (`module_id`) REFERENCES `modules` (`modules_id`),
  `is_extra_lectuer` boolean NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `start_at` datetime NOT NULL,
  `ends_on` datetime NOT NULL,
  `status` enum('coming_soon','live','completed') NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL
)