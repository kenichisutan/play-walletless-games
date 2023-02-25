package main

import (
	"fmt"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Welcome to the Walletless Games API",
		Version: "1.0.0",
	}

	_ = app.writeJSON(w, http.StatusOK, payload, nil)
}

func (app *application) AllGames(w http.ResponseWriter, r *http.Request) {
	games, err := app.DB.AllGames()
	if err != nil {
		fmt.Println(err)
		return
	}

	_ = app.writeJSON(w, http.StatusOK, games, nil)
}
