package main

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"net/http"
)

func (app *application) routes() http.Handler {
	// Create a router mux and register the routes.
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)
	mux.Get("/", app.Home)

	return mux
}
