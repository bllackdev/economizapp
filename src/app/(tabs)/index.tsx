import { useState } from "react";

import { ScrollView, View } from "react-native";

import CreditCardMenu from "@/components/CreditCardMenu";
import Header from "@/components/Header";
// import QuickMenu from "@/components/QuickMenu";
import NextPayments from "@/components/NextPayments";
import Summary from "@/components/Summary";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View className="flex-1 items-center bg-gray-100">
      <View className="items-center rounded-b-2xl bg-gray-600 px-8 pt-12">
        <Header />
      </View>

      <View className="w-full flex-1 items-center justify-center bg-gray-50 pt-3">
        {/* <QuickMenu /> */}
        <Summary isVisible={isVisible} setIsVisible={setIsVisible} />
        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
          <View className="items-center justify-center pb-28 pt-3">
            <NextPayments isVisible={isVisible} />
            <CreditCardMenu isVisible={isVisible} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
