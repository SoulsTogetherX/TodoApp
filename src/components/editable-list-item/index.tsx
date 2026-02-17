import { View, Text, TextInput } from "react-native";
import { Button } from "components/button";
import { useState } from "react";
import styles from "./styles";
import globalStyles from "common/styles";

const DEFAULT_INFO: EditableListItemInfo = { title: "New Task" };

export const EditableListItem = ({
  info = DEFAULT_INFO,
  creation_date,
  onRemove,
  onSubmit,
  ...other
}: EditableListItemProps) => {
  const [isEditing, setEditing] = useState<boolean>(true);

  const onRemoveItem = () => {
    onRemove && onRemove(creation_date);
  };
  const onInfoSubmit = (info: EditableListItemInfo) => {
    console.log(creation_date, info);
    setEditing(false);
    onSubmit && onSubmit(creation_date, info);
  };
  const onInfoEdit = () => {
    setEditing(true);
  };

  return (
    <View>
      {isEditing ? (
        <EditableListItemState
          info={info}
          onRemove={onRemoveItem}
          onSubmit={onInfoSubmit}
        />
      ) : (
        <DefaultListItemState info={info} onEdit={onInfoEdit} />
      )}
    </View>
  );
};

const EditableListItemState = ({
  info,
  onRemove,
  onSubmit,
}: EditableListItemStateProps) => {
  const [infoDraft, setInfoDraft] = useState(info);

  const setTitle = (title: string) => {
    setInfoDraft({ ...infoDraft, title });
  };
  const onInfoSubmit = () => {
    onSubmit && onSubmit(infoDraft);
  };

  return (
    <>
      <TextInput
        placeholder={DEFAULT_INFO.title}
        value={infoDraft.title}
        onChangeText={setTitle}
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
  );
};

const DefaultListItemState = ({ info, onEdit }: DefaultListItemState) => {
  return (
    <>
      <Text style={{ color: globalStyles.text.color }}>
        {info?.title ?? ""}
      </Text>
      <Button title={"Edit"} onPress={onEdit} {...globalStyles.button} />
    </>
  );
};

interface EditableListItemStateProps {
  info: EditableListItemInfo;
  onRemove?: () => void;
  onSubmit?: (info: EditableListItemInfo) => void;
}

interface DefaultListItemState {
  info: EditableListItemInfo;
  onEdit?: () => void;
}

export interface EditableListItemProps {
  creation_date: number;
  info?: EditableListItemInfo;
  onRemove?: (creation_date: number) => void;
  onSubmit?: (creation_date: number, info: EditableListItemInfo) => void;
}

export interface EditableListItemInfo {
  title?: string;
}
