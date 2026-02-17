import { View, Text, TextInput, TouchableHighlight } from "react-native"
import { Button } from "components/button"
import { useState } from "react"
import globalStyles from "app/styles"
import styles from "./styles"

export const EditableItem = ({
  value = "",
  placeholder = "",
  onRemove,
  onSubmit,
  onDuplicate,
  onSelected,
}: EditableItemProps) => {
  const [isEditing, setEditing] = useState<boolean>(false)

  const onRemoveItem = () => {
    onRemove && onRemove()
  }
  const onInfoSubmit = (val: string) => {
    setEditing(false)
    onSubmit && onSubmit(val)
  }
  const onInfoEdit = () => {
    setEditing(true)
  }
  const onInfoDuplicate = () => {
    onDuplicate && onDuplicate()
  }
  const onInfoSelect = () => {
    onSelected && onSelected()
  }

  return (
    <View style={styles.container}>
      {isEditing ? (
        <ItemEditableState
          value={value}
          placeholder={placeholder}
          onRemove={onRemoveItem}
          onSubmit={onInfoSubmit}
        />
      ) : (
        <ItemDefaultState
          value={value}
          onEdit={onInfoEdit}
          onDuplicate={onInfoDuplicate}
          onSelected={onInfoSelect}
        />
      )}
    </View>
  )
}

const ItemEditableState = ({
  value,
  placeholder,
  onRemove,
  onSubmit,
}: ItemEditableStateProps) => {
  const [draft, setDraft] = useState<string>(value)

  const onInfoSubmit = () => {
    onSubmit && onSubmit(draft)
  }

  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={draft}
        onChangeText={setDraft}
        placeholderTextColor={globalStyles.text.color}
        style={{ color: globalStyles.text.color }}
      />
      <Button
        title={"Submit"}
        onPress={onInfoSubmit}
        {...globalStyles.button}
      />
      <Button title={"Remove"} onPress={onRemove} {...globalStyles.button} />
    </>
  )
}

const ItemDefaultState = ({
  value,
  onEdit,
  onDuplicate,
  onSelected,
}: ItemDefaultState) => {
  return (
    <>
      <TouchableHighlight onPress={onSelected}>
        <View>
          <Text style={{ color: globalStyles.text.color }}>{value}</Text>
        </View>
      </TouchableHighlight>
      <Button title={"Edit"} onPress={onEdit} {...globalStyles.button} />
      <Button
        title={"Duplicate"}
        onPress={onDuplicate}
        {...globalStyles.button}
      />
    </>
  )
}

interface ItemEditableStateProps {
  value: string
  placeholder: string
  onRemove?: () => void
  onSubmit?: (value: string) => void
}

interface ItemDefaultState {
  value: string
  onEdit?: () => void
  onDuplicate?: () => void
  onSelected?: () => void
}

export interface EditableItemProps {
  value?: string
  placeholder?: string
  onRemove?: () => void
  onSubmit?: (value: string) => void
  onDuplicate?: () => void
  onSelected?: () => void
}
