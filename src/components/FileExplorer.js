import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const FileExplorer = ({ explorer, numOfItems }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <View>
        <TouchableOpacity onPress={() => setExpand(!expand)}>
          <Text>{explorer.name}</Text>
        </TouchableOpacity>
        <View style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
          {explorer.items.map((item) => (
            <FileExplorer key={explorer.name} explorer={item} />
          ))}
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>{explorer.name}</Text>
      </View>
    );
  }
};

export default FileExplorer;
