using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace PicaNet.Data
{
    public class Kupac
    {
        public Kupac()
        {
            Narudzbine = new List<Narudzbina>();
        }
        public Guid Id { get; set; }
        public Guid? StoreId { get; set; }
        [Required]
        public string Ime { get; set; }
        [Required]
        public string Prezime { get; set; }
        public string PunoIme { get { return Ime + " " + Prezime; } }
        public string Telefon { get; set; }
        public string Email { get; set; }
        public string Ulica { get; set; }
        public string Grad { get; set; }
        public string Stanje { get; set; }
        public string Drzava { get; set; }
        public string Zip { get; set; }
        public List<Narudzbina> Narudzbine { get; set; }
    }
}
