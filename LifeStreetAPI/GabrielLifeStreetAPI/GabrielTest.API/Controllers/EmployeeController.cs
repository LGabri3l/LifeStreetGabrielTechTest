using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GabrielTest.Core.Entities;
using GabrielTest.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GabrielTest.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployee _employeeRepository;

        public EmployeeController (IEmployee employee)
        {
            _employeeRepository = employee;
        }

        //[Route("GetEmployees")]
        [HttpGet]
        public async Task<IActionResult> GetAllEmployee()
        {
            var result = await _employeeRepository.GetAllEmployees();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Employee employee)
        {
            await _employeeRepository.InsertEmployee(employee);
            return Ok(employee);
        }


        [HttpPut]
        public async Task<IActionResult> Put(Employee employee)
        {
            await _employeeRepository.UpdateEmployee(employee);
            return Ok(employee);
        }
    }
}
