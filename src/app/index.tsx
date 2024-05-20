import { router } from "expo-router";
import { Mail, UserRoundPlus } from "lucide-react-native";
import { Platform, Text, View } from "react-native";

import AppleIcon from "@/assets/logo-apple.svg";
import FacebookIcon from "@/assets/logo-facebook.svg";
import GoogleIcon from "@/assets/logo-google.svg";
import LogoImg from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { colors } from "@/styles/colors";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-between bg-gray-600 p-8">
      <View className="mb-4 mt-10 items-center justify-center gap-2">
        <LogoImg width={130} height={130} />
        <Text className="text-center font-body text-4xl text-white">
          EconomizApp
        </Text>
      </View>
      <View className="mb-6 items-center justify-center gap-3">
        <Text className="text-center font-subtitle text-3xl text-white">
          Controle total das suas {"\n"}finanças na palma da mão!
        </Text>
      </View>
      <View className="mb-6 items-center justify-center gap-3">
        <Text className="text-md mb-3 text-center font-body text-white">
          Faça seu login com {"\n"}alguma das opções abaixo
        </Text>
        <Button
          label="Acessar com E-mail"
          className="bg-violet-500"
          icon={<Mail width={24} height={24} color={colors.white} />}
          testID="button-login-google"
          onPress={() => {
            router.navigate("/signin");
          }}
        />
        <Button
          label="Acessar com Google"
          className="bg-red-600"
          icon={<GoogleIcon width={24} height={24} />}
          testID="button-login-google"
        />

        <Button
          label="Acessar com Facebook"
          className="bg-blue-700"
          icon={<FacebookIcon width={24} height={24} />}
          testID="button-login-facebook"
        />

        {Platform.OS === "ios" && (
          <Button
            label="Acessar com Apple"
            className="bg-white"
            labelClasses="text-gray-600"
            icon={<AppleIcon width={24} height={24} />}
            testID="button-login-apple"
          />
        )}

        <View className="my-4 flex flex-row items-center justify-center gap-3">
          <View className="h-0.5 w-36 bg-gray-300" />
          <Text className="text-center font-body text-xl font-bold text-gray-300">
            Ou
          </Text>
          <View className="h-0.5 w-36 bg-gray-300" />
        </View>

        <Button
          label="Cadastre-se com E-mail"
          className="bg-violet-500"
          icon={<UserRoundPlus width={24} height={24} color={colors.white} />}
          testID="button-login-signup"
          onPress={() => {
            router.navigate("/signup");
          }}
        />
      </View>
    </View>
  );
}
