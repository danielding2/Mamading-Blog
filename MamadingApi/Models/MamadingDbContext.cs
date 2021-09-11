using Microsoft.EntityFrameworkCore;

namespace MamadingApi.Models
{
    public class MamadingDbContext : DbContext
    {
        public MamadingDbContext(DbContextOptions<MamadingDbContext> options)
            :base(options)
            {

            }

            public DbSet<Recipe> Recipes { get; set; }
    }
}