import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import { theme } from '../src/theme/mainTheme';
import { MemoryRouter } from 'react-router';

const themes = [theme];

addDecorator(withThemesProvider(themes));
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

configure(() => require('./main'), module);
