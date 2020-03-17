using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {
            //sending a message to our list query
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            //when we create the query class for id it will have access to the Id from the route parameter that we get from hitting the particular method.
            return await _mediator.Send(new Details.Query { Id = id });
        }

        //Method to create a new activity
        [HttpPost] //no need for route params
        public async Task<ActionResult<Unit>> Create(Create.Command command) // our new activityset up in the body of the request
        {
            return await _mediator.Send(command);

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
                return await _mediator.Send(new Delete.Command{Id = id});
        }
    }
}