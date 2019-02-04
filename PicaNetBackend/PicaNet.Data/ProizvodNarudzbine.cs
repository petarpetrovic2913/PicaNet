using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicaNet.Data
{
    public class ProizvodNarudzbine
    {
        public ProizvodNarudzbine()
        {
            Opcije = new List<OpcijaProizvodaNarudzbine>();
        }
        public long Id { get; set; }
        public Guid? StoreId { get; set; }
        public long NarudzbinaId { get; set; }
        public int ProizvodId { get; set; }
        public int VelicinaProizvodaId { get; set; }
        public int Kolicina { get; set; }
        public decimal CenaJedinice { get; set; }
        public decimal Cena { get; set; }
        public string Instrukcije { get; set; }

        public List<OpcijaProizvodaNarudzbine> Opcije { get; set; }
        public Proizvod Proizvod { get; set; }
        public Narudzbina Narudzbina { get; set; }
        public VelicinaProizvoda Velicina { get; set; }
    }
}
