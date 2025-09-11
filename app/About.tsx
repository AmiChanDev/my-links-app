import { StyleSheet, ScrollView, Alert } from "react-native";
import { Text, View } from "@/components/Themed";
import { MonoText } from "@/components/StyledText";
import { FontAwesome } from "@expo/vector-icons";

export default function ModalScreen() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Name */}
      <MonoText style={styles.appName}>
        <FontAwesome name="code" size={28} color="#ff0101ff" /> Ami-Links
      </MonoText>

      {/* App Description */}
      <MonoText style={styles.description}>
        This App is a <Text style={styles.highlight}>personal link organizer</Text> that helps me keep all my
        important links in one place. Easily access my <Text style={styles.highlight}>social media profiles</Text>,
        <Text style={styles.highlight}> portfolio</Text>, and more, all from a clean and simple interface.
      </MonoText>

      {/* Features */}
      <View style={styles.features}>
        <MonoText style={styles.featureTitle}>Features:</MonoText>

        <View style={styles.featureCard}>
          <FontAwesome name="plus-circle" size={20} color="#4caf50" style={styles.featureIcon} />
          <MonoText style={styles.featureItem}>Organize my links</MonoText>
        </View>

        <View style={styles.featureCard}>
          <FontAwesome name="hand-pointer-o" size={20} color="#2196f3" style={styles.featureIcon} />
          <MonoText style={styles.featureItem}>Clickable cards with icons</MonoText>
        </View>

        <View style={styles.featureCard}>
          <FontAwesome name="rocket" size={20} color="#ff9800" style={styles.featureIcon} />
          <MonoText style={styles.featureItem}>Fast and easy to use</MonoText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#e0e0e0",
    marginBottom: 25,
    textAlign: "center",
  },
  highlight: {
    color: "#ffeb3b",
    fontWeight: "bold",
  },
  features: {
    width: "100%",
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  featureIcon: {
    marginRight: 12,
  },
  featureItem: {
    fontSize: 16,
    color: "#fff",
  },
});
