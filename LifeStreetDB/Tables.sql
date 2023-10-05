
CREATE TABLE Employee (
EmployeeID INT PRIMARY KEY IDENTITY (1,1),
EmployeeName VARCHAR(50),
Position VARCHAR(50),
StartDate DATETIME,
CreateDate DATETIME
);

CREATE TABLE EmployeeDetail
(
EmpDetailID INT PRIMARY KEY IDENTITY (1,1),
EmpAddress VARCHAR(50),
EmpPhone VARCHAR(50),
EmpDateOfBirth DATETIME,
EmployeeID INT FOREIGN KEY (EmployeeID) REFERENCES Employee (EmployeeID),
CreateDate DATETIME
);

