const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    if(req.method==='GET')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<center><h1>Get Method Is Processed</h1></center>');
        const parseurl=url.parse(req.url,true)
        const {name,email,password}=parseurl.query
        res.write(`<h3>Username</h3> <h4>${name}</h4>`)
        res.write(`<h3>Email</h3> <h4>${email}</h4>`)
        res.write(`<h3>Password</h3> <h4>${password}</h4>`)
        res.end();
    }
    else if(req.method==='POST')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<center><h1>POST Method Is Processed</h1></center>');
        let inputs='';
        req.on('data',(chunks)=>{
            inputs+=chunks.toString()
        })
        req.on('end',()=>{
            console.log(inputs);
            const parsedata=querystring.parse(inputs);
            const {name,email,password}=parsedata;
            res.write(`<h2>Username: ${name}</h2>`)
            res.write(`<h2>Age: ${email}</h2>`)
            res.write(`<h2>Age: ${password}</h2>`);
            res.end();
        })
    }
    else
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<center><h1>Mthod Not Found</h1></center>');
    }
})
server.listen(5500,()=>{
    console.log(`The server is running on port:http://localhost:5500`);
})