import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function App() {
  return (
    <StyledView className="flex-1">
      <Home />
      <StatusBar style="auto" />
    </StyledView>
  );
}
