package dbrepo

import (
	"backend/internal/models"
	"context"
	"database/sql"
	"time"
)

type PostgresDBRepo struct {
	DB *sql.DB
}

// Timeout for unexpected disconnects
const dbTimeout = time.Second * 3

func (model *PostgresDBRepo) Connection() *sql.DB {
	return model.DB
}

func (model *PostgresDBRepo) AllGames() ([]*models.Game, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `
		select
			id, title, release_date, esrb_rating, description, 
			coalesce(image, ''), created_at, updated_at
		from 
		    games
		order by 
		    title
	`

	rows, err := model.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var games []*models.Game

	for rows.Next() {
		var game models.Game
		err := rows.Scan(
			&game.ID,
			&game.Title,
			&game.ReleaseDate,
			&game.ESRBRating,
			&game.Description,
			&game.Image,
			&game.CreatedAt,
			&game.UpdatedAt,
		)
		if err != nil {
			return nil, err
		}

		games = append(games, &game)
	}

	return games, nil
}
