import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {useActiveTab} from '../../contexts/ActiveTabContext'

const Tab = (props) => {
    const {
      isSelected,
      tabName,
      onPress
    } = props;
    const color = isSelected ? '#EEE' : 'blue';
    const textStyles = {color, fontSize: 32, fontWeight: isSelected ? 'bold' : 'normal'};
    const containerStyles = {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isSelected ? 'blue' : '#EEE',
      padding: 12
    }
    return (
      <TouchableOpacity style={containerStyles} onPress={onPress}>
        <Text style={textStyles}>{tabName}</Text>
      </TouchableOpacity>
    )
}

const BottomTabs = (props) => {
    const {
      tabs,
      onTabPressed,
      height
    } = props;
    const [activeTab, _] = useActiveTab()
    return (
      <SafeAreaView style={[styles.box, {height}]}>
        {
          tabs.map(({tabName}) => {
            return (
              <Tab
                onPress={() => onTabPressed(tabName)}
                key={tabName}
                tabName={tabName}
                isSelected={activeTab === tabName} />
            )
          })
        }
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  box: {
    flex: -1,
    minWidth: 140,
    backgroundColor: '#eee',
    width: '100%',
  },
});
export default BottomTabs;
