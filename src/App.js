import firebase from './firebase';
import './style/App.scss';
import { useState, useEffect } from 'react';
import asideBg from './images/bg.jpg';

function App() {

	const [ nbaPlayers, setNbaPlayers ] = useState([]);
	const [ userInput, setUserInput ] = useState("");
	
	useEffect(() => {
		const dbref = firebase.database().ref();	
		// set up a listener for data in our firebase, which will use the ON feature for any instance where values appear on page load or whenever they change
		dbref.on('value', (snapshot) => {
			const myData =snapshot.val();	
			const newArray = [];

			for (let propertyName in myData) 
			{	
				// create a new object with our key and player title, adn then push the object into the newArray i just made
				const playerObj = {
					key: propertyName,
					title: myData[propertyName]
				}	
				newArray.push(playerObj);
			}

			setNbaPlayers(newArray);
			
		});
	}, []);
	// end of useEffect	

	const handleChange = (event) => {
		console.log(event.target.value);
		setUserInput(event.target.value);
	}	

	const handleSubmit = (event) => {
		event.preventDefault();
		// create a reference to our firebase database
		const dbref = firebase.database().ref();	
		dbref.push(userInput);	
		setUserInput("");
	}	

	const handleDelete =(keyOfPlayerToDelete) => {
		// create a reference to our firebase database
		const dbref = firebase.database().ref();	
		// get specific node (property) then youll want to delete in firebase and (remove it)
		dbref.child(keyOfPlayerToDelete).remove();
	}	

	return (
		<div id="app" className="App">
			<header className="header-section">
				<h1>Basketball Hall Of Fame</h1>
			</header>
			<main>
				<aside>
					<img src={asideBg} alt="Basketball"/>
				</aside>
				<div className="inner">
					<form action="submit" onSubmit={handleSubmit} >
						<h2 className="title">Hall Of Fame</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
							molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
							numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
							optio, eaque rerum! Provident similique accusantium nemo autem.
						</p>
						<label>Player Name</label>
						<input type="text" id="userPlayerChoice" onChange={handleChange} value={userInput} />	
						<button>Add Player!</button>
					</form>	
				</div>
			</main>
			<div className="player-list">
				{
					nbaPlayers.map((playerObj) => {
						return (
							<div className="player" key={playerObj.key}>
								<p className="player-name">{playerObj.title}</p>
								<button className="player-delete" onClick={ () => handleDelete (playerObj.key) }><i className="fas fa-times"></i></button>
							</div>
						)
					})
				}
			</div>
			<footer>
				<div className="inner">
					<div className="social-tray">
						<a href="https://github.com/Amusse7"><i className="fab fa-github"></i></a>
						<a href="https://www.linkedin.com/in/abdulkadir-musse/"><i className="fab fa-linkedin"></i></a>
						<a href="https://twitter.com/AbdulCodes"><i className="fab fa-twitter"></i></a>
					</div>
					<p id="copyright">Made at Juno College</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
