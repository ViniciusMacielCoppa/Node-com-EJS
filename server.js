    const express = require('express')

    const app = express()

    app.set("view engine", "ejs")

    app.get("/", function(req, res){
        const items = [
            {
                title: "D",
                message: "Desenvolver aplicações Web"
            },
            {
                title: "E",
                message: "Desenvolver aplicações Web"
            },
            {
                title: "M",
                message: "Desenvolver aplicações Web"
            },
            {
                title: "A",
                message: "Desenvolver aplicações Web"
            },
            {
                title: "I",
                message: "Desenvolver aplicações Web"
            },
            {
                title: "S",
                message: "Desenvolver aplicações Web"
            },
        ]

        res.render("pages/index", {
            qualitys: items,
        })
    })

    app.get("/sobre", function(req, res){
        res.render("pages/about")
    })

    app.listen(8080)
    console.log("Rodando")