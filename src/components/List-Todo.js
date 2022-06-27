
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Task from './Task'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ReactPaginate from 'react-paginate'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const List = () => {
  const fetchUrl = 'https://jsonplaceholder.typicode.com/todos?completed=true'
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();


  //Fetching Data from API
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(fetchUrl);

      setTodos(result.data);
    };

    fetchData();
  }, []);
//Deleting task when clicked done
  function updateTodo() {
    axios
      .put(`${fetchUrl}`, {
        completed: true
      })
      .then((response) => {
        setTodos(response.data);
      });
  }

      //Pagination
      const [pageNumber, setPageNumber] = useState(0)
      const tasksPerPage = 12
      const pagesVisited = pageNumber * tasksPerPage
      const pageCount = Math.ceil(todos.length / tasksPerPage)
      const changePage = ({selected}) => {
          setPageNumber(selected)
      };
  
      const displayTasks = todos
      .slice(pagesVisited, pagesVisited + tasksPerPage)
      .map((todo) => (
  <Task key={todo.id} id={todo.id} title={todo.title} completion={todo.completed}/>
        ))
  console.log(todos)
  return (
    <div>
      
   <Grid container spacing={0} m={0.5}>

      {displayTasks}
      </Grid>



      <ReactPaginate
      previousLabel={"Back"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationSection"}
      activeClassName={"paginationActive"}
      />
      </div>
  )
}

export default List