using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;

namespace PicaNet.Data
{
        public class PicaNetDbContext : DbContext
        {
            public DbSet<Kupac> Kupci { get; set; }
            public DbSet<Narudzbina> Narudzbine { get; set; }
            public DbSet<Proizvod> Proizvodi { get; set; }
            public DbSet<ProizvodNarudzbine> ProizvodiNarudzbine { get; set; }
            public DbSet<OpcijaProizvodaNarudzbine> OpcijeProizvodaNarudzbine { get; set; }
            public DbSet<OpcijaProizvoda> OpcijeProizvoda { get; set; }
            public DbSet<VelicinaProizvoda> VelicineProizvoda { get; set; }
            public DbSet<StatusNarudzbine> StatusiNarudzbina { get; set; }

            protected override void OnModelCreating(DbModelBuilder modelBuilder)
            {
                // Table names match entity names by default (don't pluralize)
                modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
                // Globally disable the convention for cascading deletes
                modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

                modelBuilder.Entity<Kupac>()
                            .Property(c => c.Id) // Client must set the ID.
                            .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
            }
        }
    }

