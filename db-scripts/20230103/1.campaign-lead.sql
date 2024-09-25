CREATE TABLE `campaign_lead` (
  `campaign_lead_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `contact_no` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `pincode` VARCHAR(55) NOT NULL DEFAULT 0,
  `utm_campaign` VARCHAR(255) NOT NULL,
  `utm_source` VARCHAR(255) NOT NULL,
  `raw_json` JSON,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp DEFAULT NULL ON UPDATE current_timestamp()
)