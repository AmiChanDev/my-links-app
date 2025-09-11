import { MonoText } from "@/components/StyledText";
import React from "react";
import {
  View,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
  Share,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Updates from "expo-updates";
import { useEffect } from "react";

type LinkItem = {
  title: string;
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

const links: LinkItem[] = [
  { title: "Facebook", url: "https://web.facebook.com/ami.gamage.69/", icon: "facebook" },
  { title: "Instagram", url: "https://www.instagram.com/amichan6.9", icon: "instagram" },
  { title: "Whatsapp", url: "https://api.whatsapp.com/send?phone=94717982214&text=Hi%20from%20the%20app", icon: "whatsapp" },
  { title: "TikTok", url: "https://tiktok.com/@ami_chan69", icon: "music" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/gamageami", icon: "linkedin" },
  { title: "Github", url: "https://github.com/AmiChanDev", icon: "github" },
  { title: "Portfolio", url: "https://amichandev.github.io/portfolio/", icon: "globe" },
  { title: "Email", url: "mailto:gamageamantha@gmail.com", icon: "mail-forward" },
];

export default function App() {
  // Check for updates when the screen mounts
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          Alert.alert("Update available", "The app will reload to apply the latest changes.", [
            {
              text: "OK",
              onPress: async () => {
                await Updates.reloadAsync();
              },
            },
          ]);
        }
      } catch (e) {
        console.error("Error checking updates:", e);
      }
    };

    checkForUpdates();
  }, []);
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const shareLink = async (url: string, title: string) => {
    try {
      await Share.share({
        message: `${title.charAt(0).toUpperCase() + title.slice(1)} link: ${url}`,
      });
    } catch (error) {
      console.log("Error sharing link:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {links.map((link, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => openLink(link.url)}
          onLongPress={() => shareLink(link.url, link.title)}
        >
          <View style={styles.cardContent}>
            <FontAwesome name={link.icon} size={22} color="#fff" style={styles.icon} />
            <MonoText style={styles.cardText}>{link.title}</MonoText>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginRight: 12,
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
