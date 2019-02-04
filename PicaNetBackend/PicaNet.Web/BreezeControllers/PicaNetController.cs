using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Breeze.WebApi2;
using Breeze.ContextProvider.EF6;
using PicaNet.Data;
using Newtonsoft.Json.Linq;
using Breeze.ContextProvider;
using Newtonsoft.Json;

namespace PicaNet.Web.BreezeControllers
{
    [BreezeController]
    public class PicaNetController : ApiController
    {
        EFContextProvider<PicaNetDbContext> _contextProvider = new EFContextProvider<PicaNetDbContext>();

        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject bundle)
        {
            return _contextProvider.SaveChanges(bundle);
        }

        [HttpGet]
        public IQueryable<Kupac> Kupci()
        {
           
            return _contextProvider.Context.Kupci;
        }

        [HttpGet]
        public IQueryable<Proizvod> Proizvodi()
        {
            return _contextProvider.Context.Proizvodi;
        }

        [HttpGet]
        public IQueryable<Narudzbina> Narudzbine()
        {
            return _contextProvider.Context.Narudzbine;
        }

        //[HttpGet]
        //public object Lookups() {

        //    return JsonConvert.SerializeObject(new
        //    {
        //        StatusiNarudzbina = _contextProvider.Context.StatusiNarudzbina,
        //        OpcijaProizvoda = _contextProvider.Context.OpcijeProizvoda,
        //        VelicinaProizvoda = _contextProvider.Context.VelicineProizvoda
        //    });
        //}

        [HttpGet]
        public IQueryable<StatusNarudzbine> StatusiNarudzbina() {
            return _contextProvider.Context.StatusiNarudzbina;
        }

        [HttpGet]
        public IQueryable<OpcijaProizvoda> OpcijeProizvoda()
        {
            return _contextProvider.Context.OpcijeProizvoda;
        }

        [HttpGet]
        public IQueryable<VelicinaProizvoda> VelicineProizvoda()
        {
            return _contextProvider.Context.VelicineProizvoda;
        }





    }
}
