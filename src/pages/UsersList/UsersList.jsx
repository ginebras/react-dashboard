import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import './UsersList.css';

import { userRows } from '../../dummyData';

export default function UsersList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt="avatar-row"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transactions Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => {
        return (
          <div className="actionsContainer">
            <Link to={`/user/${params.row.id}`}>
              <button className="editBtn">Edit</button>
            </Link>
            <i class="bi bi-trash-fill table-icon"></i>
          </div>
        );
      },
    },
  ];

  return (
    <div className="users-list">
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
