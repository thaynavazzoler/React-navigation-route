import { View } from "react-native";

import Title from "../../components/Title";

import styles from "./styles.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home - Hello! today"} />
    </View>
  );
}
