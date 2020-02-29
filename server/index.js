const express= require('express');
const app=new express();

app.use(require('cors')());
app.use(express.json());
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/element-admin',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

const Article=mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    body:{type:String}
}) )


app.get('/',async(req,res)=>{
    res.send('index');
})
//新增文章接口
app.post('/api/articles', async(req, res) => {
    const article=await Article.create(req.body)
    res.send(article);
});

//文章列表接口
app.get('/api/articles', async(req, res) => {
    const articles= await Article.find()
    res.send(articles);
});
//删除文章接口
app.delete('/api/articles/:id', async(req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    });
});
//文章详情接口
app.get('/api/article/:id', async(req, res) => {
    const article=await Article.findById(req.params.id);
    res.send(article);
});
//文章修改接口
app.put('/api/article/:id', async(req, res) => {
    const article=await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article);
});

app.listen(3001, () => {
    console.log(`Server started on port`);
});