package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	Domain string
}

func main() {
	// TODO: Set application configuration
	var app application

	// TODO: Read from command line arguments

	// TODO: Connect to database
	app.Domain = "example.com"
	log.Println("Starting server on port", port, "for domain", app.Domain, "...")

	http.HandleFunc("/", Hello)

	// TODO: Start a web server
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		log.Fatal(err)
	}
}
