
IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'SPUpdateEmplyee')
BEGIN
   DROP PROCEDURE SPCreateEmplyee
   PRINT '<<< DROPPED PROCEDURE  >>>'
END
GO

Alter PROCEDURE SPUpdateEmplyee
(
@EmployeeID INT,
@EmployeeName VARCHAR(50),
@StartDate DATETIME,
@Address VARCHAR(50),
@position VARCHAR(50),
@Phone VARCHAR(50),
@Birthday DATETIME
)
AS 

BEGIN

DECLARE @Error_Message NVARCHAR(2048), @Error_Severity INT,  
		@Error_State INT

IF EXISTS (SELECT A.* 
			FROM Employee A
			 	inner join EmployeeDetail B ON A.EmployeeID = B.EmployeeID
			WHERE B.EmployeeID = @EmployeeID and A.EmployeeID = @EmployeeID )

 	BEGIN
			
		BEGIN TRANSACTION

			update Employee
				set EmployeeName = @EmployeeName, 
					StartDate = @StartDate, 
					Position = @position
				Where EmployeeID = @EmployeeID 
				
				update employeeDetail
				set EmpAddress = @Address, 
					EmpPhone = @Phone, 
					EmpDateOfBirth = @Birthday
				where EmployeeID = @EmployeeID

		COMMIT 
	END
	
ELSE

	BEGIN  
		SELECT	@Error_Message = 'The record does not exist' 			
		RAISERROR(@Error_Message,@Error_Severity, @Error_State )
	END   
END