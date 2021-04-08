import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Task from '../components/Task';
import Footer from '../components/footer';

export default ({ navigation })=> {

  const [ taskState,setTaskState ] = useState({
    items:[],
  });
  
  const onTaskSubmit = (task)=>{ 
    const taskExist = taskState.items.find(elt => elt.text === task.text );
      if (!taskExist) {
          setTaskState((prevState)=>({
            ...prevState,
            items:prevState.items.concat(task),
          }))
        };
  }
  
  const deleteTask = (taskText)=>{
        setTaskState((prevState) => ({
          ...prevState,
          items: prevState.items.filter(elt => elt.text !== taskText),
        }));
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
              <Text style={styles.sectionTitle}>Today's tasks</Text>
              <View style={styles.items}>
                  {
                    taskState.items[0]?
                        taskState.items.map((task, index) =>
                        
                            <Task 
                              text = { task.text }
                              key = { `${task.text} ${index}` }
                              onDeleteTask={deleteTask}
                              navigation={navigation}
                            />):
                                
                        <Text style={styles.noContentTitle}> There are no tasks so far! </Text>
                  }
              </View>
        </View>
        <View style={styles.footer}>
          <Footer onTaskSubmit={onTaskSubmit} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 20,
    justifyContent:"space-between",
  },
  
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize:24,
    fontWeight:'bold',
  },
  
  taskWrapper:{
    paddingTop: 20,
  },
  
  textInput:{
     height: 40, 
     borderColor: 'gray', 
     borderWidth: 1,
  },
  noContentTitle: {
      fontFamily: 'monospace',
      fontSize: 22,
      color: "#8E9492",
      textAlign:"center",
      marginTop:"50%"
    },
});
