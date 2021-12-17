import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from '@material-ui/core';
  import { Delete, EventNote } from '@material-ui/icons';
  import { useEffect, useState } from 'react';
  
  
  const Mylist = () => {
    const [mylist, setMylist] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/mylist')
        .then((res) => res.json())
        .then((data) => setMylist(data));
    }, []);
    const handleDelete = async (id) => {
      await fetch('http://localhost:8000/mylist' + id, {
        method: 'DELETE',
      });
      const newlist = mylist.filter((item) => item.id !== id);
      setMylist(newlist);
    };
    return (
      <Container>
        <nav className="navbar">
          <Typography variant="h3" className="typography">
            Todo List
          </Typography>
          <div className="links">
            <a style={{ backgroundColor: '#ccc' }} href="/">
              Home
            </a>
            <a href="/Addtask">Add Task</a>
          </div>
        </nav>
        <TableContainer
          style={{ maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Status</TableCell>
                <TableCell style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mylist.map((item) => (
                <TableRow className="tablerow" key={item.id}>
                  <TableCell>
                    <EventNote className="icons" />
                  </TableCell>
                  <TableCell>{item.task}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                    <Button onClick={() => handleDelete(item.id)}>
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  };
  
  export default Mylist;
  