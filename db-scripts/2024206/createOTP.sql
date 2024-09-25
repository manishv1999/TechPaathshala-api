CREATE TABLE `otps` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `phone` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT  current_timestamp() ON UPDATE current_timestamp(),
);