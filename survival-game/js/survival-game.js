import MainScene from './MainScene.js';

const config = {
  width: 512,
  height: 512,
  backgroundColor: '#ffffff',
  type: Phaser.AUTO,
  parent: 'survival-game',
  scene: [MainScene],
  scale: {
    zoom: 2,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: false, // object 주변의 센서를 없애려면 false, 생기게 하려면 true
      gravity: { y: 0 },
    },
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin.default,
        key: 'matterCollision',
        mapping: 'matterCollision',
      },
    ],
  },
};

new Phaser.Game(config);
