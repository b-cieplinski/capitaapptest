import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PostTodo = () => {

    const [newTodo, setNewtodo] = useState('');
    const [title, setTitle] = useState()

    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/todos',
        {
            title
        }).then(res => console.log('posting todo to db', res)).catch(err=> console.log(err))
    })
    const postTodo = (e) => {
        e.preventDefault();
    }


  return (

    <div>
              <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Type in task" variant="outlined" type="text" value={title} onChange={(e) => setNewtodo(e.target.value)}/>
      <Button variant="contained" onClick={postTodo}>Add Task</Button>
      Open console log to see posting new task to fake api
      </Box>
    </div>
  )
}

export default PostTodo