"use client";
import React, { useState } from "react";
import Image from "next/image";
import DashLeftMenu from "@/app/components/dashboard/DashLeftMenu";
import Navbar from "@/app/components/Navbar";
import { MdDeleteOutline, MdOutlineCloudUpload } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
 
function Page() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      author: "Author Name 1",
      image: "/card-1.png",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      date: "12/06/2025",
    },
  ]);
 
  const [blogSearch, setBlogSearch] = useState("");
  const [blogPost, setBlogPost] = useState(false);
  const [blogImagePreview, setBlogImagePreview] = useState(null);
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [category, setCategory] = useState("");
 
  const handleAddBlog = () => {
    setBlogPost(true);
  };
 
  const handleHideBlog = () => {
    setBlogPost(false);
    setBlogImagePreview(null);
    setTitle("");
    setDescription("");
    setFullDescription("");
    setCategory("");
  };
 
  const handleUploadBlogImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBlogImagePreview(imageUrl);
    }
  };
 
  const handleSubmitPost = () => {
    const newPost = {
      id: Date.now(),
      author: "Author Name",
      image: blogImagePreview || "/card-1.png",
      content: description,
      date: new Date().toLocaleDateString("en-GB"),
    };
 
    setBlogPosts([newPost, ...blogPosts]);
    handleHideBlog();
  };
 
  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <div className="d-flex justify-content-between w-auto">
              <h2 className="dash">Blog</h2>
              <div className="d-flex justify-content-end w-100">
                <input
                  type="text"
                  placeholder="@"
                  className="w-50 mx-5 dash-input"
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                />
                <button className="dash-btn" onClick={handleAddBlog}>
                  Add blog <IoAddSharp />
                </button>
              </div>
            </div>
 
            <div className="row">
              <aside className="col-lg-3">
                <DashLeftMenu />
              </aside>
 
              <div className="col-lg-9">
                <div className="container">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="card dash-blog-card dash-card-style"
                    >
                      <div className="dash-blog-flex">
                        <Image
                          src={post.image}
                          width={80}
                          height={80}
                          alt="Picture"
                          className="dash-blog-card-image"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{post.author}</h5>
                          <p>{post.content}</p>
                          <p className="card-text">{post.date}</p>
                        </div>
                        <div className="d-flex justify-content-between dash-blog-card-icon">
                          <BiEditAlt />
                          <MdDeleteOutline />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
 
                {blogPost && (
                  <ul className="blog-form text-center">
                    <li className="d-flex justify-content-center">
                      <label className="handleUploadBlogImage">
                        {blogImagePreview ? (
                          <div className="image-preview-container">
                            <Image
                              src={blogImagePreview}
                              alt="Preview"
                              width={100}
                              height={100}
                              className="uploaded-image-preview"
                            />
                            <button
                              type="button"
                              className="image-delete-btn"
                              onClick={() => setBlogImagePreview(null)}
                            >
                              ❌
                            </button>
                          </div>
                        ) : (
                          <>
                            <MdOutlineCloudUpload size={40} />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleUploadBlogImage}
                              className="handleUploadBlogImageInput"
                            />
                          </>
                        )}
                      </label>
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Post title"
                        className="dash-input w-75 py-3"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Short description"
                        className="dash-input w-75 py-3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </li>
                    <li>
                      <textarea
                        rows="4"
                        cols="50"
                        className="dash-input w-75 py-2"
                        placeholder="Full description"
                        value={fullDescription}
                        onChange={(e) => setFullDescription(e.target.value)}
                      />
                    </li>
                    <li>
                      <select
                        className="dash-select py-3 w-75"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Category</option>
                        <option value="tech">Tech</option>
                        <option value="news">News</option>
                        <option value="life">Life</option>
                      </select>
                    </li>
                    <li>
                      <button className="w-50 dash-btn" onClick={handleSubmitPost}>
                        Post
                      </button>
                    </li>
                    <li>
                      <button className="w-50 dash-btn" onClick={handleHideBlog}>
                        Clear
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
 
export default Page;