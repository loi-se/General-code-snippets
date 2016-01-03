
/*------------------- 1. General examples:



/* ------inner join */
SELECT
    `city`.`Name`
    , `country`.`Continent`
    , `countrylanguage`.`Language`
FROM
    `world`.`city`
    INNER JOIN `world`.`country` 
        ON (`city`.`CountryCode` = `country`.`Code`)
    INNER JOIN `world`.`countrylanguage` 
        ON (`countrylanguage`.`CountryCode` = `country`.`Code`)
WHERE (`city`.`Name` = 'Den-Haag');


/* ---------------------2. 2jours database */


