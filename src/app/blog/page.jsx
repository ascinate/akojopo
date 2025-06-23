'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '@/app/components/Navbar';
import DashLeftMenu from '@/app/components/DashLeftMenu';
import Image from 'next/image';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Link from 'next/link';

function Page() {
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://magical-friends-d2761de367.strapiapp.com/api/articles");
        const json = await res.json();

        const formattedRows = json.data.map((article) => ({
          id: article.id,
          name: article.title,
          date: new Date(article.createdAt).toLocaleDateString(),
          excerpt: article.description,
          comment: "0", // You can replace this with real data if available
        }));

        setRows(formattedRows);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      }
    };

    fetchArticles();
  }, []);

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
    { field: 'name', headerName: 'Post Title', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'excerpt', headerName: 'Excerpt', width: 250 },
    { field: 'comment', headerName: 'Comment', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: () => (
        <div className='d-flex mt-2'>
          <button type='button' className='btn btn-del'>
            <FaRegEye />
          </button>
          <button type='button' className='btn ms-2 btn-danger'>
            <MdDeleteOutline />
          </button>
        </div>
      )
    },
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
                    <button
                      type='button'
                      className='btn btn-adds01'
                      onClick={() => setOpenModal(true)}
                    >
                      Add Post
                    </button>

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
      </main>
      {openModal && (
        <div className="modal fade show d-block" style={{ background: '#00000088' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <h4>Add New Post</h4>
              {/* your form can go here or custom layout */}
              <div className="d-flex justify-content-end">
                <button className="btn btn-secondary" onClick={() => setOpenModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default Page;
