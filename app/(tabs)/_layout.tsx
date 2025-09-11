import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { MonoText } from '@/components/StyledText';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Link Tree',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarLabel: ({ color }) => (
            <MonoText style={{ color, fontSize: 10,textAlign: 'center',alignItems: 'center' }}>Links</MonoText>
          ),
          headerTitle: () => <MonoText>Link Tree</MonoText>,
          headerRight: () => (
            <Link href="/About" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'About Me',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarLabel: ({ color }) => (
            <MonoText style={{ color, fontSize: 10 }}>About Me</MonoText>
          ),
          headerTitle: () => <MonoText>About Me</MonoText>,
        }}
      />
    </Tabs>

  );
}
