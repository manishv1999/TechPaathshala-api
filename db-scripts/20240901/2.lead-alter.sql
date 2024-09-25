ALTER TABLE `lead`
ADD COLUMN verified INT DEFAULT 0;

UPDATE lead
SET verified = 1;