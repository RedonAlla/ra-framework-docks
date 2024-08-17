import * as Font from 'expo-font';

export function loadFonts() {
  return Font.loadAsync({
    'Icons': require('/static/fonts/font-icon.ttf')
  });
}