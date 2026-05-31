import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [searchText, setSearchText] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Bienvenido a EcoReEngine</Text>
            <Text style={styles.contentSubText}>Tu plataforma de proyectos ecológicos</Text>
          </View>
        );
      case 'herramientas':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Herramientas</Text>
            <Text style={styles.contentSubText}>Accede a nuestras herramientas</Text>
          </View>
        );
      case 'juegos':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Juegos</Text>
            <Text style={styles.contentSubText}>Aprende jugando</Text>
          </View>
        );
      case 'cuenta':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Mi Cuenta</Text>
            <Text style={styles.contentSubText}>Gestiona tu perfil</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>EcoReEngine</Text>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar proyectos..."
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color="#17a698" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        {renderContent()}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('inicio')}
        >
          <Ionicons
            name={activeTab === 'inicio' ? 'home' : 'home-outline'}
            size={32}
            color={activeTab === 'inicio' ? '#fff' : '#ccc'}
          />
          <Text style={[styles.navLabel, activeTab === 'inicio' && styles.navLabelActive]}>
            inicio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('herramientas')}
        >
          <Ionicons
            name={activeTab === 'herramientas' ? 'build' : 'build-outline'}
            size={32}
            color={activeTab === 'herramientas' ? '#fff' : '#ccc'}
          />
          <Text style={[styles.navLabel, activeTab === 'herramientas' && styles.navLabelActive]}>
            herramientas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('juegos')}
        >
          <Ionicons
            name={activeTab === 'juegos' ? 'game-controller' : 'game-controller-outline'}
            size={32}
            color={activeTab === 'juegos' ? '#fff' : '#ccc'}
          />
          <Text style={[styles.navLabel, activeTab === 'juegos' && styles.navLabelActive]}>
            juegos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('cuenta')}
        >
          <Ionicons
            name={activeTab === 'cuenta' ? 'person' : 'person-outline'}
            size={32}
            color={activeTab === 'cuenta' ? '#fff' : '#ccc'}
          />
          <Text style={[styles.navLabel, activeTab === 'cuenta' && styles.navLabelActive]}>
            cuenta
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#17a698',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  contentSubText: {
    fontSize: 16,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#17a698',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingTop: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    flex: 1,
  },
  navLabel: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default App;
