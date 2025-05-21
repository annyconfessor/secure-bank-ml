import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);

export const Home = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-gray-50">
      <StyledScrollView className="flex-1">
        {/* Header */}
        <StyledView className="flex-row justify-between items-center px-5 py-4">
          <StyledView>
            <StyledText className="text-2xl font-bold text-text-primary">Olá, Usuário</StyledText>
            <StyledText className="text-base text-text-secondary mt-1">Bem-vindo de volta!</StyledText>
          </StyledView>
          <StyledTouchableOpacity className="p-2">
            <Ionicons name="person-circle-outline" size={32} color="#1A1A1A" />
          </StyledTouchableOpacity>
        </StyledView>

        {/* Balance Card */}
        <StyledView className="bg-primary rounded-2xl p-5 mx-4 shadow-md">
          <StyledText className="text-white/80 text-base">Saldo disponível</StyledText>
          <StyledView className="flex-row justify-between items-center mt-2">
            <StyledText className="text-white text-3xl font-bold">R$ 5.234,50</StyledText>
            <StyledTouchableOpacity>
              <Ionicons name="eye-outline" size={24} color="#FFF" />
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>

        {/* Quick Actions */}
        <StyledView className="flex-row justify-around py-4 mx-4 mt-4 bg-white rounded-xl shadow-sm">
          <StyledTouchableOpacity className="items-center">
            <StyledView className="w-12 h-12 bg-secondary rounded-full items-center justify-center">
              <Ionicons name="arrow-up" size={24} color="#007AFF" />
            </StyledView>
            <StyledText className="mt-2 text-sm text-text-primary">Transferir</StyledText>
          </StyledTouchableOpacity>

          <StyledTouchableOpacity className="items-center">
            <StyledView className="w-12 h-12 bg-secondary rounded-full items-center justify-center">
              <Ionicons name="barcode-outline" size={24} color="#007AFF" />
            </StyledView>
            <StyledText className="mt-2 text-sm text-text-primary">Pagar</StyledText>
          </StyledTouchableOpacity>

          <StyledTouchableOpacity className="items-center">
            <StyledView className="w-12 h-12 bg-secondary rounded-full items-center justify-center">
              <Ionicons name="card-outline" size={24} color="#007AFF" />
            </StyledView>
            <StyledText className="mt-2 text-sm text-text-primary">Cartão</StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Recent Transactions */}
        <StyledView className="mt-6 px-4">
          <StyledText className="text-xl font-bold text-text-primary mb-4">Transações Recentes</StyledText>
          
          {/* Transaction Items */}
          {[1, 2, 3].map((item) => (
            <StyledView key={item} className="flex-row items-center bg-white p-4 rounded-xl mb-2">
              <StyledView className="w-10 h-10 bg-secondary rounded-full items-center justify-center">
                <Ionicons name="cart-outline" size={24} color="#007AFF" />
              </StyledView>
              <StyledView className="flex-1 ml-3">
                <StyledText className="text-base text-text-primary">Compra Online</StyledText>
                <StyledText className="text-sm text-text-secondary mt-0.5">Hoje • 14:30</StyledText>
              </StyledView>
              <StyledText className="text-base font-semibold text-red-500">-R$ 150,00</StyledText>
            </StyledView>
          ))}
        </StyledView>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}; 