import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomDropdownMenu = ({ data, defaultButtonText, onSelect }) => {

  return (
      <SelectDropdown
        data={data}
        defaultButtonText={defaultButtonText}
        onSelect={onSelect}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={14} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
  )
}

export default CustomDropdownMenu;

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: '80%',
    height: 35,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginVertical: 5
  },
  dropdown1BtnTxtStyle: {
    color: '#716F81',
    textAlign: 'center',
    fontSize: 15
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 5
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
    height: 35
  },
  dropdown1RowTxtStyle: {
    color: '#716F81',
    textAlign: 'center',
    fontSize: 15
  },
})