
/*------------------- 1. General examples:



/* ------inner join */
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;



/* ---------------------2.  */


