ALTER TABLE campaign_lead
ADD cta varchar(50) 
AFTER pincode;

ALTER TABLE campaign_lead 
MODIFY COLUMN pincode int null;
