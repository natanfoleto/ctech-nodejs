import env from '@config/config';

import app from '@shared/app';

app.listen(env.PORT, () => console.log(`http://localhost:${env.PORT}`));
