
IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'SPCreateEmplyee')
BEGIN
   DROP PROCEDURE SPCreateEmplyee
   PRINT '<<< DROPPED PROCEDURE SPCreateEmplyee >>>'
END
GO

CREATE PROCEDURE SPCreateEmplyee
(
@EmployeeName VARCHAR(50),
@StartDate DATETIME,
@Address VARCHAR(50),
@position VARCHAR(50),
@Phone VARCHAR(50),
@Birthday DATETIME
)
AS 

BEGIN

DECLARE @EmployeeID INT,  @Error_Message NVARCHAR(2048), @Error_Severity INT,  
		@Error_State INT, @ROWCount INT

IF EXISTS (SELECT A.* 
			FROM EmployeeDetail A
			 	inner join Employee B ON A.EmployeeID = B.EmployeeID
			WHERE B.EmployeeName = @EmployeeName)

 
	BEGIN  
		SELECT	@Error_Message = 'Already exist records in the database' 			
		RAISERROR(@Error_Message,@Error_Severity, @Error_State )
	END   

ELSE

	BEGIN
			
		BEGIN TRANSACTION

			INSERT INTO Employee
			VALUES(@EmployeeName, @position,@StartDate,GETDATE());

			SELECT TOP 1 @EmployeeID = EmployeeID
			FROM Employee
			ORDER BY EmployeeID DESC

			INSERT INTO EmployeeDetail 
			VALUES (@Address,@Phone, @Birthday, @EmployeeID, GETDATE());

			COMMIT TRANSACTION

			IF @@TRANCOUNT >0
			BEGIN

				ROLLBACK TRANSACTION
				SELECT @Error_Message = 'Error inserting records'
				RAISERROR(@Error_Message,@Error_Severity, @Error_State )

			END
	END
END