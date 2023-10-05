using System.Linq;
using System.Collections;
using System.Threading.Tasks;
using System.Collections.Generic;
using GabrielTest.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using GabrielTest.Infrastructure.Data;
using GabrielTest.Core.Entities;

namespace GabrielTest.Infrastructure.Repocitories
{
    public class EmployeeRepository : IEmployee
    {
        private readonly AppDBContext _context;

        public EmployeeRepository(AppDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable> GetAllEmployees()
        {

            var getallemployees = from e in _context.Employee
                                      join ed in _context.EmployeeDetail on e.EmployeeID equals ed.EmployeeID                                      
                                  select new
                                  {
                                      e.EmployeeName,
                                      e.StartDate,
                                      ed.EmpAddress,
                                      e.Position,
                                      ed.EmpPhone,
                                      ed.EmpDateOfBirth

                                  };
            return await getallemployees.ToListAsync();

        }
              

        public async Task InsertEmployee(Employee employee)
        {

            _context.Database.ExecuteSqlRaw("SPCreateEmplyee {0},{1},{2},{3},{4},{5}", employee.EmployeeName, employee.StartDate, employee.EmpAddress, employee.Position, employee.EmpPhone, employee.EmpDateOfBirth);
             await _context.SaveChangesAsync();
            
        }

        public async Task UpdateEmployee(Employee employee)
        {
            _context.Database.ExecuteSqlRaw("SPUpdateEmplyee {0},{1},{2},{3},{4},{5},{6}", employee.EmployeeID, employee.EmployeeName, employee.StartDate, employee.EmpAddress, employee.Position, employee.EmpPhone, employee.EmpDateOfBirth);
            await _context.SaveChangesAsync();
        }
    }
}
