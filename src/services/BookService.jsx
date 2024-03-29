import axios from "axios";


class BookService {
  baseUrl = "http://localhost:8080/book";
  token = localStorage.getItem('token');

  getAllBooks() {
    
    return axios.get(`${this.baseUrl}` + "/getAllBooks");
  }

  getAllInIncreasingOrder() {
    return axios.get(`${this.baseUrl}` + "/getBookAscending");
  }

  getAllInDecreasingOrder(){
    return axios.get(`${this.baseUrl}` + "/getBookDescending");
  }

  getBooksByPublishingYear(){
    return axios.get(`${this.baseUrl}` + "/getBooksByPublishingYear");
  }

  getBooksByNewLaunch(){
    return axios.get(`${this.baseUrl}` + "/getBooksByNewLaunch");
  }
//for request header authorisation
  authAxios = axios.create({
    baseURL:this.baseUrl,
    headers: {
        token:`${this.token}`
    }
  })

  addBook(userData) {
    console.log(this.token)
  
    return this.authAxios.post(`/addBook/`,userData);
  }
  getFilterBooks(filter){
    return axios.get(`${this.baseUrl}` + "/filterBySearch?name="+filter);
  }
}


export default new BookService();
