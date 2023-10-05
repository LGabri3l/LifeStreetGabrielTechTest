using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace GabrielTest.Core.Entities
{
    public class EmployeeDetails
    {
        [Key]
        public int EmpDetailID { get; set; }
        public string EmpAddress { get; set; }
        public string EmpPhone { get; set; }
        public DateTime EmpDateOfBirth { get; set; }
        public int EmployeeID { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
