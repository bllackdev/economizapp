import { useState } from "react";

import { ScrollView, View } from "react-native";

import CreditCardMenu from "@/components/CreditCardMenu";
import Header from "@/components/Header";
import QuickMenu from "@/components/QuickMenu";
import Summary from "@/components/Summary";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className="flex-1 items-center bg-gray-100">
      <View className="items-center rounded-b-2xl bg-gray-600 px-8 pt-12">
        <Header />
      </View>

      <View className="w-full flex-1 items-center justify-center bg-gray-100 pt-3">
        <QuickMenu />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: "100%",
          }}
        >
          <View className="mb-28 items-center justify-center pt-3">
            <Summary />
            <CreditCardMenu isVisible={isVisible} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
