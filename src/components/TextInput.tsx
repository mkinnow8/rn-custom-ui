import React from 'react';
import { TextInput as RNTextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';
import { colors } from '../theme/colors';

interface Props extends TextInputProps {
  label?: string;
}

export const TextInput = ({ label, ...rest }: Props) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <RNTextInput style={styles.input} {...rest} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    color: colors.textSecondary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
});