import React from 'react';
import InProgressCard1 from './InProgressCard1';
import InProgressCard2 from './InProgressCard2';
import CustomerTickets from './CustomerTickets';

const Hero = ({ tickets, setTickets, taskStatusTickets, setTaskStatusTickets, resolvedTickets, setResolvedTickets }) => {

  const handleAddToTaskStatus=(ticketId) => {
    const ticketToAdd=tickets.find(t=>t.id===ticketId);
    if(ticketToAdd){
      setTaskStatusTickets(prev=>[...prev,ticketToAdd]);
      setTickets(prev => prev.filter(t=>t.id!==ticketId));
      alert(`Ticket "${ticketToAdd.title}" added to Task Status!`);
    }
  };
const handleComplete=(ticketId)=>{
  const completedTicket=taskStatusTickets.find(t=>t.id===ticketId);
  if(completedTicket){
    alert(`Ticket "${completedTicket.title}" completed!`);
    setTaskStatusTickets(prev => prev.filter(t => t.id !== ticketId));
    setResolvedTickets(prev => [...prev, completedTicket]);
  }
};


  return (
    <div className=" mx-auto max-w-[1440px] mt-[150px] p-4">
      
      {/* uporer Cards */}
<div className="flex flex-row justify-center gap-8 mb-10">
  <InProgressCard1 count={taskStatusTickets.length} />
  <InProgressCard2 count={resolvedTickets.length} /> 
</div>

<div className="p-4 max-h-full grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
  <h5 className="text-xl mb-2">Customer Tickets</h5>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {tickets.map(ticket => (
      <div
        key={ticket.id}
        onClick={() => handleAddToTaskStatus(ticket.id)}
        className="cursor-pointer"
      >
        <CustomerTickets ticket={ticket} />
      </div>
    ))}
  </div>
</div>

<div>
  <h5 className="text-xl mb-2">Task Status</h5>
  {taskStatusTickets.length === 0 ? (
    <p>No tasks yet.</p>
  ) : (
    taskStatusTickets.map(ticket => (
      <div
        key={ticket.id}
        className="flex justify-between items-center mb-2 border p-2 rounded"
      >
        <span>{ticket.title}</span>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded text-sm"
          onClick={() => handleComplete(ticket.id)}
        >
          Complete
        </button>
      </div>
    ))
  )}
</div>
        
      </div>
    </div>
  );
};


export default Hero;
