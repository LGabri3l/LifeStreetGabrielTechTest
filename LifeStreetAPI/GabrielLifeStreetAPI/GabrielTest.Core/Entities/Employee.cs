using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GabrielTest.Core.Entities
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string Position { get; set; }
        public DateTime StartDate { get; set; }
        public string EmpAddress { get; set; }
        public string EmpPhone { get; set; }
        public DateTime EmpDateOfBirth { get; set; }
        //public DateTime CreateDate { get; set; }
        //public EmployeeDetails employeeDetails { get; set; }
    }
}
