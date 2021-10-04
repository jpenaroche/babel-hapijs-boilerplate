import { run } from './server';
import { database } from './config';
import { ErrorHandler, connect } from './lib';

const bootstrap = async () => {
  //Connecting to Atlas Cluster
  const db = connect(database);
  return {
    db,
  };
};

// Bootstrap all connections and send it to server using context definition
bootstrap().then(run);

// get the unhandled rejection and throw it to another fallback handler we already have.
process.on('unhandledRejection', (reason) => {
  throw reason;
});

process.on('uncaughtException', (err) => {
  ErrorHandler.handleError(err);
  if (!ErrorHandler.isTrustedError(err)) {
    process.exit(1);
  }
});
