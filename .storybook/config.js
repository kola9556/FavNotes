import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import { theme } from '../src/theme/mainTheme';

const themes = [theme];

addDecorator(withThemesProvider(themes));

configure(() => require('./main'), module);
