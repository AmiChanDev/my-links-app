import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { MonoText } from "@/components/StyledText";

export default function ModalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Icon */}
      <Image
        source={{ uri: "https://via.placeholder.com/120" }} // Replace with your app icon URL
        style={styles.appIcon}
      />

      {/* App Name */}
      <MonoText style={styles.appName}>My Links App</MonoText>

      {/* App Description */}
      <MonoText style={styles.description}>
        My Links App is a personal link organizer that helps me keep all my
        important links in one place. Easily access my social media profiles,
        portfolio, resume, and more, all from a clean and simple interface.
      </MonoText>

      {/* Features */}
      <View style={styles.features}>
        <MonoText style={styles.featureTitle}>Features:</MonoText>
        <MonoText style={styles.featureItem}>• Add and organize your links</MonoText>
        <MonoText style={styles.featureItem}>• Clickable cards with icons</MonoText>
        <MonoText style={styles.featureItem}>• Fast and easy to use</MonoText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  appIcon: {
    width: 120,
    height: 120,
    borderRadius: 24,
    marginBottom: 20,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  features: {
    width: "100%",
    marginTop: 10,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    lineHeight: 24,
  },
});
