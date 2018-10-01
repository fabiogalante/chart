using System.Collections.Generic;
using Eleicoes.Models;
using Eleicoes.Repositorio;
using Microsoft.AspNetCore.Mvc;

namespace Eleicoes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatosController : Controller
    {
        private  readonly  EleicoesRepositorio _repositorio = new EleicoesRepositorio();
        [HttpGet]
        [Route("ObterCandidatos")]
        public IEnumerable<Candidatos2018> ObterCandidatos()
        {
            return _repositorio.ObterTodos();
        }


        [HttpGet]
        [Route("TotalVoto")]
        public int TotalVotes()
        {
            return _repositorio.GetTotalVoteCount();
        }

        [HttpPut]
        [Route("UpdateVoteCount")]
        public int UpdateVoteCount([FromBody] Candidatos2018 candidato)
        {
            return _repositorio.RecordVote(candidato);
        }
    }
}