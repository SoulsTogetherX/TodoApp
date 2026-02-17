import { ScrollView, FlatList, TouchableHighlight } from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { Button } from "components/button"
import { EditableItem, EditableItemProps } from "components/editable-item"
import Entypo from "@expo/vector-icons/Entypo"
import styles from "./styles"
import globalStyles from "app/styles"

const DEFAULT_TASK: TaskItemProps = {
  creation_date: 0,
  title: "New Task",
  description: "",
}

export default function Page() {
  const [items, setItems] = useState<TaskItemProps[]>([])
  const router = useRouter()

  // Task Operatons
  const addTask = () => {
    setItems([...items, { ...DEFAULT_TASK, creation_date: Date.now() }])
  }

  const removeTask = (creation_date: number) => {
    setItems(items.filter((item) => item.creation_date != creation_date))
  }

  const submitItem = (creation_date: number, title: string) => {
    const updatedItems = items.map((item) => {
      if (item.creation_date === creation_date) {
        return { ...item, title }
      }
      return item
    })

    setItems(updatedItems)
  }

  const duplicateItem = (creation_date: number) => {
    const itemIdx = getTaskIndex(items, creation_date)
    const updatedItems = [
      ...items.slice(0, itemIdx),
      {
        ...items[itemIdx],
        creation_date: Date.now(),
      },
      ...items.slice(itemIdx),
    ]

    setItems(updatedItems)
  }

  const selectItem = (creation_date: number) => {
    router.navigate("task-info-display")
  }

  // Standard props for each item in list
  const standardProps: EditableItemProps = {}

  return (
    <>
      <ScrollView style={styles.container}>
        <FlatList
          data={items}
          numColumns={2}
          renderItem={({ item }) => (
            <EditableItem
              {...standardProps}
              value={item.title}
              onRemove={() => removeTask(item.creation_date)}
              onSubmit={(value: string) =>
                submitItem(item.creation_date, value)
              }
              onDuplicate={() => duplicateItem(item.creation_date)}
              onSelected={() => selectItem(item.creation_date)}
            />
          )}
          keyExtractor={(item: TaskItemProps) => item.creation_date.toString()}
        />
      </ScrollView>
      <TouchableHighlight onPress={addTask} style={styles.addIconContainer}>
        <Entypo name="plus" style={styles.addIcon} />
      </TouchableHighlight>
    </>
  )
}

const getTaskIndex = (items: TaskItemProps[], creation_date: number) => {
  for (let i: number = 0; i < items.length; i++) {
    if (items[i].creation_date == creation_date) {
      return i
    }
  }

  return -1
}

interface TaskItemProps {
  creation_date: number
  title: string
  description?: string
}
