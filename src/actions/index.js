const UPDATE_SEARCH_ID = 'UPDATE_SEARCH_ID';
const UPDATE_TAB_FILTER = 'UPDATE_TAB_FILTER';
const CHANGE_FILTER = 'CHANGE_FILTER';
const UPDATE_TICKETS = 'UPDATE_TICKETS';
const COMPLETED_LOADING = 'COMPLETED_LOADING';
const UPDATE_TICKETS_COUNTER = 'UPDATE_TICKETS_COUNTER';
const THROW_ERROR = 'THROW_ERROR';

export const updateSearchId = (searchId) => {
  return {
    type: UPDATE_SEARCH_ID,
    payload: searchId,
  };
};
export const updateTabFilter = (newTabFilters) => {
  return {
    type: UPDATE_TAB_FILTER,
    payload: newTabFilters,
  };
};

export const changeFilter = (newFilters) => {
  return {
    type: CHANGE_FILTER,
    payload: newFilters,
  };
};
export const updateTickets = (newTickets) => {
  return {
    type: UPDATE_TICKETS,
    payload: newTickets,
  };
};
export const completedLoading = () => {
  return {
    type: COMPLETED_LOADING,
  };
};
export const updateTicketsCounter = (value) => {
  return {
    type: UPDATE_TICKETS_COUNTER,
    payload: value,
  };
};
export const throwError = (error) => {
  return {
    type: THROW_ERROR,
    payload: error,
  };
};
