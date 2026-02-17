import { ScrollView, FlatList } from "react-native";
import { Button } from "components/button";
import {
  EditableListItem,
  EditableListItemProps,
  EditableListItemInfo,
} from "components/editable-list-item";
import { useState } from "react";
import styles from "./styles";
import globalStyles from "common/styles";

export default function Page() {
  const [items, setItems] = useState<EditableListItemProps[]>([]);

  const addTask = () => {
    setItems([
      ...items,
      {
        creation_date: Date.now(),
      },
    ]);
  };
  const removeTask = (creation_date: number) => {
    setItems(items.filter((item) => item.creation_date != creation_date));
  };
  const submitItem = (creation_date: number, info?: EditableListItemInfo) => {
    const updatedTasks = items.map((item) => {
      if (item.creation_date === creation_date) {
        return { ...item, info };
      }
      return item;
    });

    setItems(updatedTasks);
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <EditableListItem
            {...item}
            onRemove={removeTask}
            onSubmit={submitItem}
          />
        )}
        keyExtractor={(item: EditableListItemProps) =>
          item.creation_date.toString()
        }
      />
      <Button title="Add Task" onPress={addTask} {...globalStyles.button} />
    </ScrollView>
  );
}
