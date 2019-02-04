using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PicaNet.Data;

namespace PicaNet.Web.Controllers
{
    public class KupciController : ApiController
    {
        private PicaNetDbContext db = new PicaNetDbContext();

        // GET: api/Kupci
        public IQueryable<Kupac> GetKupci()
        {
            return db.Kupci;
        }

        // GET: api/Kupci/5
        [ResponseType(typeof(Kupac))]
        public IHttpActionResult GetKupac(Guid id)
        {
            Kupac kupac = db.Kupci.Find(id);
            if (kupac == null)
            {
                return NotFound();
            }

            return Ok(kupac);
        }

        // PUT: api/Kupci/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutKupac(Guid id, Kupac kupac)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != kupac.Id)
            {
                return BadRequest();
            }

            db.Entry(kupac).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KupacExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Kupci
        [ResponseType(typeof(Kupac))]
        public IHttpActionResult PostKupac(Kupac kupac)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Kupci.Add(kupac);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = kupac.Id }, kupac);
        }

        // DELETE: api/Kupci/5
        [ResponseType(typeof(Kupac))]
        public IHttpActionResult DeleteKupac(Guid id)
        {
            Kupac kupac = db.Kupci.Find(id);
            if (kupac == null)
            {
                return NotFound();
            }

            db.Kupci.Remove(kupac);
            db.SaveChanges();

            return Ok(kupac);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool KupacExists(Guid id)
        {
            return db.Kupci.Count(e => e.Id == id) > 0;
        }
    }
}