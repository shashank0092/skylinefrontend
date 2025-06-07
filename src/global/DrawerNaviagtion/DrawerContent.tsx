import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Checkbox} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {height} = Dimensions.get('window');

const CustomDrawer = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Connection Preferences</Text>

      <View style={styles.card}>
        <MaterialIcons
          name="favorite"
          size={30}
          color="#E91E63"
          style={styles.icon}
        />
        <View style={styles.textBox}>
          <Text style={styles.title}>For Dating</Text>
          <Text style={styles.subtitle}>
            Find someone special onboard. Connect with travelers for a possible
            spark.
          </Text>
        </View>
        <Checkbox
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => setChecked1(!checked1)}
          color="#E91E63"
        />
      </View>

      <View style={styles.card}>
        <MaterialIcons
          name="group"
          size={30}
          color="#2196F3"
          style={styles.icon}
        />
        <View style={styles.textBox}>
          <Text style={styles.title}>Make New Friends</Text>
          <Text style={styles.subtitle}>
            Share stories and smiles mid-air. Perfect for fun, friendly chats.
          </Text>
        </View>
        <Checkbox
          status={checked2 ? 'checked' : 'unchecked'}
          onPress={() => setChecked2(!checked2)}
          color="#2196F3"
        />
      </View>

      <View style={styles.card}>
        <MaterialIcons
          name="business-center"
          size={30}
          color="#673AB7"
          style={styles.icon}
        />
        <View style={styles.textBox}>
          <Text style={styles.title}>Business Talk</Text>
          <Text style={styles.subtitle}>
            Network with professionals. Share ideas, leads, or pitch your
            startup.
          </Text>
        </View>
        <Checkbox
          status={checked3 ? 'checked' : 'unchecked'}
          onPress={() => setChecked3(!checked3)}
          color="#673AB7"
        />
      </View>

      <Text style={styles.footer}>
        You can manage or update these later in settings.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
    backgroundColor: '#fdfdfd',
    minHeight: height,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 30,
    color: '#222',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'flex-start',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
  },
  icon: {
    marginTop: 5,
  },
  textBox: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 17,
    // fontWeight: '700',
    marginBottom: 4,
    color: '#111',
    fontFamily: 'Inter_24pt-Bold',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
    fontFamily: 'Inter_24pt-Bold',
  },
  footer: {
    marginTop: 40,
    fontSize: 12,
    textAlign: 'center',
    color: '#999',
    fontFamily: 'Inter_18pt-Bold',
  },
});

export default CustomDrawer;
