using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext //use this to query our db. can script a new db
    { 
        //create constructor
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Value> Values {get;set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
                .HasData(
                    //initialize with some values
                    new Value{
                        Id = 1, 
                        Name= "Value 101"}, 
                        new Value{
                        Id = 2, 
                        Name= "Value 102"},
                       new Value{
                        Id = 3, 
                        Name= "Value 103"}
                    
                );
        }
            // accessible to class its defined in any derived classes from this class
    }
}
