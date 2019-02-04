using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicaNet.Data
{
    public class Narudzbina
    {
        public Narudzbina()
        {
            ProizvodiNarudzbine = new List<ProizvodNarudzbine>();
        }
        public long Id { get; set; }
        public Guid? StoreId { get; set; }
        public Guid KupacId { get; set; }
        public int StatusNarudzbineId { get; set; }
        public DateTime DatumNarudzbine { get; set; }
        public DateTime? DatumIsporuke { get; set; }
        public decimal CenaIsporuke { get; set; }
        public decimal UkupnoProizvoda { get; set; }
        public string Telefon { get; set; }
        public string UlicaDostave { get; set; }
        public string GradDostave { get; set; }
        public string DrzavaDostave { get; set; }
        public string ZipDostave { get; set; }

        public Kupac Kupac { get; set; }
        public List<ProizvodNarudzbine> ProizvodiNarudzbine { get; set; }
        public StatusNarudzbine Status { get; set; }
    }
}
