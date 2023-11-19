/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

console.log('Hallo kita akan membuat RESTful API');

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    routes: {
        cors: {
            origin: ['*'],
        },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
