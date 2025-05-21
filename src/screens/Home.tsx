import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);

type TransactionIconName = 'cart-outline' | 'arrow-down' | 'document-text-outline' | 'arrow-up' | 'barcode-outline' | 'card-outline' | 'warning-outline' | 'eye-outline' | 'person-circle-outline' | 'chevron-forward';

interface TransactionDetails {
  merchant?: string;
  location?: string;
  category?: string;
  paymentMethod?: string;
  from?: string;
  bank?: string;
  description?: string;
  recipient?: string;
  billType?: string;
  dueDate?: string;
}

interface Transaction {
  id: number;
  type: 'purchase' | 'transfer' | 'payment';
  title: string;
  amount: number;
  date: string;
  isSuspicious: boolean;
  suspiciousReason?: string;
  icon: TransactionIconName;
  details: TransactionDetails;
}

// Mock data for transactions
const transactions: Transaction[] = [
  {
    id: 1,
    type: 'purchase',
    title: 'Compra Online',
    amount: -150.00,
    date: 'Hoje • 14:30',
    isSuspicious: true,
    suspiciousReason: 'Local incomum de compra',
    icon: 'cart-outline',
    details: {
      merchant: 'E-commerce XYZ',
      location: 'São Paulo, SP',
      category: 'Compras',
      paymentMethod: 'Cartão de crédito final 1234',
    }
  },
  {
    id: 2,
    type: 'transfer',
    title: 'Transferência recebida',
    amount: 500.00,
    date: 'Hoje • 12:15',
    isSuspicious: false,
    icon: 'arrow-down',
    details: {
      from: 'João Silva',
      bank: 'Banco XYZ',
      description: 'Pagamento freelance',
    }
  },
  {
    id: 3,
    type: 'payment',
    title: 'Pagamento de conta',
    amount: -89.90,
    date: 'Ontem • 18:45',
    isSuspicious: true,
    suspiciousReason: 'Valor diferente do habitual',
    icon: 'document-text-outline',
    details: {
      recipient: 'Serviços Web LTDA',
      billType: 'Serviço',
      dueDate: '15/03/2024',
    }
  },
];

export const Home = () => {
  const handleTransactionPress = (transaction: Transaction) => {
    const details = Object.entries(transaction.details)
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');

    Alert.alert(
      transaction.title,
      `${details}${transaction.isSuspicious ? '\n\nAlerta: ' + transaction.suspiciousReason : ''}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <StyledSafeAreaView className="flex-1 bg-background">
      <StyledScrollView className="flex-1">
        {/* Header */}
        <StyledView className="flex-row justify-between items-center px-5 py-4">
          <StyledView>
            <StyledText className="text-2xl font-bold text-text-primary">Olá, Usuário</StyledText>
            <StyledText className="text-base text-text-secondary mt-1">Bem-vindo de volta!</StyledText>
          </StyledView>
          <StyledTouchableOpacity className="p-2">
            <Ionicons name="person-circle-outline" size={32} color="#1E293B" />
          </StyledTouchableOpacity>
        </StyledView>

        {/* Balance Card */}
        <StyledView className="bg-indigo-800 rounded-2xl p-5 mx-4 shadow-md">
          <StyledText className="text-white/80 text-base">Saldo disponível</StyledText>
          <StyledView className="flex-row justify-between items-center mt-2">
            <StyledText className="text-white text-3xl font-bold">R$ 5.234,50</StyledText>
            <StyledTouchableOpacity>
              <Ionicons name="eye-outline" size={24} color="#FFF" />
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>

        {/* Quick Actions */}
        <StyledView className="flex-row justify-around py-4 mx-4 mt-4 bg-surface rounded-xl shadow-sm">
          <StyledTouchableOpacity className="items-center">
            <StyledView className="w-12 h-12 bg-primary-light rounded-full items-center justify-center">
              <Ionicons name="arrow-up" size={24} color="#6366F1" />
            </StyledView>
            <StyledText className="mt-2 text-sm text-text-primary">Transferir</StyledText>
          </StyledTouchableOpacity>

          <StyledTouchableOpacity className="items-center">
            <StyledView className="w-12 h-12 bg-primary-light rounded-full items-center justify-center">
              <Ionicons name="barcode-outline" size={24} color="#6366F1" />
            </StyledView>
            <StyledText className="mt-2 text-sm text-text-primary">Pagar</StyledText>
          </StyledTouchableOpacity>

          <StyledTouchableOpacity className="items-center">
            <StyledView className="w-12 h-12 bg-primary-light rounded-full items-center justify-center">
              <Ionicons name="card-outline" size={24} color="#6366F1" />
            </StyledView>
            <StyledText className="mt-2 text-sm text-text-primary">Cartão</StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Recent Transactions */}
        <StyledView className="mt-6 px-4">
          <StyledText className="text-xl font-bold text-text-primary mb-4">Transações Recentes</StyledText>
          
          {/* Transaction Items */}
          {transactions.map((transaction) => (
            <StyledTouchableOpacity
              key={transaction.id}
              className="flex-row items-center bg-surface p-4 rounded-xl mb-2"
              onPress={() => handleTransactionPress(transaction)}
            >
              <StyledView className="w-10 h-10 bg-primary-light rounded-full items-center justify-center">
                <Ionicons name={transaction.icon} size={24} color="#6366F1" />
              </StyledView>
              <StyledView className="flex-1 ml-3">
                <StyledView className="flex-row items-center">
                  <StyledText className="text-base text-text-primary flex-1">{transaction.title}</StyledText>
                  {transaction.isSuspicious && (
                    <StyledView className="bg-danger/10 rounded-full px-2 py-1 mr-2">
                      <Ionicons name="warning-outline" size={16} color="#EF4444" />
                    </StyledView>
                  )}
                </StyledView>
                <StyledText className="text-sm text-text-secondary mt-0.5">{transaction.date}</StyledText>
              </StyledView>
              <StyledView className="items-end">
                <StyledText 
                  className={`text-base font-semibold ${
                    transaction.amount < 0 ? 'text-danger' : 'text-success'
                  }`}
                >
                  {transaction.amount < 0 ? '-' : '+'}R$ {Math.abs(transaction.amount).toFixed(2)}
                </StyledText>
                <StyledTouchableOpacity className="mt-1">
                  <Ionicons name="chevron-forward" size={20} color="#64748B" />
                </StyledTouchableOpacity>
              </StyledView>
            </StyledTouchableOpacity>
          ))}
        </StyledView>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}; 