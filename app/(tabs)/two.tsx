import { StyleSheet, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { MonoText } from "@/components/StyledText";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      <Image
        source={require("../../assets/images/me.png")} // 🔹 replace with your own photo URL
        style={styles.profileImage}
      />

      {/* Name */}
      <MonoText style={styles.name}>Amantha Gamage</MonoText>

      {/* About Me */}
      <MonoText style={styles.description}>
        I’m a passionate developer who enjoys building apps, solving problems,
        and learning new technologies. Currently exploring mobile and web development.
      </MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
});
