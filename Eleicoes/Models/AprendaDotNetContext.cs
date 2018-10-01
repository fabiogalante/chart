using Microsoft.EntityFrameworkCore;

namespace Eleicoes.Models
{
    public partial class AprendaDotNetContext : DbContext
    {
        public AprendaDotNetContext()
        {
        }

        public AprendaDotNetContext(DbContextOptions<AprendaDotNetContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Candidatos2018> Candidatos2018 { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\mssqllocaldb;Initial Catalog=AprendaDotNet;Integrated Security=False;User Id=sa;Password=sf530064$;MultipleActiveResultSets=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidatos2018>(entity =>
            {
                entity.HasKey(e => e.CandidatoId);

                entity.Property(e => e.CandidatoNome)
                    .IsRequired()
                    .HasMaxLength(80);
            });
        }
    }
}
