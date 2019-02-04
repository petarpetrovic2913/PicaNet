using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicaNet.Data
{
    public class OpcijaProizvodaNarudzbine
    {
        public long Id { get; set; }
        public Guid? StoreId { get; set; }
        public long ProizvodNarudzbineId { get; set; }
        public int OpcijaProizvodaId { get; set; }
        public int Kolicina { get; set; }
        public decimal Cena { get; set; }

        public ProizvodNarudzbine ProizvodNarudzbine { get; set; }
        public OpcijaProizvoda OpcijaProizvoda { get; set; }

    }
}
