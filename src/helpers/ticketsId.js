import uniqid from 'uniqid';

export const ticketsId = (ticketsList) => {
  return ticketsList.map((ticket) => {
    return { id: uniqid(), ...ticket };
  });
};
