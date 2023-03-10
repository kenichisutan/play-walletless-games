package repository

import (
	"backend/internal/models"
	"database/sql"
)

type DatabaseRepo interface {
	Connection() *sql.DB
	AllGames() ([]*models.Game, error)
	GetUserByEmail(email string) (*models.User, error)
}
