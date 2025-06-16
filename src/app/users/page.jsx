"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '@/app/components/Navbar';
import DashLeftMenu from '@/app/components/DashLeftMenu';
import Image from 'next/image';






function Page() {




  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'image', headerName: 'Image', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'categories', headerName: 'Categories', width: 100 },
  ];

  const rows = [
    { id: 1, image: <Image src="/" width={50} height={50} alt="image"/>, name: 'John Doe', date: "13/12/2025", categories: "author" },
    { id: 2, name: 'Jane Smith', date: "08/10/2025", categories: "user" },
  ];

  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <h2 className='dash'>User</h2>
            <div className="row">
              <aside className='col-lg-3'>
                <DashLeftMenu />
              </aside>

              <div className='col-lg-9 '>


                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                  />
                </div>

              </div>
            </div>
          </div>
        </section>
      </main >

    </>
  )
}

export default Page
