# Design Editor

Design editor using React and FabricJS. Create images in React, draw diagrams and arrange compositions using the image editor and save the result to one of several export formats, provides functionality similar to canva.com.

![Editor Preview](https://i.ibb.co/12S7x7n/Screenshot-select-area-20210528170059.png)

## Features

- [x] Add, remove, resize, reorder, clone, copy/paste objects
- [ ] Group/ungroup objects
- [ ] Object crop support
- [x] Zoom/pan canvas
- [x] Save and Download design
- [x] Context menu
- [ ] Animation support, with Fade / Bounce / Shake / Scaling / Rotation / Flash effects
- [x] Interation modes: selection, ctrl + drag grab
- [x] Undo/Redo support
- [x] Guidelines support
- [ ] Presentation mode
- [ ] Share design
- [x] Server side image rendering

## How to start

The following steps shows how to start frontend application. Navigate to `server` directory in order to see how to start it.

Start in development mode using the following commands.

```sh
# install dependencies
yarn install
# start development server
yarn start
```

Web application service will start running at `localhost:3000`

## Integrations

In order to provide rich content, the following integrations are implemented.

### Iconscout

Illusatrions and icons provider. Add credentials to `.env` file.

```sh
ICONSCOUT_CLIENT_ID="your-client-id"
ICONSCOUT_SECRET="your-secret"
```

### Pixabay

Images provider. Add credentials to `.env` file.

```sh
REACT_APP_PIXABAY_KEY="your-key"
```


## Join us on Discord

<p>
    <a href="https://discord.gg/HqyXEhkXNZ">
        <img src="https://discordapp.com/api/guilds/898955692491309126/widget.png?style=banner2" alt="Discord Banner 2"/>
    </a>
</p>

## Contribution

Feel free to contribute by opening issues with any questions, bug reports or feature requests.

## Author

Created and maintained by Dany Boza ([@xorbmoon](https://twitter.com/xorbmoon)).

## License

[MIT](LICENSE)
