import React, { useState } from 'react';

export default function Authentication() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [games, setGames] = useState([]);
    const [gameTitle, setGameTitle] = useState('');
    const [gameDate, setGameDate] = useState('');
    const [gameBody, setGameBody] = useState('');

    const handleLogin = () => {

        if (username === 'admin' && password === '123') {
            setLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const handleAddGameReview = () => {
        const newGameReview = {
            title: gameTitle,
            date: gameDate,
            body: gameBody
        };
        setGames([...games, newGameReview]);

        setGameTitle('');
        setGameDate('');
        setGameBody('');
    };

    const handleDeleteGameReview = index => {
        const newGames = [...games];
        newGames.splice(index, 1);
        setGames(newGames);
    };

    if (!loggedIn) {
        return (
            <div className="login-container">
                <h2>Login</h2>
                <input  class = "username" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /> <br />
                <input class = "password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
                <button  class = "login" onClick={handleLogin}>Login</button>
            </div>
        );
    }

    return (
        <div className="review-container">
            <h2>Add Your Game Review</h2>

            <p>Title of the game:</p> <br />
            <input  class = "title" type="text" placeholder="Title" value={gameTitle} onChange={e => setGameTitle(e.target.value)} /> <br />
            <p>Date Review:</p> <br />
            <input class = "date" type="date" placeholder="Date" value={gameDate} onChange={e => setGameDate(e.target.value)} /> <br />
            <p>Your Review:</p> <br />
            <textarea class = "review" placeholder="Review" value={gameBody} onChange={e => setGameBody(e.target.value)}></textarea> <br />
            <button class = "reviewBtn" onClick={handleAddGameReview}>Add Review</button> 
            
            <ul>
                {games.map((game, index) => (
                    <li key={index}>
                        <div> {game.title}</div>
                        <div> {game.date}</div>
                        <div>{game.body}</div>
                        <button onClick={() => handleDeleteGameReview(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}