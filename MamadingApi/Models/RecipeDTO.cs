using System;
using System.ComponentModel.DataAnnotations;

namespace MamadingApi.Models
{
    public class RecipeDTO
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Method { get; set; }
        public DateTime Date { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
    }

    
}