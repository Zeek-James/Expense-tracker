export default (state, action) =>{
 switch (action.type) {
     case 'ADD_TRANSACTION':
         return{
             ...state,
             transactions: [action.payload, ...state.transactions]
 }
    
    case 'DELETE_TRANSACTION':
        return{
            ...state,
            transactions: state.transactions.fitler(transaction => transaction.id !== action.payload)
        }
 
     default:
         break;
 }
}