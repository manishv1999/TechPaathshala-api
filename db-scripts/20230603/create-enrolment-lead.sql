CREATE TABLE `enrolment_lead` (
  `enrollment_lead_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(75) NOT NULL,
  `contact_no` VARCHAR(12) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `program` VARCHAR(100) NOT NULL,
  `mode` ENUM('Online', 'Offline') NOT NULL DEFAULT 0 ,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp DEFAULT NULL ON UPDATE current_timestamp()
)