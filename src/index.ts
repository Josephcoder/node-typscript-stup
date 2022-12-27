import { createApp } from "./app";
import { PORT } from "./config";

(async () => {
  const app = createApp();

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})();
