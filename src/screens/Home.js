import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Task from '../components/Task';
import Footer from '../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTasks,
  fetchAllTasks,
  deleteTasks
} from '../redux/actions/allActions';


export default ({ navigation })=> {
  
  const tasksStore = useSelector(store => store.allTasks);
  const dispatch = useDispatch();

  const [ taskState,setTaskState ] = useState({
    items:[],
    render: false,
  });
  
  
  useEffect(()=>{
    dispatch( fetchAllTasks() );
  },[taskState.render]);
  
  const onTaskSubmit = (task)=>{ 
    const taskExist = tasksStore.data.find(elt => elt.text === task.text);
      if (!taskExist) {
          dispatch(addTasks (task));
        };
        
    setTaskState((prevState) => ({
      ...prevState,
      render: !prevState.render,
    }));
  }
  
  const deleteTask = (task)=>{
    dispatch( deleteTasks(task) );
    setTaskState((prevState) => ({
      ...prevState,
      render: !prevState.render,
    }));
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
              <Text style={styles.sectionTitle}>Today's tasks</Text>
              <View style={styles.items}>
                  {
                    tasksStore.data[0]?
                        tasksStore.data.map((task, index) =>
                            <Task 
                              text = { task.text }
                              key = { `${task.text} ${index}` }
                              onDeleteTask={()=>deleteTask(task)}
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
