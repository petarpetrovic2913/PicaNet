using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicaNet.Data
{
   public class VelicinaProizvoda
    {
        public int Id { get; set; }
        public string Tip { get; set; }
        public string Ime { get; set; }
        public decimal Cena { get; set; }
        public decimal? PremiumCena { get; set; }
        public decimal? SnizenaCena { get; set; }
        public bool SadrziGluten { get; set; }
    }
}
