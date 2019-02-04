using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicaNet.Data
{
   public class Proizvod
    {
        public int Id { get; set; }
        public string Tip { get; set; }
        public string Ime { get; set; }
        public string Opis { get; set; }
        public string Slika { get; set; }
        public bool ImaOpcije { get; set; }
        public bool Veganski { get; set; }
        public bool SaParadajzSosom { get; set; }
        public string VelicineIds { get; set; }
    }
}
