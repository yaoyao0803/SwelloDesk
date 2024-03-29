const defaultState = {
    username: '',
    userId: '',
    registerDemand: false,
    connexionDemand: true
  };
  
  const user = (state = defaultState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          username: action.username,
          userId: action.userId,
          connexionDemand: false,
          registerDemand: false,
        };
        case 'LOGOUT':
        return {
          ...state,
          username: '',
          userID: '',
          connexionDemand: true
        };
        case 'REGISTER_DEMAND':
        return {
          ...state,
          registerDemand: true,
          connexionDemand: false
        };
        case 'CONNEXION_DEMAND':
        return {
          ...state,
          connexionDemand: true,
          registerDemand: false
        };        
      default:
        return state;
    }
  };
  
  export default user;