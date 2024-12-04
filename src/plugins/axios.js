import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzgzYTY5NjVjYzk0NWJkYjM4OGFkODkzZmZkMWFlOSIsIm5iZiI6MTczMjg4OTU3NC40Njg5OTk5LCJzdWIiOiI2NzQ5Y2JlNjE1MWQxN2MxNmEyNmUzNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GXeERgLeoSI34rjGYx_phkypthlKQRzqhXF-6JBK8Jk`,
  },
});

export default api;