# Simple Blog Project (Learning Sandbox)

This is a basic web application created for the sole purpose of learning how to manage repositories on **GitHub** and how to deploy live web applications using **Render**.

### 🔗 Live Demo
You can view the hosted site here: [https://blog-g1va.onrender.com](https://blog-g1va.onrender.com)

---

## ⚠️ Important Note & Context
This is a **dummy project** and is not intended for production or actual use. 

* **The "Blog" Label:** I named this "Blog Website" because creating one was a specific task in my learning journey. To be honest, I don't actually know how professional blog sites are built or how they function "under the hood" yet—this is just my interpretation of that assignment.
* **No Authentication:** There is no login or registration system. 
* **Open Access:** Anyone can create, edit, or delete any post on the site.
* **Experimental Status:** Expect various bugs and malfunctions. Since the goal was to learn the deployment process—which has been achieved—I am not taking this seriously or fixing any issues.

## 💾 How the "Database" Works
To keep things simple, I didn't use a traditional database. Instead:
* **File-Based Storage:** New blog posts are saved as text files within a folder on the server. 
* **The Index:** A separate text file tracks the blog titles for the display list.
* **Non-Permanent Data:** Because of how **Render** works, the server resets itself occasionally by pulling a fresh copy of the code from GitHub. When this happens, any files created by visitors are wiped. **Data here is temporary!**

## 🛠 Purpose of this Project
I built this to get hands-on experience with:
1.  **Git/GitHub Workflow:** Branching, committing, and pushing code.
2.  **Deployment:** Understanding the pipeline between GitHub and Render.
3.  **Basic Web Logic:** Handling simple CRUD (Create, Read, Update, Delete) operations using a file-system approach.

## 🤝 Contributions & Maintenance
As this is a personal learning milestone that is now complete, I am **not** looking for collaborations, pull requests, or bug reports. 

---
*Created as a milestone in my software development journey.*
