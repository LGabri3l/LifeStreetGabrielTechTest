using GabrielTest.Core.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GabrielTest.Core.Interfaces
{
    public interface IEmployee
    {
        Task<IEnumerable> GetAllEmployees();
        Task InsertEmployee(Employee employee);
        Task UpdateEmployee(Employee employee);

        //Task InsertEmployee(Project project);
        //Task UpdateEmployee(Project project);
    }
}
