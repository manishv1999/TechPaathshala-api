CREATE TABLE `otp` (
  `otp_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `email` varchar(50) NOT NULL,
  `otp_token` varchar(5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);
