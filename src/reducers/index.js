const initialState = {
  tabFilters: [
    { name: 'cheapest', value: 'Самый дешевый', isActive: true },
    { name: 'faster', value: 'Самый быстрый', isActive: false },
    { name: 'optimal', value: 'Оптимальный', isActive: false },
  ],
  filters: [
    { code: 'all', title: 'all', value: 'Все', isChecked: true },
    { code: '0', title: 'without', value: 'Без пересадок', isChecked: true },
    { code: '1', title: 'one', value: '1 пересадка', isChecked: true },
    { code: '2', title: 'two', value: '2 пересадки', isChecked: true },
    { code: '3', title: 'three', value: '3 пересадки', isChecked: true },
  ],
  searchId: 0,
  tickets: [],
  isStop: false,
  ticketsCounter: 5,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      };
    case 'UPDATE_TAB_FILTER':
      return {
        ...state,
        tabFilters: [...action.payload],
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filters: [...action.payload],
      };
    case 'UPDATE_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };
    case 'COMPLETED_LOADING':
      return {
        ...state,
        isStop: true,
      };
    case 'UPDATE_TICKETS_COUNTER':
      return {
        ...state,
        ticketsCounter: action.payload,
      };
    case 'THROW_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
