export default(news = [], action: any) => {
    switch(action.type) {
        case 'GET_NEWS':
            return action.payload;
        case 'CREATE_NEW':
            return [...news, action.payload];
        case 'UPDATE_NEW':
            return news.map( (item: any) => item._id === action.payload._id ? action.payload : item);
        case 'DELETE_NEW':
            return news.filter( (item: any) => item._id !== action.payload); //Devuelve todos menos el eliminado
        default:
            return news;
    }
}