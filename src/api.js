import axios from 'axios'

const BookAPI = {
    apiKey: '73b19491b83909c7e07016f4bb4644f9:2:60667290',
    getNames: function(){
        return axios.get(`http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.apiKey}`)
            .then(response => response.data.results)
    },
    getBooks: function(list_name_encoded){
        return axios.get(`http://api.nytimes.com/svc/books/v3/lists/${list_name_encoded}.json?api-key=${this.apiKey}`)
            .then(response => response.data.results.books)        
    }
}

export default BookAPI;