import React from 'react'; // Importez React si nécessaire
import Phaser from 'phaser';


class MyPhaserGame extends React.Component { // Utilisez React.Component pour le composant React
  componentDidMount() {

    console.log('componentDidMount() lifecycle')

    


    // Trigger update
    // this.setState({ foo: !this.state.foo });

    // Configuration du jeu Phaser
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update,
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 },
        },
      },
      parent: 'game',
    };

    // Création du jeu
    this.game = new Phaser.Game(config);
  }

  // Reste du code de votre jeu Phaser

  render() {
    return <div id="game" />;
  }
}

export default MyPhaserGame;
