using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PicaNet.Data
{
    public class OpcijaProizvoda
    {
        public int Id { get; set; }
        public string Tip { get; set; }
        public string Ime { get; set; }
        public int Faktor { get; set; }
        public bool OpcijaPice { get; set; }
        public bool OpcijeSalate { get; set; }
    }
}
