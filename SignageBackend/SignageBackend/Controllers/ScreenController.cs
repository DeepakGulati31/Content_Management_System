using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignageBackend.BAL.Infrastructure;
using SignageBackend.BAL.ViewModels;
using SignageBackend.Common.Utilites;
using System.Net;

namespace SignageBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScreenController : ControllerBase
    {

        private readonly IScreen _screen;
        public ScreenController(IScreen screen)
        {
            _screen = screen;
        }

        [HttpPost("CreateOrUpdate")]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public IActionResult CreateOrUpdate([FromBody] ScreenView screenView)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (screenView != null)
            {
                _screen.CreateOrUpdate(screenView);
            }

            return Ok(new ApiResponse { Status = "User Added Success", Code = 200 });
        }

        [HttpGet("GetById")]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _screen.GetById(id);
            if (result == null)
            {
                return Ok(new ApiResponse { Status = "No Record Found", Code = 200 });
            }
            return Ok(result);
        }

        [HttpGet("GetAll")]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public async Task<IActionResult> GetAll(string? searchTerm = "", string sortBy = "Name",
            bool sortDescending = false, int pageNumber = 1, int pageSize = 10)
        {
            var result = await _screen.GetAll(searchTerm, sortBy, sortDescending, pageNumber, pageSize);
            if (result == null)
            {
                return Ok(new ApiResponse { Status = "No Record Found", Code = 200 });
            }
            return Ok(result);
        }

        [HttpGet("DeleteById")]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public async Task<IActionResult> DeleteById(int id)
        {
            var result = await _screen.DeleteById(id);
            if (result == null)
            {
                return Ok(new ApiResponse { Status = "No Record Deleted", Code = 200 });
            }
            return Ok(result);
        }
    }
}
