"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '@/app/components/Navbar';
import DashLeftMenu from '@/app/components/DashLeftMenu';
import Image from 'next/image';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Link from 'next/link';


function Page() {



  const columns = [
  {
    field: 'image',
    headerName: 'Post Image',
    width: 100,
    renderCell: () => (
      <span className='img-td'>
        <Image src="/blog5.webp" width={50} height={50} alt="image" />
      </span>
    )
  },
  { field: 'name', headerName: 'Post Titel', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'excerpt', headerName: 'Excerpt', width: 150 },
  { field: 'comment', headerName: 'Comment', width: 100 },
  {
    field: 'action',
    headerName: 'Action',
    width: 120,
    renderCell: () => (
      <div className='d-flex mt-2'>
        <button type='btton' className='btn btn-del'>
          <FaRegEye />
        </button>
        <button type='btton' className='btn ms-2 btn-danger'>
          <MdDeleteOutline />
        </button>
      </div>
    )
  },
  ];

  
  const rows = [
    { id: 1, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 2, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 3, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 4, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 5, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 6, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 7, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 8, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
    { id: 9, name: 'Suspendisse tempus felis ', date: "12/12/2025", excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.", comment:"3",  categories: "author" },
  ];

  return (
    <>
      <Navbar />
     <main className="float-start w-100 maind-body dashborad-bg120">
        <section className="dash-section crm-pages-dashborad01 float-start w-100 position-relative">
          <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active">Blog</li>
                </ol>
            </nav>
            <div className="row mt-3 gy-4 gx-lg-5">
              <aside className='col-lg-3'>
                <DashLeftMenu />
              </aside>

              <div className='col-lg-9 '>

                <div className='crm-box1 w-100'>
                    <div className='d-flex border-bt pt-3 pb-2 px-4 align-items-center w-100 justify-content-between'>
                        <h4 className='mb-0'> All Post </h4>

                        <button type='button' className='btn btn-adds01'> + Add Post </button>
                    </div>
                    <div className='mt-3 mx-auto' style={{ height: 400, width: '95%' }}>
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        showToolbar
                      />
                    </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main >

    </>
  )
}

export default Page;
