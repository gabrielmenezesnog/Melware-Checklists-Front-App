import React from 'react';
import {Text, Pressable} from 'react-native';

// Libs
import moment from 'moment';

// Styles;
import {white, dark} from './Styles';

// Redux
import {useSelector} from 'react-redux';

type iTaskListCard = {
  taskList: any;
  selectList: (id: string) => void;
};

const TaskListCard: React.FC<iTaskListCard> = ({taskList, selectList}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  const title = taskList.title;
  const date = moment(taskList.dateCreated).format('DD/MM/YYYY');
  const id = taskList.idTaskList;

  const handleSelectList = () => {
    selectList(id);
  };

  return (
    <Pressable style={style.taskListCard} onPress={handleSelectList}>
      <Text style={style.taskListTitle}>{title}</Text>
      <Text style={style.taskListDate}>{date}</Text>
    </Pressable>
  );
};

export default TaskListCard;
