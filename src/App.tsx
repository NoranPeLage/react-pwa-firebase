import React from 'react';
import './App.css';
import TinderCard from 'react-tinder-card';

const data = ['Film 1', 'Film 2', 'Film 3', 'Film 4', 'Film 5'];

class App extends React.Component {

  swiped = (direction: any, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete + ' from ' + direction)
  }

  outOfFrame = (name: string) => {
    console.log(name + ' left the screen!')
  }

  render() {
    return (
      <div className="App">
        <div className='cardContainer'>

          {data.map(movie =>
            <TinderCard key={movie} onSwipe={(dir) => this.swiped(dir, movie)} onCardLeftScreen={() => this.outOfFrame(movie)}>
              <div className='swipe'>
                <div className='card'>{movie}</div>
              </div>
            </TinderCard>
          )}

        </div>
      </div>

    );
  }

}

export default App;
