import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {readFileSync, unlinkSync, writeFileSync} from "fs";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const names_path = join(__dirname, "blogs/blog_names.txt");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

function get_blogs(){
    let blogs = readFileSync(names_path, "utf8").split("\n");
    if(blogs != ""){
        let header_list = [];
        blogs.pop();
        for(let i = 0; i < blogs.length; i++){
            header_list.push([blogs[i].replace(".txt", ""), readFileSync(join(__dirname, "blogs/content/"+blogs[i]), "utf8").split("\n")[0]]);
        }
        return header_list;
    }
}
function readFileNum(num){
    let file = num.replace("'", "").replace("'", "") + ".txt";
    let blog = readFileSync(join(__dirname, "blogs/content/"+file), "utf8");
    let head = blog.split("\n\n")[0];
    let body = blog.replace(head+"\n\n", "");
    return [head, blog];
}

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

app.get("/", (req, res)=>{
    res.render("index.ejs");
});
app.get("/blogs", (req, res)=>{
    res.render("blogs.ejs", {headers: get_blogs()});
});
app.get("/post", (req, res)=>{
    res.render("post.ejs");
});
app.get("/update", (req, res)=>{
    res.render("update.ejs", {headers: get_blogs()});
});
app.get("/view", (req, res)=>{
    let content = readFileNum(req.query.id);
    res.render("blog-template.ejs", {heading: content[0], content: content[1]});
});
app.get("/modify", (req, res)=>{
    let content = readFileNum(req.query.id);
    res.render("blog-modify.ejs", {heading: content[0], content: content[1].replace(content[0]+"\n\n", ""), blog: req.query.id});
});
app.get("/delete", (req, res)=>{
    let file = req.query.id.replace("'", "").replace("'", "") + ".txt";
    let files = readFileSync(names_path, "utf8").split("\n");
    files.pop();
    files = files.filter(item => item !== file);
    files = files.join("\n");
    if(files != ""){
        files += "\n";
    }
    writeFileSync(names_path, files);
    unlinkSync(join(__dirname, "blogs/content/"+file));
    res.redirect("blogs");
});

app.post("/blogs", (req, res)=>{
    let header = req.body.heading;
    let body = req.body.blog;
    let start_num;
    if(readFileSync(names_path, "utf8") == ""){
        start_num = 1;
    }else{
        let names = readFileSync(names_path, 'utf8').split("\n");
        let index = names.length - 2;
        start_num = Number(names[index].replace(".txt", "")) + 1;
    }
    writeFileSync(names_path, start_num.toString()+".txt\n", {flag: "a"});
    writeFileSync(join(__dirname, "blogs/content/"+start_num.toString()+".txt"), header+"\n\n"+body);
    res.redirect("blogs");
});
app.post("/update", (req, res)=>{
    let file = req.body.page.replace("'", "").replace("'", "") + ".txt";
    let header = req.body.heading;
    let body = req.body.blog;
    writeFileSync(join(__dirname, "blogs/content/"+file), header+"\n\n"+body);
    res.render("blogs.ejs", {headers: get_blogs()});
});