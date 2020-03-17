using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                //gET ACTIVITY
                var activity = await _context.Activities.FindAsync(request.Id);
                if (activity == null)
                    throw new Exception("Could not find activity");
                _context.Remove(activity);
                //We want this to return a boolean
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value; // will return a 200 ok response

                throw new Exception("Problem saving changes");

            }
        }
    }
}