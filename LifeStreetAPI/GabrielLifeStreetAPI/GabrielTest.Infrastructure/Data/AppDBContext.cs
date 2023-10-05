using GabrielTest.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GabrielTest.Infrastructure.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext()
        { }
        public AppDBContext(DbContextOptions<AppDBContext> option) : base(option)
        { }

        public DbSet<Employee> Employee { get; set; }

        public DbSet<EmployeeDetails> EmployeeDetail { get; set; }
    }
}