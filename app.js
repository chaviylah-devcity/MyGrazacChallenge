const express = require('express');
const mongoose = require('mongoose');
const bookModel = require('./models/book_model');

//express app
mongoose.set('strictQuery', false);
const app = express();
const dbCon = 'mongodb+srv://cornelius:CR12345@library-books.prfc99t.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbCon, { useNewUrlParser: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));




//register view enginw
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));

//mongoose
// app.get('/add_book', (req, res) => {
//     const addnewbook = new bookModel({
//         name: 'Laws of Leadership',
//         author: 'John C. Maxwell',
//         unique_code: 11144,
//         quantity : 25
//     });

//     addnewbook.save()
     
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })





app.get('/', (req, res) => {
    res.render('admin_page')

});

app.get('/addbook', (req, res) => {

    res.render('add_book')

});

app.post('/addbook', (req, res) => {
    const addnewbook = new bookModel(req.body)

    addnewbook.save()
    .then((result) => {
         res.redirect('/')
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/remove', (req, res) => {
    res.render('remove_book')

})

app.get('/viewall', (req, res) => {

       

      //  bookModel.find((err, data) =>{
           
      
        // bookModel.find((err, docs) => {
        //     if (!err) {
        //         res.render("view_all", {
        //             bookModel: name, author, unique_code, quantity
        //         });
        //     } else {
        //         console.log('Failed to retrieve the Course List: ' + err);
        //     }
       
     
   

    res.render('view_all');

});


app.use((req, res) =>{
    res.status(404).render('404')

}); 