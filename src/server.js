import { Server } from '@hapi/hapi';
import { common } from './config';
import plugins from './plugins';

const registerAllPlugins = async ({ server, plugins }) => {
  //Register all configured plugins
  return Promise.all(plugins.map((exec) => exec(server)));
};

export const init = async (plugins = []) => {
  const server = new Server({
    port: common.port,
    host: common.host,
    router: {
      stripTrailingSlash: true,
      isCaseSensitive: true,
    },
  });
  await registerAllPlugins({
    server,
    plugins,
  });
  await server.initialize();
  return server;
};

export const run = async (ctx) => {
  const server = await init(plugins);

  server.decorate('server', 'ctx', () => ctx);

  await server.start();
};
