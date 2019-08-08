import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";

rerenderEntireTree();

serviceWorker.unregister();
