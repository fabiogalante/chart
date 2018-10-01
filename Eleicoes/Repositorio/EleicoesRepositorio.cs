using System.Collections.Generic;
using System.Linq;
using Eleicoes.Models;
using Microsoft.EntityFrameworkCore;

namespace Eleicoes.Repositorio
{

    public class EleicoesRepositorio
    {
        private readonly AprendaDotNetContext _context = new AprendaDotNetContext();

        //To get the list of all teams from database  
        public IEnumerable<Candidatos2018> ObterTodos()
        {
            try
            {
                return _context.Candidatos2018.ToList();
            }
            catch
            {
                throw;
            }
        }


        //To update the vote count of a team by one  
        public int RecordVote(Candidatos2018 candidato)
        {
            try
            {

                _context.Database.ExecuteSqlCommand("update Candidatos2018 set QuantidadeVotos = QuantidadeVotos + 1 where CandidatoId = {0}", parameters: candidato.CandidatoId);

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To get the total votes count   
        public int GetTotalVoteCount()
        {
            try
            {
                return _context.Candidatos2018.Sum(t => t.QuantidadeVotos);
            }
            catch
            {
                throw;
            }
        }

    }
}
