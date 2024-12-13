import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10766&with_networks=60',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzgzYTY5NjVjYzk0NWJkYjM4OGFkODkzZmZkMWFlOSIsIm5iZiI6MTczMjg4OTU3NC40Njg5OTk5LCJzdWIiOiI2NzQ5Y2JlNjE1MWQxN2MxNmEyNmUzNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GXeERgLeoSI34rjGYx_phkypthlKQRzqhXF-6JBK8Jk`,
  },
});

export default api;
