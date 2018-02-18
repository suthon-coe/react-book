import axios from 'axios'

const BookAPI = {
    apiKey: 'a841ede249b1449f9d42e4fda6b39f22',
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