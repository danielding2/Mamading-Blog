using System;
using System.ComponentModel.DataAnnotations;

namespace MamadingApi.Models
{
    public class Recipe
    {
      
        public int Id { get; set; }
        public string Title { get; set; }
        public string Method { get; set; }
        public DateTime Date { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public string Secret { get; set; }
    }

    //this is a test
}