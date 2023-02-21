package main

import (
	"backend/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
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
	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *application) AllGames(w http.ResponseWriter, r *http.Request) {
	var games []models.Game

	rd, _ := time.Parse("2006-01-02", "2017-03-03")

	zelda := models.Game{
		ID:          1,
		Title:       "The Legend of Zelda: Breath of the Wild",
		ReleaseDate: rd,
		ESRBRating:  "E10+",
		Genre:       "Action-Adventure",
		Description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U video game consoles. Set in the fantasy land of Hyrule, the game follows Link, who awakens from a hundred-year slumber to a mysterious voice that guides him to defeat Calamity Ganon and save the kingdom of Hyrule.",
		Image:       "https://upload.wikimedia.org/wikipedia/en/7/75/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}
	mario := models.Game{
		ID:          2,
		Title:       "Mario Kart 8 Deluxe",
		ReleaseDate: rd,
		ESRBRating:  "E",
		Genre:       "Racing",
		Description: "Mario Kart 8 Deluxe is a racing game for the Nintendo Switch, and the first Mario game overall for the console. It is the first port of the Mario Kart series, being a port of Mario Kart 8 from the Wii U. It was released worldwide on April 28, 2017.",
		Image:       "https://upload.wikimedia.org/wikipedia/en/7/75/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	games = append(games, zelda)
	games = append(games, mario)

	out, err := json.Marshal(games)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}
