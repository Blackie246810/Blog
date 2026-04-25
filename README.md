# Simple Blog Project (Learning Sandbox)

This is a basic web application created for the sole purpose of learning how to manage repositories on **GitHub** and how to deploy live web applications using **Render**.

### 🔗 Live Demo
You can view the hosted site here: [https://blog-g1va.onrender.com](https://blog-g1va.onrender.com)

---

## ⚠️ Important Note
This is a **dummy project** and is not intended for production or actual use. Please keep the following in mind:

* **No Authentication:** There is no login or registration system. 
* **Open Access:** Anyone can create, edit, or delete any post on the site.
* **Experimental Status:** Expect various bugs and malfunctions. Since the primary goal was to learn the deployment process, I am not actively maintaining or fixing the code.

## 💾 How the "Database" Works
To keep things simple for this experiment, I didn't use a traditional database (like SQL or MongoDB). Instead:
* **File-Based Storage:** New blog posts are simply saved as text files within a folder on the server. 
* **The Index:** A separate text file keeps track of the blog titles to display them on the homepage.
* **Non-Permanent Data:** Because of how hosting services like **Render** work, the server resets itself occasionally by pulling a fresh copy of the code from GitHub. When this happens, any blogs created by visitors will be automatically deleted. **Nothing you write here is permanent!**

## 🛠 Purpose of this Project
I built this to get hands-on experience with:
1.  **Git/GitHub Workflow:** Branching, committing, and pushing code.
2.  **Deployment:** Understanding the pipeline between a GitHub repository and a hosting service like Render.
3.  **Basic Web Logic:** Handling simple CRUD (Create, Read, Update, Delete) operations using the file system.

## 🤝 Contributions & Maintenance
As this is a personal learning milestone, I am **not** looking for collaborations, pull requests, or bug reports. It is staying exactly as it is!

---
*Created as a milestone in my software development journey.*
