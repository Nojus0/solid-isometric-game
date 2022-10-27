# Solid.js Isometric Game
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/Nojus0/solid-isometric-game)

Isometric game engine prototype created using `Solid.js`

[Website / Web App](https://solid-isometric-game.netlify.app/)

# Engine Components
`Camera` - Allows you to move arround using _wasd_ keys

`TextureLoader` - Solid.js Suspense but for Loading textures

`Canvas` - Custom canvas component used for rendering, must be child of RenderContext.

`GameObject` - Create a gameobject's via JSX

# Engine Hooks

`useKeyboard` - Map of Keyboard keys that are currently being held down

`createGameObject` - Exactly the same as GameObject JSX component just in a function form.

# Engine Contexts

`RenderContext` - Context that handles rendering

`SceneContext` - Context that handles the current Scene, children must be GameObjects

# Notes

SceneContext gets current RenderContext via Context

Custom canvas component gets current RenderContext via Context

GameObjects get current scene via Context



