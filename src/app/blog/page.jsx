"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DashLeftMenu from "@/app/components/dashboard/DashLeftMenu";
import Navbar from "@/app/components/Navbar";
import { MdDeleteOutline, MdOutlineCloudUpload } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";

function Page() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogSearch, setBlogSearch] = useState("");
  const [blogPost, setBlogPost] = useState(false);
  const [blogImagePreview, setBlogImagePreview] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API_URL = "https://magical-friends-d2761de367.strapiapp.com/api/articles"; // Adjust if needed

  // Fetch blog posts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.map((item) => ({
          id: item.id,
          title: item.title || item.attributes?.title,
          description: item.description || item.attributes?.description,
          createdAt: new Date(
            item.createdAt || item.attributes?.createdAt
          ).toLocaleDateString("en-GB"),
        }));
        setBlogPosts(formatted);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleAddBlog = () => setBlogPost(true);

  const handleHideBlog = () => {
    setBlogPost(false);
    setBlogImagePreview(null);
    setTitle("");
    setDescription("");
  };

  const handleUploadBlogImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBlogImagePreview(imageUrl);
    }
  };

const handleSubmitPost = async () => {
  if (!title || !description) {
    alert("Please fill in both title and description.");
    return;
  }

  const payload = {
    data: {
      title,
      description,
    },
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (res.ok) {
      const post = result.data;
      const newPost = {
        id: post.id,
        title: post.title,
        description: post.description,
        createdAt: new Date(post.createdAt).toLocaleDateString("en-GB"),
      };

      setBlogPosts([newPost, ...blogPosts]);
      handleHideBlog();
    } else {
      alert("Error creating blog post: " + result?.error?.message);
    }
  } catch (error) {
    console.error("Error posting:", error);
    alert("Failed to post. Try again.");
  }
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
                  placeholder="Search..."
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
                  {blogPosts
                    .filter((post) =>
                      post.title?.toLowerCase().includes(blogSearch.toLowerCase())
                    )
                    .map((post) => (
                      <div key={post.id} className="card dash-blog-card dash-card-style">
                        <div className="dash-blog-flex">
                          <Image
                            src={blogImagePreview || "/card-1.png"}
                            width={80}
                            height={80}
                            alt="Picture"
                            className="dash-blog-card-image"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p>{post.description}</p>
                            <p className="card-text">{post.createdAt}</p>
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
