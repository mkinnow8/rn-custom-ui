import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

export const Button = ({ title, onPress, backgroundColor, textColor, style }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor || colors.primary }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor || '#fff' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});