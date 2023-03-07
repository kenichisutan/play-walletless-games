package main

import (
	"github.com/golang-jwt/jwt/v4"
	"time"
)

type Auth struct {
	Issuer        string
	Audience      string
	Secret        string
	TokenExpiry   time.Duration
	RefreshExpiry time.Duration
	CookieDomain  string
	CookiePath    string
	CookieName    string
}

type jwtUser struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}

type jwtClaims struct {
	Token        string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
}

type Claim struct {
	jwt.RegisteredClaims
}
