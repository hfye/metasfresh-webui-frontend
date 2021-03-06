import { routerReducer as routing } from 'react-router-redux';

import appHandler from './appHandler';
import listHandler from './listHandler';
import menuHandler from './menuHandler';
import windowHandler from './windowHandler';
import pluginsHandler from './pluginsHandler';

export default {
  appHandler,
  listHandler,
  menuHandler,
  windowHandler,
  pluginsHandler,
  routing,
};
