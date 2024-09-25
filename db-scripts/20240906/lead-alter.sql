SELECT DISTINCT currently_doing FROM `lead` WHERE currently_doing NOT IN ('Student','Fresher','Working Professional - Technical','Working Professional - Non Technical','Other');


SELECT count(1) FROM `lead` WHERE currently_doing IN ('Working Professional-Technical','Working Professional Non-Technical');

SELECT * 
FROM `lead` 
WHERE currently_doing NOT IN ('Student','Fresher','Working Professional - Technical','Working Professional - Non Technical','Other');



UPDATE `lead` 
SET currently_doing = null 
WHERE `lead_id` = (`lead_ids`);


UPDATE `lead` 
SET currently_doing = 'Working Professional - Technical' 
WHERE `lead_id` = (`lead_ids`);

ALTER TABLE `lead` 
MODIFY COLUMN currently_doing ENUM('Student','Fresher','Working Professional - Technical','Working Professional - Non Technical','Other');
