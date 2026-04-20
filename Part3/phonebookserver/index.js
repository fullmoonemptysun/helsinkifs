
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))


var data = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons', (req, res)=>{
    res.json(data).end();
})

app.get('/info', (req, res)=>{
    res.send(`<p>Phone book has info for ${data.length} people </p> <p>${(new Date()).toLocaleString()}</p>`);
    
})

app.get('/api/persons/:id', (req, res)=>{
    const contact = data.find((person) => person.id === req.params.id);
    if(!contact){
        return res.status(404).end()
    }

    res.json(contact);
})


app.delete('/api/persons/:id', (req,res)=>{
    const contact = data.find((person)=>person.id === req.params.id);

    console.log("Delete request received")

    if(!contact){
        res.statusMessage = "Contact does not exist on the server!"
        return res.status(200).end()
    }

    data = data.filter(person => person.id !== contact.id);
    res.status(200).send("Contact has been deleted");
})


app.post('/api/persons', (req, res) =>{
    const id = Math.round(Math.random() * 500);

    if(!req.body.number || !req.body.name){
        console.log("ENTERED THIS")
        return res.status(400).json({'error': 'missing number or contact name'});
    }

    
    const duplicates = data.filter(person=>(String(person.number) === String(req.body.number)) && (person.name === req.body.name))
    if(duplicates.length != 0){
        return res.status(400).json({"error": "Contact already exists"})
    }


    const newPerson = {
        'name' : req.body.name,
        'number': req.body.number,
        'id' : String(id)
    }


    data.push(newPerson)
    res.status(200).json(newPerson)
  
})



const unknownEndPoint = (req, res, next) => {
    res.status(404).send({error: 'unknown endpoint'})
    next()
}

app.use(unknownEndPoint)





const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
