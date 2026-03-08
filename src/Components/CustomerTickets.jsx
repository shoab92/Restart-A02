import React from 'react';


const getStatusMap={
    "In-Progress":"bg-yellow-100 text-yellow-700",
    "Resolved":"bg-green-100 text-green-700",
    "Open":"bg-red-100 text-red-700"
};


const CustomerTickets = ({ticket}) => {
    return (
    <div className="w-full bg-white p-4 shadow-md border-2 border-gray-200 rounded-lg transition-all duration-300 hover:scale-[1.001] hover:shadow-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
        <h2 className="text-SM font-semibold text-gray-800">
{ticket.title}
        </h2>
        <span className={`px-2 py-1 text-xs ${getStatusMap[ticket.status] || " font-medium bg-yellow-100 text-yellow-700 rounded-full"}`}>
{ticket.status}     
        </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">
{ticket.description}
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
            <span className="font-medium">Ticket #:</span>
{ticket.id}
        </div>


        <div>
            <span className="font-medium">Priority:</span>
            <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-700 rounded">
{ticket.priority}
            </span>
        </div>
        <div>
            <span className="font-medium">Customer:</span> 
{ticket.customer}
        </div>

    <div>
            <span className="font-medium">Date:</span>
{ticket.createdAt}
        </div>

        </div>

    </div>
    );
};

export default CustomerTickets;
