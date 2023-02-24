package main

import (
	"backend/internal/repository"
	"backend/internal/repository/dbrepo"
	"flag"
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	DSN    string
	Domain string
	DB     repository.DatabaseRepo
}

func main() {
	// Set application configuration
	var app application

	// Read from command line arguments
	flag.StringVar(&app.DSN, "dsn", "host=localhost port=5432 user=postgres password=postgres dbname=games sslmode=disable timezone=UTC+9 connect_timeout=5", "Postgres connection string")
	flag.Parse()

	// Connect to database
	conn, err := app.connectToDB()
	if err != nil {
		log.Fatal(err)
	}
	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	// Close the connection when the main() function exits.
	defer app.DB.Connection().Close()

	app.Domain = "example.com"
	log.Println("Starting server on port", port, "for domain", app.Domain, "...")

	// Start a web server
	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}
