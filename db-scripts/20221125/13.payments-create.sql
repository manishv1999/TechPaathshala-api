CREATE TABLE `payment` (
  `payment_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `order_id` int(11) NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  `razorpay_payment_id` varchar(30) NOT NULL,
  `payment_status` enum('SUCCESS','FAILED','PENDING') NOT NULL,
  `raw_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`raw_json`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);