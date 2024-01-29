import { TextStyle, StyleSheet } from 'react-native';

import { TEXTS } from '../../themes';

interface IExtendedTextStyles {
  ['fs32']: TextStyle;
  ['fs24']: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  ['fs32']: TEXTS.FS32,
  ['fs24']: TEXTS.FS24,
});
