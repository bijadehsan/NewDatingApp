using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()  //Unauthorized :401
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<User> GetNotFound()  //Not Found 404
        {
            var thing = _context.Users.Find(-1);
            if (thing == null) return NotFound();
            return Ok(thing);
        }


        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()  //500
        {
            var thing = _context.Users.Find(-1);
            var ThingToReturn = thing.ToString();
            return ThingToReturn;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()  //badrequest 400
        {
            return BadRequest("This was not a good request");
        }
    }
}
