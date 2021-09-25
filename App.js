// import React from 'react';

// import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
// import ICONS from "react-native-vector-icons/MaterialIcons"
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// const COLORS = {Primary: '#1f1456', white: '#fff'}


// const App = () => {
//   return <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.purple}}>
//     <View style ={styles.header}>
//       <Text style ={{fontWeight: 'bold', fontSize:25 , color: COLORS.Primary}}>
//         TODO APP
//         </Text>
//         <Icon name="delete" size ={25} color ="red"/>
//     </View>
// <View  style ={styles.footer}>
// <View style ={{styles,inputCointainer}}>
// <TextInput  placeholder="Add Todo" />
// </View>
// </View>
//     </SafeAreaView>;
    


// };


// const styles = StyleSheet.create({
// header: {
//   padding:20,
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',

// },
// footer: {
//   position: 'absolute',
//   bottom: 0,
//   color: COLORS.blue,
//   width: '100%',
//   flexDirection: 'row',
//   alignItems: 'center',
//   paddingHorizontal: 20,
// },
// inputCointainer:{
//   backgroundColor: COLORS.white,
//   elevation: 40,
//   height: 55,
//   flex: 1,
//   marginVertical: 20,
//   marginRight: 20,
//   borderRadius:30,
//   paddingHorizontal:25,
// }


// });
// export default App;











// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   TextInput,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const COLORS = {primary: '#1f145c', white: '#fff'};

// const App = () => {
//   const [todos, setTodos] = React.useState([]);
//   const [textInput, setTextInput] = React.useState('');

//   React.useEffect(() => {
//     getTodosFromUserDevice();
//   }, []);

//   React.useEffect(() => {
//     saveTodoToUserDevice(todos);
//   }, [todos]);

//   const addTodo = () => {
//     if (textInput == '') {
//       Alert.alert('Error', 'Please input todo');
//     } else {
//       const newTodo = {
//         id: Math.random(),
//         task: textInput,
//         completed: false,
//       };
//       setTodos([...todos, newTodo]);
//       setTextInput('');
//     }
//   };

//   const saveTodoToUserDevice = async todos => {
//     try {
//       const stringifyTodos = JSON.stringify(todos);
//       await AsyncStorage.setItem('todos', stringifyTodos);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getTodosFromUserDevice = async () => {
//     try {
//       const todos = await AsyncStorage.getItem('todos');
//       if (todos != null) {
//         setTodos(JSON.parse(todos));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const markTodoComplete = todoId => {
//     const newTodosItem = todos.map(item => {
//       if (item.id == todoId) {
//         return {...item, completed: true};
//       }
//       return item;
//     });

//     setTodos(newTodosItem);
//   };

//   const deleteTodo = todoId => {
//     const newTodosItem = todos.filter(item => item.id != todoId);
//     setTodos(newTodosItem);
//   };

//   const clearAllTodos = () => {
//     Alert.alert('Confirm', 'Clear todos?', [
//       {
//         text: 'Yes',
//         onPress: () => setTodos([]),
//       },
//       {
//         text: 'No',
//       },
//     ]);
//   };

//   const ListItem = ({todo}) => {
//     return (
//       <View style={styles.listItem}>
//         <View style={{flex: 1}}>
//           <Text
//             style={{
//               fontWeight: 'bold',
//               fontSize: 15,
//               color: COLORS.primary,
//               textDecorationLine: todo?.completed ? 'line-through' : 'none',
//             }}>
//             {todo?.task}
//           </Text>
//         </View>
//         {!todo?.completed && (
//           <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
//             <View style={[styles.actionIcon, {backgroundColor: 'purple'}]}>
//               <Icon name="done" size={20} color="white" />
//             </View>
//           </TouchableOpacity>
//         )}
//         <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
//           <View style={styles.actionIcon}>
//             <Icon name="delete" size={20} color="purple" />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: 'purple',
//       }}>
//       <View style={styles.header}>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             fontSize: 20,
//             color: COLORS.primary,
//           }}>
//           TODO APP
//         </Text>
//         {/* <Icon name="delete" size={25} color="red" onPress={clearAllTodos} /> */}
//       </View>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{padding: 20, paddingBottom: 100}}
//         data={todos}
//         renderItem={({item}) => <ListItem todo={item} />}
//       />

//       <View style={styles.footer}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             value={textInput}
//             placeholder=" "
//             onChangeText={text => setTextInput(text)}
//           />
//         </View>
//         <TouchableOpacity onPress={addTodo}>
//           <View style={styles.iconContainer}>
//             <Icon name="add" color="white" size={30} />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: COLORS.purple,
//   },
//   inputContainer: {
//     height: 50,
//     paddingHorizontal: 20,
//     elevation: 40,
//     backgroundColor: COLORS.white,
//     flex: 5,
//     marginTop:55,
//     marginVertical: 20,
//     marginRight: 20,
//     borderRadius: 30,
//   },
//   iconContainer: {
//     height: 50,
//     width: 50,
//     backgroundColor: COLORS.primary,
//     elevation: 40,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   listItem: {
//     padding: 20,
//     backgroundColor: COLORS.white,
//     flexDirection: 'row',
//     elevation: 12,
//     borderRadius: 7,
//     marginVertical: 10,
//   },
//   actionIcon: {
//     height: 25,
//     width: 25,
//     backgroundColor: COLORS.white,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//     marginLeft: 5,
//     borderRadius: 3,
  
//   },
//   header: {
//     padding: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// });

// export default App;
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');

  React.useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  React.useEffect(() => {
    saveTodoToUserDevice(todos);
  }, [todos]);

  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const saveTodoToUserDevice = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodosFromUserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        setTodos(JSON.parse(todos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const markTodoComplete = todoId => {
    const newTodosItem = todos.map(item => {
      if (item.id == todoId) {
        return {...item, completed: true};
      }
      return item;
    });

    setTodos(newTodosItem);
  };

  const deleteTodo = todoId => {
    const newTodosItem = todos.filter(item => item.id != todoId);
    setTodos(newTodosItem);
  };

  const clearAllTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ]);
  };

  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.primary,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
            <View style={[styles.actionIcon, {backgroundColor: 'purple'}]}>
              <Icon name="done" size={20} color="white" />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <View style={styles.actionIcon}>
            <Icon name="delete" size={20} color="purple" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'purple',
      }}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: COLORS.primary,
          }}>
          TODO APP
        </Text>
        {/* <Icon name="delete" size={25} color="red" onPress={clearAllTodos} /> */}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={textInput}
            placeholder=" "
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.purple,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 5,
    marginTop:55,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
    borderRadius: 3,
  
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;





// import React from 'react';
// import Main from './src/components/main'

// export default class App extends React.Component {
//   render(){
//     return (
//         <Main/>
//     );
//   }
// }






























